// Опыт 10. Сохранение энергии: шар катится по U-образному жёлобу с
// вертикальными бортами. Кинетическая энергия учитывает вращение шара,
// тепло Q накапливается из работы трения и ударов о борта, а сумма
// Eп + Eк + Q остаётся постоянной для выбранного запуска.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const G = 9.8;
const L = 1.9; // полуширина жёлоба, м
const H = 1.35; // глубина, м
const M = 100 / (G * H); // при u = ±1 потенциальная энергия ровно 100 Дж
const R = 0.14;
const TH = 0.12; // толщина ленты жёлоба
const DEPTH = 0.8; // ширина (по Z)
const ROLL = 0.7; // Eк катящегося шара = 0.7·M·v²

/** профиль жёлоба: y = H·(1−cos(π·u))/2, u = x/L ∈ [−1, 1] */
const profile = (u: number) => (H * (1 - Math.cos(Math.PI * THREE.MathUtils.clamp(u, -1, 1)))) / 2;
const slope = (u: number) => {
  const c = THREE.MathUtils.clamp(u, -1, 1);
  return (H * Math.PI * Math.sin(Math.PI * c)) / (2 * L);
};

/** козловая опора: наклонные ножки, перекладина и подошвы */
function trestle(x: number, topY: number, depth: number) {
  const grp = new THREE.Group();
  const legMat = K.mat.woodDark();
  const beamMat = K.mat.wood();
  const halfW = 0.34;
  for (const sx of [-1, 1]) {
    const leg = K.box(0.085, topY, 0.1, legMat, sx * halfW * 0.55, 0, 0);
    leg.rotation.z = sx * 0.16;
    grp.add(leg);
    grp.add(K.box(0.4, 0.05, depth * 0.9, legMat, sx * 0.26, 0, 0)); // подошва
  }
  grp.add(K.box(halfW * 2.1, 0.09, depth * 0.92, beamMat, 0, topY - 0.045, 0)); // перекладина
  const brace = K.box(0.05, Math.hypot(topY * 0.62, halfW * 0.9), 0.06, legMat, 0, topY * 0.31, 0);
  brace.rotation.z = Math.atan2(halfW * 1.1, topY * 0.62);
  grp.add(brace);
  grp.position.x = x;
  return grp;
}

