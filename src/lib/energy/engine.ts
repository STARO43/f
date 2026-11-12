// Движок книжных сцен: рендерер, камера, мягкий свет, пол, орбитальное
// управление, подсветка наведения, потактовый цикл, плавные твины.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PAPER, PAPER_DEEP, C, chipSprite, applyShadows, PROTECTED_TEXTURES } from './kit';

export interface Readout {
  label: string;
  value: string;
}

export interface SceneAPI {
  scene: THREE.Scene;
  /** зарегистрировать кликабельный объект (мягкая подсветка при наведении) */
  clickable(root: THREE.Object3D, onClick: () => void): void;
  /** перетаскиваемый объект: «схватил — потянул — отпустил» */
  draggable(root: THREE.Object3D, handlers: DragHandlers): void;
  /** наведение мышью без клика: колбэк при входе и выходе курсора */
  hover(root: THREE.Object3D, onHover: (hovered: boolean) => void): void;
  /** живые показания под сценой */
  readouts(list: Readout[]): void;
  /** подпись-плашка в сцене на 2.6 с */
  caption(text: string, at: THREE.Vector3): void;
  /** короткое сообщение-подсказка внизу сцены */
  toast(text: string): void;
  /** автоматически кадрировать камеру по содержимому сцены */
  fit(dir: [number, number, number], target?: [number, number, number], pad?: number): void;
  /** плавный поворот группы вокруг оси Y во времени */
  tween(dur: number, apply: (k: number) => void, ease?: (k: number) => number, done?: () => void): void;
}

export interface DragHandlers {
  /** плоскость, на которую проецируется курсор; по умолчанию — экранная плоскость через точку захвата */
  plane?: THREE.Plane;
  onStart?(p: THREE.Vector3): void;
  onMove?(p: THREE.Vector3, delta: THREE.Vector3): void;
  onEnd?(p: THREE.Vector3): void;
  /** короткое нажатие без перетаскивания */
  onClick?(): void;
  /** можно ли сейчас захватить объект */
  active?: () => boolean;
}

export interface ExpHandle {
  setParam(v: number): void;
  tick(dt: number, t: number): void;
}

export interface Experiment {
  build(api: SceneAPI, param: number): ExpHandle;
}

export const easeInOut = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
export const easeOut = (k: number) => 1 - Math.pow(1 - k, 3);

interface ClickEntry {
  root: THREE.Object3D;
  meshes: THREE.Mesh[];
  onClick: () => void;
  hoverTarget: number;
  hoverCur: number;
}

interface DragEntry {
  root: THREE.Object3D;
  meshes: THREE.Mesh[];
  h: DragHandlers;
  hoverTarget: number;
  hoverCur: number;
}

interface HoverEntry {
  meshes: THREE.Mesh[];
  onHover: (hovered: boolean) => void;
}

/** экранная плоскость через точку (нормаль — на камеру) */
function screenPlane(at: THREE.Vector3, camera: THREE.PerspectiveCamera): THREE.Plane {
  const n = new THREE.Vector3();
  camera.getWorldDirection(n);
  return new THREE.Plane().setFromNormalAndCoplanarPoint(n, at);
}

