// Общая библиотека для трёхмерных сцен: тёплая «книжная» палитра,
// материалы, подписи, столбцы энергии, потоки-бусины, пламя, пар, пружина.
import * as THREE from 'three';

// ───────────────────────────── Палитра ─────────────────────────────

export const PAPER = 0xf6efe1; // цвет страницы
export const PAPER_DEEP = 0xeadfc8;

export const C = {
  ink: 0x40342a,
  inkSoft: 0x6b5c4d,
  woodLight: 0xd9bb90,
  wood: 0xbd9161,
  woodDark: 0x8a6039,
  brass: 0xc0913c,
  copper: 0xa9662f,
  steel: 0x9aa0a6,
  clay: 0xb26a4c,
  sage: 0x7f8b58,
  amber: 0xd99a3d,
  water: 0x9fc0c6,
  cream: 0xefe6d2,
  graphite: 0x4c4338,
} as const;

// Цвета столбцов энергии (потенциальная / кинетическая / тепловая)
export const ENERGY_COLORS = {
  ep: 0x7f8b58,
  ek: 0xc0913c,
  q: 0xb26a4c,
} as const;

// ───────────────────────────── Материалы ─────────────────────────────

export function std(color: number, o: Partial<THREE.MeshStandardMaterialParameters> = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0, ...o });
}

export const mat = {
  wood: () => std(C.wood, { roughness: 0.8 }),
  woodLight: () => std(C.woodLight, { roughness: 0.85 }),
  woodDark: () => std(C.woodDark, { roughness: 0.75 }),
  brass: () => std(C.brass, { roughness: 0.35, metalness: 0.75 }),
  copper: () => std(C.copper, { roughness: 0.4, metalness: 0.7 }),
  steel: () => std(C.steel, { roughness: 0.42, metalness: 0.8 }),
  clay: () => std(C.clay, { roughness: 0.9 }),
  sage: () => std(C.sage, { roughness: 0.8 }),
  amber: () => std(C.amber, { roughness: 0.6 }),
  cream: () => std(C.cream, { roughness: 0.9 }),
  graphite: () => std(C.graphite, { roughness: 0.7 }),
  water: () =>
    new THREE.MeshPhysicalMaterial({
      color: C.water,
      roughness: 0.15,
      metalness: 0,
      transparent: true,
      opacity: 0.75,
    }),
};

// ───────────────────────────── Примитивы ─────────────────────────────

export function applyShadows(root: THREE.Object3D) {
  root.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
}

export function box(w: number, h: number, d: number, material: THREE.Material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y + h / 2, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function cyl(rTop: number, rBot: number, h: number, material: THREE.Material, x = 0, y = 0, z = 0, seg = 28) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
  g.translate(0, h / 2, 0); // основание в y=0 — удобно ставить на пол
  const m = new THREE.Mesh(g, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function ball(r: number, material: THREE.Material, x = 0, y = 0, z = 0, seg = 40) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg / 2), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** Низкий деревянный стол (столешница + четыре ноги) */
export function table(w: number, d: number, h: number, topY = 0) {
  const g = new THREE.Group();
  const top = box(w, 0.14, d, mat.wood(), 0, topY - 0.14 + h, 0);
  const legMat = mat.woodDark();
  const lx = w / 2 - 0.22;
  const lz = d / 2 - 0.22;
  for (const [sx, sz] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    g.add(box(0.16, h - 0.14, 0.16, legMat, sx * lx, topY, sz * lz));
  g.add(top);
  return g;
}

/** Пружина: TubeGeometry по винтовой линии. Основание в y=0, setLen сжимает по Y. */
export function springMesh(coils = 8, radius = 0.2, wire = 0.04, length = 1) {
  const pts: THREE.Vector3[] = [];
  const N = coils * 14;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const a = t * coils * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, t * length, Math.sin(a) * radius));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const geo = new THREE.TubeGeometry(curve, N, wire, 10, false);
  const mesh = new THREE.Mesh(geo, mat.steel());
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  return {
    group: g,
    nativeLength: length,
    setLen(len: number) {
      mesh.scale.y = Math.max(len / length, 0.001);
    },
  };
}

