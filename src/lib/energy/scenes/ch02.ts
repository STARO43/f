// Опыт 2. Кинетическая и гравитационная потенциальная энергия:
// шар оттягивают по склону мышкой и отпускают — он катится, у преграды
// отскакивает, накатывает обратно на склон и постепенно останавливается.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const G = 9.8;
const SCALE = 0.5; // сцена = метры × 0.5
const BASE = 5.0; // м, основание клина
const RAMP_W = 1.7;
const APEX_X = -1.1; // вершина клина (слева), спуск вправо
const D0 = 0.3; // отступ шара от вершины по склону, единицы сцены
const R = 0.19;
const BARRIER_X = 4.02 - R; // левая грань буфера минус радиус шара
const MU = 0.11; // трение качения по полу
const BOUNCE_E = 0.42; // упругость отскока от преграды

export const ch02: Experiment = {
  build(api: SceneAPI, h0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // клин-призма: вертикальная грань слева, склон вниз вправо
    const wedgeMat = K.mat.wood();
    let wedge: THREE.Mesh | null = null;
    const mkWedge = (hM: number) => {
      const h = hM * SCALE;
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(0, h);
      shape.lineTo(BASE * SCALE, 0);
      shape.closePath();
      const geo = new THREE.ExtrudeGeometry(shape, { depth: RAMP_W, bevelEnabled: false });
      geo.translate(APEX_X, 0, -RAMP_W / 2);
      const mesh = new THREE.Mesh(geo, wedgeMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    // шар с тёмной лентой, чтобы было видно вращение
    const ballGroup = new THREE.Group();
    const sphere = K.ball(R, K.darkMetal());
    ballGroup.add(sphere);
    const band = new THREE.Mesh(new THREE.TorusGeometry(R * 1.001, 0.022, 8, 40), K.mat.graphite());
    band.rotation.y = Math.PI / 2;
    ballGroup.add(band);
    // невидимая «зона захвата» — шар легче взять мышкой
    ballGroup.add(
      new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshBasicMaterial({ visible: false })),
    );
    g.add(ballGroup);

    // финишный буфер справа (упругая преграда)
    g.add(K.box(0.16, 0.5, RAMP_W + 1.2, K.mat.clay(), 4.1, 0, 0));

    // столбцы энергии
    const bars = new K.EnergyBars(
      [
        { key: 'ep', label: 'Eп', color: K.ENERGY_COLORS.ep },
        { key: 'ek', label: 'Eк', color: K.ENERGY_COLORS.ek },
      ],
      { x: -4.0, y: 0, z: -1.2 },
    );
    bars.setMax('ep', G * 5);
    g.add(bars.group);

    // размерная высота у вершины
    const hLabel = K.labelSprite('h', 0.4);
    g.add(hLabel);
    let measure: THREE.Line | null = null;

    // ── состояние ──
    let hM = h0; // высота спуска, м
    let s = 0; // пройдено по склону от стартовой точки, единицы сцены
    let v = 0; // скорость вдоль пути, м/с
    let running = false;
    let bounced = false;

    const slopeLen = () => Math.hypot(BASE, hM) * SCALE; // вся длина склона
    const angle = () => Math.atan2(hM, BASE);
    const sSlope = () => slopeLen() - D0; // путь по склону от стартовой точки
    const footX = () => APEX_X + Math.cos(angle()) * slopeLen();
    const sMax = () => sSlope() + (BARRIER_X - footX());

    /** позиция шара по пути s (0 — стартовая точка на склоне) */
    const placeBall = () => {
      const a = angle();
      if (s <= sSlope()) {
        const d = D0 + s;
        ballGroup.position.set(APEX_X + Math.cos(a) * d, hM * SCALE - Math.sin(a) * d + R, 0);
      } else {
        ballGroup.position.set(footX() + (s - sSlope()), R, 0);
      }
    };

    const resetBall = () => {
      // шар лежит у подножия склона, чуть правее его края
      s = sSlope() + 0.07;
      v = 0;
      running = false;
      bounced = false;
      ballGroup.rotation.set(0, 0, 0);
      placeBall();
    };

    const layout = () => {
      if (wedge) {
        g.remove(wedge);
        wedge.geometry.dispose();
      }
      wedge = mkWedge(hM);
      g.add(wedge);
      if (measure) {
        g.remove(measure);
        measure.geometry.dispose();
      }
      const topY = hM * SCALE + 0.05;
      measure = K.dashedLine(new THREE.Vector3(APEX_X, 0, 0.88), new THREE.Vector3(APEX_X, topY, 0.88));
      g.add(measure);
      hLabel.position.set(APEX_X - 0.5, topY + 0.28, 0.88);
      hLabel.scale.setScalar(Math.min(Math.max(hM * 0.2, 0.55), 0.8));
      resetBall();
    };

    api.fit([0.5, 0.36, 1], [0.9, 0.85, 0]);
    layout();

    const hCur = () => {
      const a = angle();
      if (s <= sSlope()) return Math.max(hM - ((D0 + s) / SCALE) * Math.sin(a), 0);
      return 0;
    };
    const epOf = () => G * hCur();
    const ekOf = () => 0.5 * v * v;

    // ── перетаскивание шара по склону ──
    api.draggable(ballGroup, {
      onStart() {
        running = false;
        v = 0;
      },
      onMove(p) {
        const a = angle();
        s = THREE.MathUtils.clamp((p.x - APEX_X) / Math.cos(a) - D0, 0, sMax());
        v = 0;
        placeBall();
      },
      onEnd() {
        // отпустили — шар катится
        if (s < sMax() - 0.02) running = true;
      },
      onClick() {
        api.caption('Чем выше старт — тем больше скорость внизу', new THREE.Vector3(1.2, 2.2, 0));
      },
    });

    api.toast('Оттяни шар выше по склону и отпусти — он покатится');

    return {
      setParam(vv) {
        hM = vv;
        layout();
      },
      tick(dt) {
        if (running) {
          const steps = 2;
          for (let i = 0; i < steps; i++) {
            const d = dt / steps;
            const onSlope = s < sSlope();
            const a = angle();
            // ускорение: скатывание по склону или трение по полу
            if (onSlope) v += G * Math.sin(a) * d;
            else if (Math.abs(v) > 0.01) v -= Math.sign(v) * MU * G * d;
            else v = 0;
            v = Math.max(v, -14);
            s += v * d;
            // отскок от преграды
            if (s >= sMax()) {
              const vImpact = v;
              s = sMax();
              v = -Math.abs(vImpact) * BOUNCE_E;
              if (!bounced) {
                bounced = true;
                api.caption(`У преграды: v ≈ ${K.fmt(Math.abs(vImpact), 1)} м/с → отскок`, new THREE.Vector3(2.9, 1.35, 0));
              }
            }
            // упор в вертикальную грань клина при накате
            if (s <= 0) {
              s = 0;
              v = Math.abs(v) * 0.4;
            }
          }
          placeBall();
          ballGroup.rotation.z -= (v * dt * SCALE) / R;
          // шар остановился на полу — прогон закончен
          if (Math.abs(v) < 0.05 && s > sSlope() - 0.05 && s < sMax() - 0.02) {
            v = 0;
            running = false;
            api.toast('Оттяни шар по склону и отпусти, чтобы запустить снова');
          }
        }
        bars.set('ep', epOf());
        bars.set('ek', ekOf());
        bars.tick(dt);
        api.readouts([
          { label: 'h', value: `${K.fmt(hCur(), 2)} м` },
          { label: 'v', value: `${K.fmt(v, 1)} м/с` },
          { label: 'v = √(2gh)', value: `${K.fmt(Math.sqrt(2 * G * hM), 1)} м/с` },
          { label: 'Eп', value: `${K.fmt(epOf(), 0)} Дж` },
          { label: 'Eк', value: `${K.fmt(ekOf(), 0)} Дж` },
        ]);
      },
    };
  },
};
