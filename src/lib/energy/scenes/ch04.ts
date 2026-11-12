// Опыт 4. Затухающие отскоки мяча: мяч поднимают мышкой и отпускают —
// он падает, при каждом ударе часть энергии уходит в тепло
// (тёплые волны на земле), и каждый отскок ниже.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const G = 9.8;
const R = 0.26;
const BALL_X = -0.95;
const BALL_Z = -0.9;
const Y_MAX = 2.55;

export const ch04: Experiment = {
  build(api: SceneAPI, e0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // деревянная линейка-шкала высот
    const rulerMat = K.mat.woodLight();
    g.add(K.box(0.07, Y_MAX + 0.12, 0.07, rulerMat, -1.62, 0, BALL_Z));
    const tickMat = K.mat.graphite();
    for (let i = 1; i <= 5; i++) {
      const y = i * 0.5;
      g.add(K.box(0.14, 0.03, 0.03, tickMat, -1.62, y, BALL_Z));
      const lbl = K.labelSprite(`${K.fmt(i * 0.5, 1)} м`, 0.2, { italic: false });
      lbl.position.set(-1.62, y + 0.18, BALL_Z);
      g.add(lbl);
    }

    // баскетбольный мяч
    const ballGroup = new THREE.Group();
    const sphere = K.ball(R, K.basketball());
    sphere.rotation.y = Math.PI / 4;
    ballGroup.add(sphere);
    // невидимая «зона захвата» — мяч легче взять мышкой
    ballGroup.add(
      new THREE.Mesh(new THREE.SphereGeometry(0.36, 8, 8), new THREE.MeshBasicMaterial({ visible: false })),
    );
    g.add(ballGroup);

    const ripples = new K.Ripples();
    g.add(ripples.group);

    const bars = new K.EnergyBars(
      [
        { key: 'ep', label: 'Eп', color: K.ENERGY_COLORS.ep },
        { key: 'ek', label: 'Eк', color: K.ENERGY_COLORS.ek },
        { key: 'q', label: 'Q', color: K.ENERGY_COLORS.q },
      ],
      { x: 3.4, y: 0, z: -1.4 },
    );
    bars.setMax('ep', G * Y_MAX);
    bars.setMax('ek', G * Y_MAX);
    g.add(bars.group);

    api.fit([0.42, 0.34, 1], [-0.3, 0.95, -0.4]);

    // ── состояние ──
    let e = e0;
    let y = 0; // мяч лежит на полу, пока его не поднимут мышкой
    let vy = 0;
    let running = false;
    let bounces = 0;
    let q = 0;

    const layout = () => {
      ballGroup.position.set(BALL_X, R + y, BALL_Z);
    };
    layout();

    // ── мяч берут мышкой: схватил — поднял — отпустил ──
    api.draggable(ballGroup, {
      onStart() {
        running = false;
        vy = 0;
        bounces = 0;
        q = 0;
      },
      onMove(_p, delta) {
        y = THREE.MathUtils.clamp(y + delta.y, 0.02, Y_MAX);
        layout();
      },
      onEnd() {
        if (y > 0.06) running = true; // отпустили — мяч падает
      },
      onClick() {
        api.caption('Каждый удар — часть энергии уходит в тепло', new THREE.Vector3(BALL_X, 1.3, BALL_Z));
      },
    });

    api.toast('Подними мяч мышкой и отпусти — он упадёт и станет отскакивать');

    return {
      setParam(v) {
        e = v;
      },
      tick(dt) {
        if (running) {
          vy -= G * dt;
          y += vy * dt;
          if (y <= 0) {
            y = 0;
            const impactV = Math.abs(vy);
            const lost = 0.5 * impactV * impactV * (1 - e * e);
            q += lost;
            vy = impactV * e;
            ripples.spawn(BALL_X, 0, BALL_Z, 0.7 + impactV * 0.09, 0.85);
            bounces += 1;
            if (vy < 0.55) {
              // мяч замер — вся механическая энергия перешла в тепло
              running = false;
              vy = 0;
              api.caption('Механическая энергия перешла в тепло', new THREE.Vector3(BALL_X, 1.15, BALL_Z));
              api.toast('Подними мяч мышкой снова, чтобы бросить ещё раз');
            }
          }
          layout();
          ballGroup.rotation.x += (Math.abs(vy) * dt) / R * 0.4;
        }
        const ep = G * y;
        const ek = 0.5 * vy * vy;
        bars.set('ep', ep);
        bars.set('ek', ek);
        bars.set('q', q);
        bars.tick(dt);
        ripples.tick(dt);
        api.readouts([
          { label: 'e', value: K.fmt(e, 2) },
          { label: 'Удар №', value: String(bounces) },
          { label: 'h', value: `${K.fmt(y, 2)} м` },
          { label: 'След. отскок', value: vy < -0.01 && y > 0.01 ? `${K.fmt(e * e * y, 2)} м` : '—' },
          { label: 'Q', value: `${K.fmt(q, 1)} Дж` },
        ]);
      },
    };
  },
};