/** Пунктирная линия (для размерных выносок, как на чертеже) */
export function dashedLine(a: THREE.Vector3, b: THREE.Vector3, color: number = C.inkSoft) {
  const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
  const line = new THREE.Line(geo, new THREE.LineDashedMaterial({ color, dashSize: 0.16, gapSize: 0.11, transparent: true, opacity: 0.75 }));
  line.computeLineDistances();
  return line;
}

// ───────────────────────── Подписи (canvas-спрайты) ─────────────────────────

function textCanvas(
  text: string,
  o: { size?: number; italic?: boolean; weight?: number; color?: string; chip?: boolean; pad?: number } = {},
) {
  const size = o.size ?? 44;
  const italic = o.italic ?? true;
  const weight = o.weight ?? 500;
  const color = o.color ?? '#40342a';
  const pad = o.pad ?? 18;
  const font = `${italic ? 'italic ' : ''}${weight} ${size}px "Literata", Georgia, serif`;
  const probe = document.createElement('canvas').getContext('2d')!;
  probe.font = font;
  const w = Math.ceil(probe.measureText(text).width);
  const cw = w + pad * 2 + (o.chip ? 26 : 0);
  const ch = Math.round(size * 1.7);
  const cv = document.createElement('canvas');
  cv.width = Math.max(4, cw);
  cv.height = ch;
  const ctx = cv.getContext('2d')!;
  if (o.chip) {
    const r = ch / 2;
    ctx.fillStyle = 'rgba(246,239,225,0.94)';
    ctx.strokeStyle = 'rgba(64,52,42,0.4)';
    ctx.lineWidth = 2.5;
    const rr = (x: number, y: number, w: number, h: number, rad: number) => {
      ctx.beginPath();
      ctx.moveTo(x + rad, y);
      ctx.arcTo(x + w, y, x + w, y + h, rad);
      ctx.arcTo(x + w, y + h, x, y + h, rad);
      ctx.arcTo(x, y + h, x, y, rad);
      ctx.arcTo(x, y, x + w, y, rad);
      ctx.closePath();
    };
    rr(3, 3, cv.width - 6, ch - 6, r);
    ctx.fill();
    ctx.stroke();
  }
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, cv.width / 2, ch / 2 + 2);
  return cv;
}

/** Лёгкая подпись без плашки (буквы столбцов, метки шкал) */
export function labelSprite(text: string, height = 0.34, o: { color?: string; italic?: boolean; weight?: number } = {}) {
  const cv = textCanvas(text, o);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sp.scale.set((height * cv.width) / cv.height, height, 1);
  sp.renderOrder = 20;
  return sp;
}

/** Подпись на плашке цвета страницы (имена предметов, названия узлов) */
export function chipSprite(text: string, height = 0.42) {
  const cv = textCanvas(text, { chip: true, size: 46, italic: false, weight: 600 });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sp.scale.set((height * cv.width) / cv.height, height, 1);
  sp.renderOrder = 21;
  return sp;
}

/** Плашка-подпись с текстом, который можно менять на лету (подсказки при наведении) */
export function dynamicChip(height = 0.36, o: { size?: number } = {}) {
  const size = o.size ?? 46;
  const ch = Math.round(size * 1.7);
  const CW = 768;
  const cv = document.createElement('canvas');
  cv.width = CW;
  cv.height = ch;
  const ctx = cv.getContext('2d')!;
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sp.renderOrder = 21;
  let last = '';
  const set = (text: string) => {
    if (text === last) return;
    last = text;
    const font = `600 ${size}px "Literata", Georgia, serif`;
    ctx.font = font;
    const w = Math.ceil(ctx.measureText(text).width);
    const cw = Math.max(8, w + 58);
    const x0 = (CW - cw) / 2;
    ctx.clearRect(0, 0, CW, ch);
    const r = ch / 2;
    ctx.beginPath();
    ctx.moveTo(x0 + 3 + r, 3);
    ctx.arcTo(x0 + cw - 3, 3, x0 + cw - 3, ch - 3, r);
    ctx.arcTo(x0 + cw - 3, ch - 3, x0 + 3, ch - 3, r);
    ctx.arcTo(x0 + 3, ch - 3, x0 + 3, 3, r);
    ctx.arcTo(x0 + 3, 3, x0 + cw - 3, 3, r);
    ctx.closePath();
    ctx.fillStyle = 'rgba(246,239,225,0.96)';
    ctx.strokeStyle = 'rgba(64,52,42,0.45)';
    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#40342a';
    ctx.fillText(text, CW / 2, ch / 2 + 2);
    sp.scale.set((height * cw) / ch, height, 1);
    tex.needsUpdate = true;
  };
  return { sprite: sp, set };
}