export const ch10: Experiment = {
  build(api: SceneAPI, f0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // ── жёлоб: тонкая U-лента, выдавленная по Z ──
    const shape = new THREE.Shape();
    const N = 96;
    for (let i = 0; i <= N; i++) {
      const u = -1 + (2 * i) / N;
      shape.lineTo(u * L, profile(u));
    }
    for (let i = N; i >= 0; i--) {
      const u = -1 + (2 * i) / N;
      shape.lineTo(u * L, profile(u) + TH);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: false });
    geo.translate(0, 0, -DEPTH / 2);
    const trough = new THREE.Mesh(geo, K.mat.wood());
    trough.castShadow = true;
    trough.receiveShadow = true;
    g.add(trough);
    // латунные окантовки бортов
    for (const s of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(TH * 0.62, TH * 0.62, DEPTH, 12), K.mat.brass());
      cap.rotation.x = Math.PI / 2;
      cap.position.set(s * L, profile(s) + TH / 2, 0);
      cap.castShadow = true;
      g.add(cap);
    }

    // вертикальные борта на концах: шар не вылетает из жёлоба
    for (const s of [-1, 1]) {
      g.add(K.box(0.1, H + 0.5, DEPTH + 0.12, K.mat.woodDark(), s * (L + 0.19), 0, 0));
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, DEPTH + 0.12, 12), K.mat.brass());
      cap.rotation.x = Math.PI / 2;
      cap.position.set(s * (L + 0.19), H + 0.5, 0);
      g.add(cap);
    }

    // ── козловые опоры ──
    g.add(trestle(-L * 0.62, profile(0.62) - 0.02, DEPTH));
    g.add(trestle(L * 0.62, profile(0.62) - 0.02, DEPTH));

    // ── шар: лакированное дерево с кремовой лентой ──
    const ballGroup = new THREE.Group();
    ballGroup.add(K.ball(R, K.glossy(0x7a3f2a, { roughness: 0.3, clearcoatRoughness: 0.18 })));
    const stripe = new THREE.Mesh(new THREE.TorusGeometry(R * 1.001, 0.014, 8, 40), K.mat.cream());
    stripe.rotation.y = Math.PI / 2;
    ballGroup.add(stripe);
    const proxy = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    ballGroup.add(proxy);
    g.add(ballGroup);

    const bars = new K.EnergyBars(
      [
        { key: 'ep', label: 'Eп', color: K.ENERGY_COLORS.ep },
        { key: 'ek', label: 'Eк', color: K.ENERGY_COLORS.ek },
        { key: 'q', label: 'Q', color: K.ENERGY_COLORS.q },
      ],
      { x: 3.35, y: 0, z: -0.2 },
      2.5,
    );
    bars.setMax('ep', 100);
    bars.setMax('ek', 100);
    bars.setMax('q', 100);
    g.add(bars.group);

    const sumTip = K.dynamicChip(0.4);
    sumTip.sprite.position.set(3.35, 3.35, -0.2);
    g.add(sumTip.sprite);

    // тепловые волны в точке контакта шара с жёлобом
    const heat = new K.Ripples();
    g.add(heat.group);

    api.fit([0.06, 0.3, 1], [0.75, 1.1, -0.2]);

    // ── состояние ──
    let f = f0;
    let u = -0.95; // положение по жёлобу; почти у верхнего края
    let sigma = 0; // скорость вдоль траектории, м/с
    let running = false;
    let q = 0; // накопленное тепло, Дж
    let E0 = 0; // полная энергия выбранного запуска, Дж
    let settledToastShown = false;

    const yOf = (uu: number) => profile(uu) + R + TH;

    const layout = () => {
      ballGroup.position.set(u * L, yOf(u), 0);
    };

    const epNow = () => M * G * profile(u);
    const ekNow = () => ROLL * M * sigma * sigma;
    const totalNow = () => epNow() + ekNow() + q;

    E0 = epNow();
    layout();
    sumTip.set(`Σ = ${K.fmt(totalNow(), 1)} Дж`);

    // ── шар берут мышкой и оттягивают по жёлобу ──
    api.draggable(ballGroup, {
      onStart() {
        running = false;
        sigma = 0;
        q = 0;
        settledToastShown = false;
      },
      onMove(p) {
        u = THREE.MathUtils.clamp(p.x / L, -0.985, 0.985);
        sigma = 0;
        E0 = epNow();
        q = 0;
        layout();
      },
      onEnd() {
        E0 = epNow();
        q = 0;
        running = true; // отпустили — шар катится
        settledToastShown = false;
      },
      onClick() {
        api.caption('Оттяни шар в сторону и отпусти', new THREE.Vector3(u * L, yOf(u) + 0.8, 0));
      },
    });

    api.toast('Оттяни шар по жёлобу в сторону и отпусти');

    return {
      setParam(vv) {
        f = vv;
      },
      tick(dt) {
        if (running) {
          const steps = 6;
          const h = dt / steps;
          const eRest = 1 - 0.2 * f;
          // направление движения вдоль жёлоба
          let dir = sigma !== 0 ? Math.sign(sigma) : slope(u) > 0 ? -1 : 1;
          for (let i = 0; i < steps; i++) {
            const yp = slope(u);
            const dsdu = L * Math.sqrt(1 + yp * yp);
            // скорость берём из оставшейся механической энергии: E0 = Eп + Eк + Q
            const remain = Math.max(E0 - q - M * G * profile(u), 0);
            const speed = Math.sqrt(remain / (ROLL * M));

            // шар стоит на склоне: даём гравитации сдвинуть его с места
            if (speed < 1e-4) {
              const sinT = yp / Math.sqrt(1 + yp * yp);
              if (Math.abs(sinT) > 1e-5) {
                dir = sinT > 0 ? -1 : 1;
                const aG = (5 / 7) * G * Math.abs(sinT);
                u += (dir * 0.5 * aG * h * h) / dsdu;
              }
              sigma = 0;
              continue;
            }

            // вязкое сопротивление: v → v·e^(−2,2f·dt), потеря уходит в Q
            const drag = Math.exp(-2.2 * f * h);
            const v = speed * drag;
            q += ROLL * M * (speed * speed - v * v);
            u += (dir * v * h) / dsdu;

            // удар о вертикальный борт: часть кинетической энергии уходит в тепло
            if (u > 1) {
              u = 1;
              if (dir > 0) {
                const before = ROLL * M * v * v;
                dir = -1;
                q += before - before * eRest * eRest;
              }
            } else if (u < -1) {
              u = -1;
              if (dir < 0) {
                const before = ROLL * M * v * v;
                dir = 1;
                q += before - before * eRest * eRest;
              }
            }
            sigma = dir * v;
          }
          // скорость приводим в точное соответствие с оставшейся энергией,
          // чтобы сумма Eп + Eк + Q не «дрожала» между шагами
          const remainEnd = Math.max(E0 - q - M * G * profile(u), 0);
          sigma = dir * Math.sqrt(remainEnd / (ROLL * M));
          ballGroup.rotation.z -= (sigma * dt) / R;
          if (q > E0) q = E0;
          // шар успокоился в нижней точке
          if (Math.abs(sigma) < 0.03 && Math.abs(u) < 0.02) {
            sigma = 0;
            running = false;
            if (!settledToastShown) {
              settledToastShown = true;
              api.toast('Шар остановился: механическая энергия перешла в тепло. Оттяни его снова');
            }
          }
          layout();
          // тёплые волны при заметном трении
          if (f > 0.001 && Math.abs(sigma) > 0.06 && Math.random() < dt * 7) {
            heat.spawn(u * L, profile(u) + TH + 0.02, 0, 0.22, 0.65);
          }
        }
        heat.tick(dt);

        const ep = epNow();
        const ek = ekNow();
        const total = ep + ek + q;
        bars.set('ep', ep);
        bars.set('ek', ek);
        bars.set('q', q);
        bars.tick(dt);
        sumTip.set(`Σ = ${K.fmt(total, 1)} Дж`);
        api.readouts([
          { label: 'Eп', value: `${K.fmt(ep, 1)} Дж` },
          { label: 'Eк', value: `${K.fmt(ek, 1)} Дж` },
          { label: 'Q (трение)', value: `${K.fmt(q, 1)} Дж` },
          { label: 'Σ', value: `${K.fmt(total, 1)} Дж` },
          { label: 'v', value: `${K.fmt(Math.abs(sigma), 2)} м/с` },
        ]);
      },
    };
  },
};