export class BookEngine {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  private container: HTMLElement;
  private exp: ExpHandle | null = null;
  private disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];
  private clickables: ClickEntry[] = [];
  private draggables: DragEntry[] = [];
  private hoverables: HoverEntry[] = [];
  private hoverExtra: HoverEntry | null = null;
  private drag: { entry: DragEntry; plane: THREE.Plane; last: THREE.Vector3; moved: number } | null = null;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2(-10, -10);
  private pointerInside = false;
  private hovered: ClickEntry | DragEntry | null = null;
  private tweens: { t: number; dur: number; apply: (k: number) => void; ease: (k: number) => number; done?: () => void }[] = [];
  private lastFrame = 0;
  private latestReadouts: Readout[] = [];
  private lastReadoutAt = 0;
  private captionSprite: THREE.Sprite | null = null;
  private captionAge = 0;
  private onToast: (text: string) => void = () => {};
  private onReadouts: (html: string) => void = () => {};
  private raf = 0;
  private ro: ResizeObserver;
  private t = 0;
  private disposed = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.domElement.className = 'bk-canvas';
    container.appendChild(this.renderer.domElement);

    this.scene.background = new THREE.Color(PAPER);
    this.scene.fog = new THREE.Fog(PAPER, 20, 46);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
    this.camera.position.set(6.4, 5.2, 8.6);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 1.2, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;
    this.controls.rotateSpeed = 0.55;
    this.controls.enablePan = false;
    this.controls.minDistance = 1.2;
    this.controls.maxDistance = 20;
    this.controls.minPolarAngle = 0.18;
    this.controls.maxPolarAngle = 1.42;

    this.buildEnvironment();

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.resize();

    const el = this.renderer.domElement;
    el.addEventListener('pointermove', this.onPointerMove);
    el.addEventListener('pointerleave', this.onPointerLeave);
    // захват объекта — на контейнере в фазе захвата, чтобы отключить орбиту
    // до того, как OrbitControls получит событие
    container.addEventListener('pointerdown', this.onPointerDown);

    this.loop();
  }

  private buildEnvironment() {
    // мягкий тёплый свет
    const hemi = new THREE.HemisphereLight(0xfff6e3, 0xcdb894, 1.0);
    this.scene.add(hemi);
    const key = new THREE.DirectionalLight(0xfff1d8, 1.65);
    key.position.set(6, 9, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -9;
    key.shadow.camera.right = 9;
    key.shadow.camera.top = 9;
    key.shadow.camera.bottom = -9;
    key.shadow.camera.far = 32;
    key.shadow.bias = -0.0004;
    key.shadow.radius = 7;
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xf4e6cf, 0.5);
    fill.position.set(-7, 5, -4);
    this.scene.add(fill);

    // пол в цвет страницы, принимающий мягкие тени + тёплая «скатерть»-диск
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(46, 48).rotateX(-Math.PI / 2),
      new THREE.ShadowMaterial({ opacity: 0.16, color: 0x6b573f }),
    );
    ground.position.y = -0.005;
    ground.receiveShadow = true;
    ground.userData.env = true;
    this.scene.add(ground);

    const rug = new THREE.Mesh(
      new THREE.CircleGeometry(6.4, 64).rotateX(-Math.PI / 2),
      std0(PAPER_DEEP, { roughness: 1 }),
    );
    rug.position.y = 0;
    rug.receiveShadow = true;
    rug.userData.env = true;
    this.scene.add(rug);
  }

  setCallbacks(o: { onToast?: (t: string) => void; onReadouts?: (html: string) => void }) {
    if (o.onToast) this.onToast = o.onToast;
    if (o.onReadouts) this.onReadouts = o.onReadouts;
  }

  private apiFor(): SceneAPI {
    return {
      scene: this.scene,
      clickable: (root, onClick) => {
        const meshes: THREE.Mesh[] = [];
        root.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.isMesh && m.material) {
            const mm = m.material as THREE.MeshStandardMaterial;
            if (mm.emissive) {
              mm.emissive.setHex(0xc79a3f);
              mm.emissiveIntensity = 0;
            }
            meshes.push(m);
          }
        });
        this.clickables.push({ root, meshes, onClick, hoverTarget: 0, hoverCur: 0 });
      },
      draggable: (root, h) => {
        const meshes: THREE.Mesh[] = [];
        root.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.isMesh && m.material) {
            const mm = m.material as THREE.MeshStandardMaterial;
            if (mm.emissive) {
              if (mm.emissive.getHex() === 0x000000) mm.emissive.setHex(0xc79a3f);
              mm.emissiveIntensity = 0;
            }
            meshes.push(m);
          }
        });
        this.draggables.push({ root, meshes, h, hoverTarget: 0, hoverCur: 0 });
      },
      hover: (root, onHover) => {
        const meshes: THREE.Mesh[] = [];
        root.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.isMesh && m.material) meshes.push(m);
        });
        this.hoverables.push({ meshes, onHover });
      },
      readouts: (list) => {
        this.latestReadouts = list;
      },
      caption: (text, at) => {
        if (this.captionSprite) {
          this.scene.remove(this.captionSprite);
          this.captionSprite.material.map?.dispose();
          this.captionSprite.material.dispose();
        }
        // размер плашки подстраивается под масштаб сцены, чтобы близкие
        // крупные планы не перекрывались гигантской подписью
        const dist = this.camera.position.distanceTo(at);
        const sp = chipSprite(text, THREE.MathUtils.clamp(dist * 0.045, 0.06, 0.42));
        sp.position.copy(at);
        this.scene.add(sp);
        this.captionSprite = sp;
        this.captionAge = 0;
      },
      toast: (text) => this.onToast(text),
      fit: (dir, target, pad = 1.14) => this.fitCamera(dir, target, pad),
      tween: (dur, apply, ease = easeInOut, done) => {
        this.tweens.push({ t: 0, dur, apply, ease, done });
      },
    };
  }

  /** Собрать сцену опыта (старая утилизируется) */
  load(experiment: Experiment, param: number) {
    if (this.exp) {
      this.exp = null;
    }
    this.cancelDrag();
    this.disposeContents();
    this.clickables = [];
    this.draggables = [];
    this.hoverables = [];
    this.setHoverExtra(null);
    this.tweens = [];
    if (this.captionSprite) {
      this.scene.remove(this.captionSprite);
      this.captionSprite = null;
    }
    this.latestReadouts = [];
    this.exp = experiment.build(this.apiFor(), param);
    this.renderer.render(this.scene, this.camera);
  }

  private disposeContents() {
    const keep = new Set<THREE.Object3D>();
    this.scene.children.forEach((o) => {
      if ((o as THREE.Light).isLight) keep.add(o);
      if (o.userData?.env) keep.add(o);
      const m = o as THREE.Mesh;
      if (m.isMesh && (m.material as THREE.Material)?.type === 'ShadowMaterial') keep.add(o);
    });
    const removed: THREE.Object3D[] = [];
    this.scene.children.slice().forEach((o) => {
      if (!keep.has(o)) {
        this.scene.remove(o);
        removed.push(o);
      }
    });
    removed.forEach((root) =>
      root.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh && mesh.geometry) mesh.geometry.dispose();
        const sp = o as THREE.Sprite;
        const isSprite = (sp as unknown as { isSprite?: boolean }).isSprite === true;
        if (!mesh.isMesh && !isSprite) return;
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : mesh.material
            ? [mesh.material]
            : isSprite
              ? [sp.material]
              : [];
        mats.forEach((mm) => {
          if (!mm) return;
          const m3 = mm as THREE.MeshStandardMaterial;
          if (m3.map && !PROTECTED_TEXTURES.has(m3.map)) m3.map.dispose();
          m3.dispose();
        });
      }),
    );
  }

  /** Кадрирование по содержимому сцены (без окружения и подписей-спрайтов) */
  private fitCamera(dir: [number, number, number], target?: [number, number, number], pad = 1.12) {
    this.scene.updateMatrixWorld(true);
    const box = new THREE.Box3();
    const tmp = new THREE.Box3();
    this.scene.traverse((o) => {
      if (o.userData?.env) return;
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh || !mesh.geometry || !mesh.visible) return;
      if (o.userData?.noFit) return;
      tmp.setFromObject(mesh);
      if (Number.isFinite(tmp.min.x) && Number.isFinite(tmp.max.x)) box.union(tmp);
    });
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const d = new THREE.Vector3(...dir).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(d, up).normalize();
    const upV = new THREE.Vector3().crossVectors(right, d).normalize();
    const vFov = (this.camera.fov * Math.PI) / 180;
    const aspect = this.camera.aspect || 1.6;
    const tanV = Math.tan(vFov / 2);
    const tanH = Math.tan(2 * Math.atan(tanV * aspect) / 2);
    const corner = new THREE.Vector3();
    let dist = 1;
    for (let i = 0; i < 8; i++) {
      corner.set(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z);
      const rel = corner.sub(center);
      const depth = rel.dot(d);
      const need = Math.max(Math.abs(rel.dot(right)) / tanH, Math.abs(rel.dot(upV)) / tanV) + depth;
      dist = Math.max(dist, need);
    }
    dist = Math.max(dist * pad, this.controls.minDistance);
    const t = target ? new THREE.Vector3(...target) : center;
    this.camera.position.copy(t).addScaledVector(d, dist);
    this.controls.target.copy(t);
    this.controls.update();
  }

  expHandle() {
    return this.exp;
  }

  resize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private setPointer(e: { clientX: number; clientY: number }) {
    const r = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  }

  private onPointerMove = (e: PointerEvent) => {
    this.setPointer(e);
    this.pointerInside = true;
  };

  private onPointerLeave = () => {
    this.pointerInside = false;
    this.hovered = null;
    this.setHoverExtra(null);
  };

  private onPointerDown = (e: PointerEvent) => {
    if (this.drag) return;
    this.setPointer(e);
    this.pointerInside = true;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.pickDrag();
    if (!hit) {
      const click = this.pick();
      if (click) click.onClick();
      return;
    }
    const h = hit.h;
    if (h.active && !h.active()) return;
    const hitPoint =
      this.raycaster.intersectObjects(hit.meshes, false)[0]?.point.clone() ??
      this.raycaster.ray.origin.clone().addScaledVector(this.raycaster.ray.direction, 6);
    const plane = h.plane ? h.plane.clone() : screenPlane(hitPoint, this.camera);
    this.drag = { entry: hit, plane, last: hitPoint.clone(), moved: 0 };
    this.controls.enabled = false;
    this.renderer.domElement.style.cursor = 'grabbing';
    window.addEventListener('pointermove', this.onDragMove);
    window.addEventListener('pointerup', this.onDragUp);
    window.addEventListener('pointercancel', this.onDragUp);
    h.onStart?.(hitPoint);
  };

  private onDragMove = (e: PointerEvent) => {
    if (!this.drag) return;
    this.setPointer(e);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const p = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(this.drag.plane, p)) return;
    const delta = p.clone().sub(this.drag.last);
    this.drag.moved += delta.length();
    this.drag.last.copy(p);
    this.drag.entry.h.onMove?.(p, delta);
  };

  private onDragUp = () => {
    if (!this.drag) return;
    const h = this.drag.entry.h;
    if (this.drag.moved < 0.06) h.onClick?.();
    else h.onEnd?.(this.drag.last);
    this.cancelDrag();
  };

  private cancelDrag() {
    window.removeEventListener('pointermove', this.onDragMove);
    window.removeEventListener('pointerup', this.onDragUp);
    window.removeEventListener('pointercancel', this.onDragUp);
    this.drag = null;
    this.controls.enabled = true;
    if (this.renderer.domElement.style.cursor === 'grabbing') this.renderer.domElement.style.cursor = '';
  }

  private pickDrag(): DragEntry | null {
    const meshes = this.draggables.flatMap((c) => c.meshes);
    if (!meshes.length) return null;
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    const target = hits[0].object as THREE.Mesh;
    return this.draggables.find((c) => c.meshes.includes(target)) ?? null;
  }

  private pick(): ClickEntry | null {
    const meshes = this.clickables.flatMap((c) => c.meshes);
    if (!meshes.length) return null;
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    const target = hits[0].object as THREE.Mesh;
    return this.clickables.find((c) => c.meshes.includes(target)) ?? null;
  }

  private pickHoverable(): HoverEntry | null {
    const meshes = this.hoverables.flatMap((c) => c.meshes);
    if (!meshes.length) return null;
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    const target = hits[0].object as THREE.Mesh;
    return this.hoverables.find((c) => c.meshes.includes(target)) ?? null;
  }

  private setHoverExtra(next: HoverEntry | null) {
    if (next === this.hoverExtra) return;
    this.hoverExtra?.onHover(false);
    this.hoverExtra = next;
    next?.onHover(true);
  }

  private loop = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = this.lastFrame ? Math.min((now - this.lastFrame) / 1000, 0.05) : 0.016;
    this.lastFrame = now;
    this.t += dt;

    // твины
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t += dt;
      const k = Math.min(tw.t / tw.dur, 1);
      tw.apply(tw.ease(k));
      if (k >= 1) {
        this.tweens.splice(i, 1);
        tw.done?.();
      }
    }

    // наведение
    let extra: HoverEntry | null = null;
    if (this.pointerInside && !this.drag) {
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const dragHit = this.pickDrag();
      const clickHit = dragHit ? null : this.pick();
      extra = this.pickHoverable();
      this.hovered = dragHit ?? clickHit;
      this.renderer.domElement.style.cursor = dragHit ? 'grab' : clickHit ? 'pointer' : extra ? 'help' : '';
    }
    this.setHoverExtra(extra);
    const all: (ClickEntry | DragEntry)[] = [...this.clickables, ...this.draggables];
    all.forEach((c) => {
      c.hoverTarget = c === this.hovered ? 1 : 0;
      c.hoverCur += (c.hoverTarget - c.hoverCur) * (1 - Math.exp(-10 * dt));
      c.meshes.forEach((m) => {
        const mm = m.material as THREE.MeshStandardMaterial;
        if (mm.emissive) mm.emissiveIntensity = c.hoverCur * 0.28;
      });
    });

    // подпись-плашка
    if (this.captionSprite) {
      this.captionAge += dt;
      const a = this.captionAge;
      const op = a < 0.25 ? a / 0.25 : a > 2.1 ? Math.max(0, 1 - (a - 2.1) / 0.5) : 1;
      (this.captionSprite.material as THREE.SpriteMaterial).opacity = op;
      this.captionSprite.position.y += dt * this.captionSprite.scale.y * 0.35;
      if (a > 2.6) {
        this.scene.remove(this.captionSprite);
        this.captionSprite = null;
      }
    }

    // опыт
    this.exp?.tick(dt, this.t);

    // показания (не чаще 8 Гц)
    if (this.t - this.lastReadoutAt > 0.12 && this.latestReadouts.length) {
      this.lastReadoutAt = this.t;
      this.onReadouts(
        this.latestReadouts.map((r) => `${r.label} = <b>${r.value}</b>`).join('<span class="bk-sep">·</span>'),
      );
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
    const el = this.renderer.domElement;
    el.removeEventListener('pointermove', this.onPointerMove);
    el.removeEventListener('pointerleave', this.onPointerLeave);
    this.container.removeEventListener('pointerdown', this.onPointerDown);
    this.cancelDrag();
    this.disposeContents();
    this.controls.dispose();
    this.renderer.dispose();
    el.remove();
  }
}

function std0(color: number, o: Partial<THREE.MeshStandardMaterialParameters> = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, ...o });
}

export { C, applyShadows };