// ───────────────────────── Столбцы энергии ─────────────────────────

export interface BarDef {
  key: string;
  label: string;
  color: number;
  max?: number;
}

/** Столбцы энергии на общем деревянном основании; высоты меняются плавно. */
export class EnergyBars {
  group = new THREE.Group();
  private bars = new Map<string, { mesh: THREE.Mesh; target: number; max: number }>();
  private labelY: number;
  private height: number;

  constructor(defs: BarDef[], pos: THREE.Vector3Like = { x: -4.6, y: 0, z: -1.6 }, height = 2.3) {
    this.labelY = height + 0.42;
    this.height = height;
    const n = defs.length;
    const step = 0.62;
    const baseW = n * step + 0.34;
    this.group.add(box(baseW, 0.1, 0.5, mat.woodDark(), 0, 0, 0));
    // полупрозрачный «стакан» на всю высоту — видно шкалу даже при нуле
    const trackGeo = new THREE.CylinderGeometry(0.115, 0.135, height, 18);
    trackGeo.translate(0, height / 2, 0);
    const trackMat = new THREE.MeshBasicMaterial({
      color: C.ink,
      transparent: true,
      opacity: 0.09,
      depthWrite: false,
      side: THREE.BackSide,
    });
    defs.forEach((d, i) => {
      const x = (i - (n - 1) / 2) * step;
      const track = new THREE.Mesh(trackGeo, trackMat);
      track.position.set(x, 0.1, 0);
      this.group.add(track);
      const m = std(d.color, { roughness: 0.55 });
      const geo = new THREE.CylinderGeometry(0.11, 0.13, 1, 18);
      geo.translate(0, 0.5, 0);
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(x, 0.1, 0);
      mesh.castShadow = true;
      this.group.add(mesh);
      this.bars.set(d.key, { mesh, target: 0, max: d.max ?? 1 });
      const lbl = labelSprite(d.label, 0.3, { italic: true });
      lbl.position.set(x, this.labelY, 0);
      this.group.add(lbl);
    });
    this.group.position.set(pos.x, pos.y, pos.z);
  }

  set(key: string, value: number) {
    const b = this.bars.get(key);
    if (b) b.target = THREE.MathUtils.clamp(value / b.max, 0, 1);
  }

  setMax(key: string, max: number) {
    const b = this.bars.get(key);
    if (b && max > 0) b.max = max;
  }

  tick(dt: number) {
    const k = 1 - Math.exp(-6 * dt);
    this.bars.forEach((b) => {
      const cur = b.mesh.scale.y;
      const target = Math.max(b.target, 0.012) * this.height;
      b.mesh.scale.y = THREE.MathUtils.lerp(cur, target, k);
    });
  }
}

// ───────────────────────── Поток энергии (бусины по кривой) ─────────────────────────

export function flowBeads(
  points: THREE.Vector3[],
  o: { count?: number; color?: number; radius?: number; speed?: number; width?: number } = {},
) {
  const curve = new THREE.CatmullRomCurve3(points);
  const count = o.count ?? 8;
  const color = o.color ?? C.brass;
  const radius = o.radius ?? 0.055;
  const speed = o.speed ?? 0.22;
  const group = new THREE.Group();
  const beads: THREE.Mesh[] = [];
  const matBead = std(color, { roughness: 0.4, emissive: color, emissiveIntensity: 0.35 });
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 12), matBead);
    m.visible = false;
    group.add(m);
    beads.push(m);
  }
  const st = { rate: 0, phase: 0 };
  return {
    group,
    setRate(r: number) {
      st.rate = THREE.MathUtils.clamp(r, 0, 1);
    },
    tick(dt: number) {
      st.phase = (st.phase + dt * speed * (0.15 + 0.85 * st.rate)) % 1;
      beads.forEach((m, i) => {
        const u = (i / count + st.phase) % 1;
        if (st.rate <= 0.01) {
          m.visible = false;
          return;
        }
        m.visible = true;
        const p = curve.getPoint(u);
        m.position.copy(p);
        const edge = THREE.MathUtils.smoothstep(u, 0, 0.1) * (1 - THREE.MathUtils.smoothstep(u, 0.9, 1));
        m.scale.setScalar(0.4 + 0.6 * edge);
      });
    },
  };
}

