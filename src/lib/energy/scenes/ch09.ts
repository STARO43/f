// Опыт 9. Энергия в пище: образец массой 1–5 г сжигают под медным
// калориметром с 500 г воды. По росту температуры воды оценивают энергию.
// Геометрия сосуда, масса воды и размер образца согласованы между собой.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const E_PER_G = 17000; // Дж/г — модель для демонстрации
const ABSORBED = 0.2; // доля энергии, поглощённая водой
const M_WATER = 0.5; // кг
const CWATER = 4200; // Дж/(кг·°C)
const T_ROOM = 20; // °C
const BURN_S = 6; // длительность горения, с
const TABLE_H = 1.02;
const RING_H = 0.28; // высота треноги: пламя достаёт до дна чашки
const CUP_R = 0.075; // м
const CUP_H = 0.09; // м
const WATER_R = 0.066; // м
const WATER_H = M_WATER / (1000 * Math.PI * WATER_R * WATER_R); // м
const SAMPLE_Y = 0.16; // центр образца над столом
const FOOD_RHO = 700; // кг/м³ — плотность пищевого образца

export const ch09: Experiment = {
  build(api: SceneAPI, m0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    const table = K.table(1.5, 0.95, TABLE_H);
    table.traverse((o) => ((o.userData as Record<string, unknown>).noFit = true));
    g.add(table);

    // ── тренога с кольцом (передняя сторона открыта, чтобы видеть пламя) ──
    const ringY = TABLE_H + RING_H;
    for (const a of [Math.PI / 2, Math.PI * 7 / 6, Math.PI * 11 / 6]) {
      const leg = K.box(0.03, RING_H, 0.03, K.mat.steel(), Math.sin(a) * 0.1, TABLE_H, Math.cos(a) * 0.1);
      leg.rotation.z = Math.sin(a) * 0.1;
      leg.rotation.x = -Math.cos(a) * 0.1;
      g.add(leg);
    }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.012, 10, 36), K.mat.steel());
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, ringY, 0);
    ring.castShadow = true;
    g.add(ring);

    // ── медный калориметр ──
    const copper = K.std(K.C.copper, {
      roughness: 0.38,
      metalness: 0.65,
      emissive: 0x7a2f12,
      emissiveIntensity: 0,
    });
    const cup = new THREE.Group();
    cup.position.set(0, ringY, 0);
    // стенка чашки открыта сверху, чтобы была видна вода
    const wallGeo = new THREE.CylinderGeometry(CUP_R, CUP_R * 0.9, CUP_H, 30, 1, true);
    wallGeo.translate(0, CUP_H / 2, 0);
    const wall = new THREE.Mesh(
      wallGeo,
      K.std(K.C.copper, { roughness: 0.38, metalness: 0.65, side: THREE.DoubleSide }),
    );
    wall.castShadow = true;
    cup.add(wall);
    cup.add(K.cyl(CUP_R * 0.9, CUP_R * 0.9, 0.014, copper, 0, 0, 0, 30));
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x8fd0e6,
      roughness: 0.12,
      metalness: 0,
      emissive: 0x2a6a80,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.92,
    });
    const water = K.cyl(WATER_R, WATER_R, WATER_H, waterMat, 0, 0.014, 0, 28);
    cup.add(water);
    // открытый верх с отбортовкой: видно воду, термометр и мешалку
    const rim = new THREE.Mesh(new THREE.TorusGeometry(CUP_R, 0.012, 8, 30), copper);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = CUP_H;
    rim.castShadow = true;
    cup.add(rim);
    // боковые ручки-кольца
    for (const sx of [-1, 1]) {
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.005, 8, 18), K.mat.brass());
      handle.position.set(sx * (CUP_R + 0.016), 0.055, 0);
      handle.castShadow = true;
      cup.add(handle);
    }
    // термометр: шарик в воде, трубка поднимается над краем
    const thermo = new THREE.Group();
    const tube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.007, 0.007, 0.2, 10),
      new THREE.MeshPhysicalMaterial({ color: 0xe8eee9, transparent: true, opacity: 0.45, roughness: 0.15 }),
    );
    tube.geometry.translate(0, 0.1, 0);
    thermo.add(tube);
    const colGeo = new THREE.CylinderGeometry(0.0035, 0.0035, 1, 8);
    colGeo.translate(0, 0.5, 0);
    const col = new THREE.Mesh(
      colGeo,
      K.std(0xb84a32, { emissive: 0x8c2f1f, emissiveIntensity: 0.25 }),
    );
    col.position.y = 0.02;
    col.scale.y = 0.001;
    thermo.add(col);
    thermo.position.set(0.032, 0.01, 0.018);
    cup.add(thermo);
    // стеклянная мешалка
    cup.add(K.cyl(0.004, 0.004, 0.13, K.mat.steel(), -0.048, 0.02, 0.01, 8));
    g.add(cup);

    api.clickable(cup, () =>
      api.caption(`Калориметр: ${K.fmt(M_WATER * 1000, 0)} г воды`, new THREE.Vector3(0, ringY + 0.55, 0)),
    );

    // ── образец на игле в пробковой подставке ──
    const sampleRadius = (grams: number) => Math.cbrt((3 * (grams / 1000)) / (4 * Math.PI * FOOD_RHO));
    const sampleGroup = new THREE.Group();
    const stand = K.cyl(0.055, 0.062, 0.045, K.mat.woodLight(), 0, 0, 0);
    sampleGroup.add(stand);
    const pinGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.11, 8);
    pinGeo.translate(0, 0.055, 0);
    const pin = new THREE.Mesh(pinGeo, K.mat.steel());
    pin.position.y = 0.045;
    sampleGroup.add(pin);
    const sample = K.ball(sampleRadius(m0), K.glossy(0xd9bb90, { roughness: 0.55 }), 0, SAMPLE_Y, 0, 20);
    sampleGroup.add(sample);
    const sampleFlame = K.flame(0.07);
    sampleFlame.group.position.set(0, SAMPLE_Y, 0);
    sampleFlame.group.visible = false;
    sampleGroup.add(sampleFlame.group);
    // невидимая зона захвата
    const proxy = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    proxy.position.y = SAMPLE_Y;
    sampleGroup.add(proxy);
    const P0 = new THREE.Vector3(0.5, TABLE_H, 0.28);
    const P1 = new THREE.Vector3(0, TABLE_H, 0);
    sampleGroup.position.copy(P0);
    g.add(sampleGroup);

    // лёгкие тепловые волны у дна чашки во время горения
    const ripples = new K.Ripples();
    ripples.group.position.set(0, ringY - 0.05, 0);
    g.add(ripples.group);

    api.fit([0.25, 0.52, 1], [0, TABLE_H + 0.24, 0]);

    // ── состояние ──
    let m = m0; // г
    let phase: 'idle' | 'burn' | 'done' = 'idle';
    let pt = 0;
    let T = T_ROOM;
    let glow = 0;

    const layout = () => {
      const r = sampleRadius(m);
      sample.scale.setScalar(r / sampleRadius(m0));
      sampleFlame.group.visible = phase === 'burn';
      sampleFlame.setScale(0.1 + (m / 5) * 0.04);
      (sample.material as THREE.MeshStandardMaterial).color.setHex(phase === 'done' ? 0x3a322b : 0xd9bb90);
    };
    layout();

    // ── образец перетаскивают по столу ──
    const tablePlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -TABLE_H);
    api.draggable(sampleGroup, {
      plane: tablePlane,
      active: () => phase !== 'burn',
      onStart() {
        // сгоревший образец заменяем новым
        if (phase === 'done') {
          phase = 'idle';
          pt = 0;
          T = T_ROOM;
          layout();
        }
      },
      onMove(p) {
        const x = THREE.MathUtils.clamp(p.x, -0.85, 0.85);
        const z = THREE.MathUtils.clamp(p.z, -0.42, 0.48);
        sampleGroup.position.set(x, TABLE_H, z);
      },
      onEnd() {
        const d = Math.hypot(sampleGroup.position.x, sampleGroup.position.z);
        if (d < 0.36 && phase === 'idle') {
          sampleGroup.position.copy(P1);
          phase = 'burn';
          pt = 0;
          layout();
          api.caption('Образец зажжён', new THREE.Vector3(0, ringY + 0.55, 0));
        }
      },
      onClick() {
        api.caption(
          'Перетащи образец под калориметр',
          new THREE.Vector3(sampleGroup.position.x, TABLE_H + 0.45, sampleGroup.position.z),
        );
      },
    });

    api.toast('Перетащи образец под калориметр — он загорится и нагреет воду');

    return {
      setParam(v) {
        m = v;
        if (phase !== 'burn') {
          phase = 'idle';
          pt = 0;
          T = T_ROOM;
          layout();
        }
      },
      tick(dt, t) {
        if (phase === 'burn') {
          pt += dt;
          const frac = Math.min(pt / BURN_S, 1);
          const Qwater = (E_PER_G * m * ABSORBED * frac) / 1000; // кДж
          T = T_ROOM + (Qwater * 1000) / (M_WATER * CWATER);
          if (frac >= 1) {
            phase = 'done';
            layout();
            api.caption(`ΔT воды ≈ ${K.fmt(T - T_ROOM, 1)} °C`, new THREE.Vector3(0, ringY + 0.6, 0));
            api.toast('Унеси сгоревший образец — можно взять новый');
          }
        }
        // столбик термометра: шкала 0…60 °C
        col.scale.y = Math.max(Math.min(T / 60, 1) * 0.22, 0.001);
        // медная чашка слегка светится, пока идёт горение
        glow += ((phase === 'burn' ? 0.55 : 0) - glow) * Math.min(dt * 3, 1);
        copper.emissiveIntensity = glow;
        if (phase === 'burn' && Math.random() < dt * 5) ripples.spawn(0, ringY - 0.05, 0, 0.2, 0.7);
        ripples.tick(dt);
        sampleFlame.tick(t);

        const Efood = (E_PER_G * m) / 1000; // кДж
        const Qwater = (Efood * ABSORBED);
        api.readouts([
          { label: 'm образца', value: `${K.fmt(m, 1)} г` },
          { label: 'E пищи', value: `${K.fmt(Efood, 1)} кДж` },
          { label: 'Q воды (20%)', value: `${K.fmt(Qwater, 2)} кДж` },
          { label: 'T воды', value: `${K.fmt(T, 1)} °C` },
          { label: 'ΔT', value: `${K.fmt(T - T_ROOM, 1)} °C` },
        ]);
      },
    };
  },
};
