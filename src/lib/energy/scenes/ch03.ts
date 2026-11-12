// Опыт 3. Упругая потенциальная энергия: тележку оттягивают влево, сжимая
// пружину; отпустишь — пружина разгоняет её, тележка отскакивает от
// буфера и, если докатится, снова сжимает пружину. Трение гасит движение.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const NATIVE = 0.95; // недеформированная длина пружины, м
const KCONST = 120; // жёсткость, Н/м
const M = 1; // масса тележки
const SPRING_X = -0.62; // основание пружины
const FREE_END = SPRING_X + NATIVE; // 0.33 — конец свободной пружины
const NOSE_OFF = 0.44; // нос тележки левее её центра
const X_MAX = 0.55; // предельное сжатие
const POS_MIN = FREE_END + NOSE_OFF - X_MAX; // 0.22
const POS_MAX = 3.72; // касание буфера
const MU = 0.5; // трение качения, м/с²
const BUMPER_E = 0.55;

export const ch03: Experiment = {
  build(api: SceneAPI, x0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // ── рельс ──
    g.add(K.box(7.4, 0.14, 1.5, K.mat.wood(), 0.6, 0.62, 0));
    g.add(K.box(0.18, 0.62, 0.18, K.mat.woodDark(), -1.6, 0, 0));
    g.add(K.box(0.18, 0.62, 0.18, K.mat.woodDark(), 1.8, 0, 0));
    g.add(K.box(0.18, 0.62, 0.18, K.mat.woodDark(), 2.9, 0, 0));
    // упорная стенка слева
    g.add(K.box(0.22, 1.15, 1.5, K.mat.woodDark(), -0.75, 0, 0));
    // деления через каждые 0.5 м
    for (let i = 0; i <= 12; i++) {
      const x = 0.6 - 3.7 + i * 0.5;
      if (x < -0.5) continue;
      g.add(K.box(0.02, i % 2 === 0 ? 0.09 : 0.05, 0.02, K.mat.graphite(), x, 0.76, 0.72));
    }
    // мягкий буфер справа
    g.add(K.box(0.16, 0.42, 1.3, K.mat.clay(), 4.28, 0.62, 0));

    // ── пружина (горизонтально, вдоль X) ──
    const sp = K.springMesh(9, 0.13, 0.032, NATIVE);
    sp.group.rotation.z = -Math.PI / 2; // ось пружины вдоль +X, основание у стенки
    sp.group.position.set(SPRING_X, 0.85, 0);
    g.add(sp.group);

    // ── тележка на рельсе ──
    const cart = new THREE.Group();
    cart.position.y = 0.76;
    cart.add(K.box(0.78, 0.22, 0.5, K.mat.woodLight(), 0, 0.2, 0));
    cart.add(K.box(0.5, 0.1, 0.36, K.mat.wood(), -0.06, 0.42, 0));
    const wheelGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 18);
    wheelGeo.rotateX(Math.PI / 2);
    const wheelMat = K.mat.graphite();
    const wheels: THREE.Mesh[] = [];
    for (const [wx, wz] of [
      [-0.26, -0.26],
      [0.26, -0.26],
      [-0.26, 0.26],
      [0.26, 0.26],
    ]) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.position.set(wx, 0.1, wz);
      w.castShadow = true;
      cart.add(w);
      wheels.push(w);
    }
    // бампер к пружине
    cart.add(K.box(0.06, 0.3, 0.44, K.mat.brass(), -0.41, -0.06, 0));
    g.add(cart);

    const bars = new K.EnergyBars(
      [
        { key: 'ee', label: 'Eупр', color: K.ENERGY_COLORS.ep },
        { key: 'ek', label: 'Eк', color: K.ENERGY_COLORS.ek },
      ],
      { x: -2.7, y: 0, z: 1.05 },
    );
    g.add(bars.group);

    api.clickable(sp.group, () => api.caption('Пружина запасает E = ½kx²', new THREE.Vector3(-0.6, 1.7, 0)));

    api.fit([0.35, 0.42, 1], [0.8, 0.7, 0]);

    // ── состояние ──
    let pos = FREE_END + NOSE_OFF - x0; // центр тележки
    let v = 0;
    let running = false;
    let showBounce = true;

    const xOf = (p: number) => Math.max(FREE_END - (p - NOSE_OFF), 0); // сжатие из позиции
    const layout = () => {
      const x = xOf(pos);
      sp.setLen(Math.max(NATIVE - x, 0.12));
      cart.position.x = pos;
    };
    layout();

    // ── перетаскивание тележки ──
    api.draggable(cart, {
      onStart() {
        running = false;
        v = 0;
      },
      onMove(p) {
        pos = THREE.MathUtils.clamp(p.x, POS_MIN, POS_MAX);
        v = 0;
        layout();
      },
      onEnd() {
        running = true; // отпустила пружина — толкает тележку
      },
      onClick() {
        api.caption('Тележка получает кинетическую энергию', new THREE.Vector3(pos, 1.85, 0));
      },
    });

    api.toast('Оттяни тележку влево, сжимая пружину, и отпусти');

    return {
      setParam(vv) {
        pos = FREE_END + NOSE_OFF - vv;
        v = 0;
        running = false;
        showBounce = true;
        layout();
      },
      tick(dt) {
        if (running) {
          const x = xOf(pos);
          // сила пружины + трение качения
          let a = x > 0 ? (KCONST * x) / M : 0;
          if (Math.abs(v) > 0.02) a -= Math.sign(v) * MU;
          else if (x <= 0) v = 0;
          v += a * dt;
          pos += v * dt;
          // упор в стенку слева
          if (pos <= POS_MIN) {
            pos = POS_MIN;
            if (v < 0) v = -v * 0.3;
          }
          // отскок от буфера справа
          if (pos >= POS_MAX) {
            pos = POS_MAX;
            if (v > 0) {
              v = -v * BUMPER_E;
              if (showBounce) {
                showBounce = false;
                api.caption('Отскок — часть энергии ушла в тепло буфера', new THREE.Vector3(3.2, 1.6, 0));
              }
            }
          }
          wheels.forEach((w) => (w.rotation.z -= (v * dt) / 0.1));
          layout();
          // остановилось
          if (x <= 0 && Math.abs(v) < 0.05) {
            v = 0;
            running = false;
          }
        }
        const x = xOf(pos);
        const ee = 0.5 * KCONST * x * x;
        const ek = 0.5 * M * v * v;
        bars.set('ee', ee);
        bars.set('ek', ek);
        bars.tick(dt);
        api.readouts([
          { label: 'x', value: `${K.fmt(x, 2)} м` },
          { label: 'Eупр', value: `${K.fmt(ee, 1)} Дж` },
          { label: 'v', value: `${K.fmt(v, 2)} м/с` },
          { label: 'Eк', value: `${K.fmt(ek, 1)} Дж` },
        ]);
      },
    };
  },
};