// ───────────────────────── Тепловые волны (круги на земле) ─────────────────────────

export class Ripples {
  group = new THREE.Group();
  private pool: { mesh: THREE.Mesh; age: number; dur: number; r1: number; active: boolean }[] = [];

  constructor() {
    this.group.userData.noFit = true;
    for (let i = 0; i < 8; i++) {
      const geo = new THREE.RingGeometry(0.86, 1, 48);
      geo.rotateX(-Math.PI / 2);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: C.clay, transparent: true, opacity: 0, depthWrite: false }),
      );
      mesh.visible = false;
      mesh.renderOrder = 5;
      this.group.add(mesh);
      this.pool.push({ mesh, age: 0, dur: 1, r1: 1, active: false });
    }
  }

  spawn(x: number, y: number, z: number, r1 = 1.3, dur = 0.9) {
    const p = this.pool.find((p) => !p.active) ?? this.pool[0];
    p.active = true;
    p.age = 0;
    p.dur = dur;
    p.r1 = r1;
    p.mesh.visible = true;
    p.mesh.position.set(x, y + 0.02, z);
  }

  tick(dt: number) {
    this.pool.forEach((p) => {
      if (!p.active) return;
      p.age += dt;
      const k = p.age / p.dur;
      if (k >= 1) {
        p.active = false;
        p.mesh.visible = false;
        return;
      }
      const e = 1 - Math.pow(1 - k, 2.4);
      p.mesh.scale.setScalar(0.25 + p.r1 * e);
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.5 * (1 - k);
    });
  }
}

// ───────────────────────── Пламя и пар ─────────────────────────

function radialTexture(stops: [number, string][]) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const ctx = cv.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  stops.forEach(([off, col]) => g.addColorStop(off, col));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Текстуры-одиночки, которые нельзя уничтожать при смене сцены */
export const PROTECTED_TEXTURES = new Set<THREE.Texture>();

let flameTex: THREE.Texture | null = null;
function getFlameTex() {
  if (!flameTex) {
    flameTex = radialTexture([
      [0, 'rgba(255,236,190,1)'],
      [0.35, 'rgba(240,180,90,0.9)'],
      [0.7, 'rgba(205,120,50,0.35)'],
      [1, 'rgba(205,120,50,0)'],
    ]);
    PROTECTED_TEXTURES.add(flameTex);
  }
  return flameTex;
}

let steamTex: THREE.Texture | null = null;
function getSteamTex() {
  if (!steamTex) {
    steamTex = radialTexture([
      [0, 'rgba(250,246,238,0.55)'],
      [0.6, 'rgba(250,246,238,0.22)'],
      [1, 'rgba(250,246,238,0)'],
    ]);
    PROTECTED_TEXTURES.add(steamTex);
  }
  return steamTex;
}

/** Мягкое пламя из скрещённых плоскостей; base в y=0. */
export function flame(scale = 1) {
  const g = new THREE.Group();
  const mk = (rotY: number) => {
    const geo = new THREE.PlaneGeometry(0.8, 1.3);
    geo.translate(0, 0.62, 0);
    const m = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ map: getFlameTex(), transparent: true, depthWrite: false, opacity: 0.95 }),
    );
    m.rotation.y = rotY;
    m.renderOrder = 6;
    g.add(m);
    return m;
  };
  const planes = [mk(0), mk(Math.PI / 3), mk((2 * Math.PI) / 3)];
  g.scale.setScalar(scale);
  const st = { on: true, base: scale };
  return {
    group: g,
    setScale(s: number) {
      st.base = s;
    },
    tick(t: number) {
      if (!st.on) return;
      const f = 0.92 + 0.06 * Math.sin(t * 11.3) + 0.04 * Math.sin(t * 6.1 + 1.7);
      g.scale.setScalar(st.base * f);
      planes.forEach((p, i) => (p.material.opacity = 0.82 + 0.13 * Math.sin(t * 9.4 + i * 2.1)));
    },
  };
}

/** Струйка пара из точки; включается/выключается. */
export function steam(scale = 1) {
  const g = new THREE.Group();
  const N = 6;
  const parts: { sp: THREE.Sprite; age: number; drift: number }[] = [];
  for (let i = 0; i < N; i++) {
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: getSteamTex(), transparent: true, depthWrite: false, opacity: 0 }),
    );
    sp.renderOrder = 7;
    g.add(sp);
    parts.push({ sp, age: (i / N) * 2.4, drift: Math.random() * Math.PI * 2 });
  }
  g.scale.setScalar(scale);
  const st = { on: false };
  return {
    group: g,
    set on(v: boolean) {
      st.on = v;
    },
    get on() {
      return st.on;
    },
    tick(dt: number) {
      parts.forEach((p) => {
        p.age += dt;
        const T = 2.4;
        if (p.age > T) p.age -= T;
        const k = p.age / T;
        if (!st.on) {
          (p.sp.material as THREE.SpriteMaterial).opacity = Math.max(
            0,
            (p.sp.material as THREE.SpriteMaterial).opacity - dt * 1.4,
          );
          return;
        }
        p.sp.position.set(Math.sin(p.age * 2.1 + p.drift) * 0.09, k * 0.9, Math.cos(p.age * 1.7 + p.drift) * 0.05);
        p.sp.scale.setScalar(0.22 + k * 0.5);
        (p.sp.material as THREE.SpriteMaterial).opacity = 0.75 * Math.sin(Math.PI * k);
      });
    },
  };
}

/** Глянцевый материал (лакированное дерево, мяч, керамика) */
export function glossy(color: number, o: Partial<THREE.MeshPhysicalMaterialParameters> = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.34,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.28,
    ...o,
  });
}

/** Баскетбольный мяч: оранжевая кожа, тёмные швы и мелкая фактура */
export function basketball() {
  const W = 512;
  const H = 256;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d')!;
  // оранжевая кожа
  ctx.fillStyle = '#c9661f';
  ctx.fillRect(0, 0, W, H);
  // мелкая «пупырчатая» фактура
  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    ctx.fillStyle = Math.random() < 0.5 ? 'rgba(70,30,10,0.10)' : 'rgba(255,210,160,0.08)';
    ctx.fillRect(x, y, 1.6, 1.6);
  }
  // швы: экватор и четыре меридиана
  ctx.strokeStyle = '#221610';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, H / 2);
  ctx.lineTo(W, H / 2);
  ctx.stroke();
  for (const u of [0, 0.25, 0.5, 0.75, 1]) {
    const x = u * W;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return std(0xffffff, { map: tex, roughness: 0.68, metalness: 0 });
}

/** Тёмный металл для шара: вертикальный градиент + лаковый блик */
export function darkMetal() {
  const cv = document.createElement('canvas');
  cv.width = 8;
  cv.height = 128;
  const ctx = cv.getContext('2d')!;
  const grad = ctx.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, '#b9c1cb');
  grad.addColorStop(0.3, '#858d97');
  grad.addColorStop(0.62, '#4d545d');
  grad.addColorStop(1, '#25292f');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 8, 128);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return glossy(0xffffff, {
    map: tex,
    roughness: 0.24,
    metalness: 0.28,
    clearcoat: 0.8,
    clearcoatRoughness: 0.12,
  });
}

// ───────────────────────── Электрические разряды ─────────────────────────

/**
 * Сине-голубые разряды вдоль провода: дрожащие ломаные молнии,
 * которые беспрерывно перерисовываются, пока идёт ток.
 */
export function electricArcs(
  points: THREE.Vector3[],
  o: { count?: number; color?: number; seg?: number; spread?: number } = {},
) {
  const curve = new THREE.CatmullRomCurve3(points);
  const count = o.count ?? 2;
  const color = o.color ?? 0x5fc4ff;
  const seg = o.seg ?? 9;
  const spread = o.spread ?? 0.055;
  const group = new THREE.Group();
  const tmpT = new THREE.Vector3();
  const n1 = new THREE.Vector3();
  const n2 = new THREE.Vector3();
  const helper = new THREE.Vector3(0.31, 0.77, 0.55);

  const bolts: { line: THREE.Line; mat: THREE.LineBasicMaterial; timer: number; life: number; opacity: number }[] = [];
  for (let b = 0; b < count; b++) {
    const mat = new THREE.LineBasicMaterial({
      color: 0x2b8fd8,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((seg + 1) * 3), 3));
    const line = new THREE.Line(geo, mat);
    line.visible = false;
    line.frustumCulled = false;
    line.renderOrder = 12;
    group.add(line);
    bolts.push({ line, mat, timer: Math.random() * 0.1, life: 0, opacity: 0 });
  }

  // светящиеся бегущие сгустки тока — чтобы разряды были видны издалека
  const beadCount = Math.max(count * 3, 6);
  const beadMat = new THREE.MeshBasicMaterial({
    color: 0x33a3e8,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });
  const beadGeo = new THREE.SphereGeometry(0.038, 10, 10);
  const beads: THREE.Mesh[] = [];
  for (let i = 0; i < beadCount; i++) {
    const m = new THREE.Mesh(beadGeo, beadMat);
    m.visible = false;
    m.renderOrder = 13;
    group.add(m);
    beads.push(m);
  }
  let phase = Math.random();

  const rejitter = (b: (typeof bolts)[number]) => {
    const u0 = Math.random() * 0.8;
    const u1 = Math.min(u0 + 0.14 + Math.random() * 0.12, 1);
    const attr = b.line.geometry.getAttribute('position') as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const angle = Math.random() * Math.PI * 2;
    const amp = spread * (0.5 + Math.random() * 0.8);
    for (let i = 0; i <= seg; i++) {
      const u = u0 + ((u1 - u0) * i) / seg;
      const p = curve.getPoint(u);
      curve.getTangent(u, tmpT);
      n1.crossVectors(tmpT, helper).normalize();
      if (!Number.isFinite(n1.x) || n1.lengthSq() < 0.5) n1.set(0, 0, 1);
      n2.crossVectors(tmpT, n1).normalize();
      const wobble = Math.sin(Math.PI * (i / seg)) * amp;
      const a = angle + (i % 2 === 0 ? 0.9 : -0.9) + i * 0.6;
      arr[i * 3] = p.x + (n1.x * Math.cos(a) + n2.x * Math.sin(a)) * wobble;
      arr[i * 3 + 1] = p.y + (n1.y * Math.cos(a) + n2.y * Math.sin(a)) * wobble;
      arr[i * 3 + 2] = p.z + (n1.z * Math.cos(a) + n2.z * Math.sin(a)) * wobble;
    }
    attr.needsUpdate = true;
    b.line.visible = true;
    b.life = 0.07 + Math.random() * 0.05;
    b.opacity = 0.55 + Math.random() * 0.45;
  };

  const st = { rate: 0 };
  return {
    group,
    setRate(r: number) {
      st.rate = THREE.MathUtils.clamp(r, 0, 1);
    },
    tick(dt: number) {
      const active = st.rate > 0.02;
      bolts.forEach((b) => {
        b.timer -= dt;
        b.life -= dt;
        if (b.life <= 0) b.line.visible = false;
        if (b.timer <= 0) {
          if (active) rejitter(b);
          b.timer = active ? 0.04 + Math.random() * 0.08 : 0.2;
        }
        const target = b.line.visible && active ? b.opacity * (0.6 + 0.4 * Math.random()) : 0;
        b.mat.opacity += (target - b.mat.opacity) * Math.min(dt * 22, 1);
        if (b.mat.opacity < 0.02 && !b.line.visible) b.mat.opacity = 0;
      });
      // бегущие сгустки
      beadMat.opacity += ((active ? 0.9 : 0) - beadMat.opacity) * Math.min(dt * 8, 1);
      phase = (phase + dt * (0.25 + 0.75 * st.rate)) % 1;
      beads.forEach((m, i) => {
        if (!active) {
          m.visible = false;
          return;
        }
        m.visible = true;
        const u = (i / beadCount + phase) % 1;
        m.position.copy(curve.getPoint(u));
        const flick = 0.72 + 0.28 * Math.sin(u * 40 + i * 2.4);
        m.scale.setScalar((0.55 + 0.75 * st.rate) * flick);
      });
    },
  };
}

// ───────────────────────── Форматирование ─────────────────────────

/** Число с запятой в качестве десятичного разделителя */
export function fmt(v: number, d = 1) {
  const s = v.toFixed(d);
  return s.replace('.', ',');
}
