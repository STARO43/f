// Опыт 1. Накопители энергии: шар поднимают мышкой по размеченной линии,
// затем отпускают — Eп переходит в Eк, а при ударе о стол — в тепло Q.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const G = 9.8;
const TABLE_H = 1.12;
const LIFT = 2.0;

function pulse(api: SceneAPI, root: THREE.Object3D) {
  api.tween(
    0.5,
    (k) => {
      const s = 1 + Math.sin(Math.PI * k) * 0.05;
      root.scale.setScalar(s);
    },
    (k) => k,
    () => root.scale.setScalar(1),
  );
}

export const ch01: Experiment = {
  build(api: SceneAPI, m0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // ── стол ──
    g.add(K.table(3.9, 2.3, TABLE_H));

    // ── шар ──
    const ballGroup = new THREE.Group();
    const ballMesh = K.ball(0.2, K.darkMetal());
    ballMesh.position.y = -0.2;
    ballGroup.add(ballMesh);
    // невидимая «зона захвата» — шар легче взять мышкой
    const grab = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    ballGroup.add(grab);
    ballGroup.position.set(-1.05, TABLE_H + 0.4, 0.3);
    g.add(ballGroup);

    // ── разметка линии подъёма: 0 … 2 м ──
    const bx = -1.05; // ось подъёма шара
    const bz = 0.3;
    const topY = TABLE_H + LIFT;
    const railTop = topY; // линия заканчивается ровно на отметке «2 м»
    const railMat = K.std(K.C.inkSoft, { roughness: 0.9 });
    // тонкий элегантный пунктир из коротких цилиндров
    const dashRail = (x: number, z: number, y0: number, y1: number) => {
      const grp = new THREE.Group();
      const dash = 0.14;
      const gap = 0.1;
      for (let y = y0; y < y1 - 1e-4; y += dash + gap) {
        const h = Math.min(dash, y1 - y);
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, h, 8), railMat);
        seg.position.set(x, y + h / 2, z);
        grp.add(seg);
      }
      return grp;
    };
    g.add(dashRail(bx, bz, TABLE_H + 0.005, railTop));
    // только подписи, без засечек
    for (const [y, label] of [
      [TABLE_H + 1, '1 м'],
      [topY, '2 м'],
    ] as const) {
      const l = K.labelSprite(label, 0.22, { italic: false });
      l.position.set(bx - 0.36, y, bz + 0.02);
      g.add(l);
    }

    // ── накопители-предметы ──
    const battery = new THREE.Group();
    battery.add(K.cyl(0.11, 0.11, 0.3, K.mat.graphite()));
    battery.add(K.cyl(0.05, 0.05, 0.05, K.mat.copper(), 0, 0.3, 0));
    battery.position.set(0.55, TABLE_H, -0.62);
    g.add(battery);

    const springStand = new THREE.Group();
    springStand.add(K.box(0.34, 0.1, 0.34, K.mat.woodLight()));
    const sp = K.springMesh(7, 0.09, 0.026, 0.26);
    sp.group.position.y = 0.1;
    springStand.add(sp.group);
    springStand.position.set(0.62, TABLE_H, 0.5);
    g.add(springStand);

    const cup = new THREE.Group();
    const glass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.13, 0.36, 24, 1, true),
      new THREE.MeshPhysicalMaterial({ color: 0xdfe9e6, transparent: true, opacity: 0.32, roughness: 0.1, side: THREE.DoubleSide }),
    );
    glass.geometry.translate(0, 0.18, 0);
    cup.add(glass);
    cup.add(K.cyl(0.135, 0.135, 0.26, K.mat.water()));
    const st = K.steam(0.9);
    st.on = true;
    st.group.position.set(0, 0.42, 0);
    cup.add(st.group);
    cup.position.set(1.32, TABLE_H, 0.12);
    g.add(cup);

    // ── столбцы энергии ──
    const bars = new K.EnergyBars(
      [
        { key: 'ep', label: 'Eп', color: K.ENERGY_COLORS.ep, max: m0 * G * LIFT },
        { key: 'ek', label: 'Eк', color: K.ENERGY_COLORS.ek, max: m0 * G * LIFT },
        { key: 'q', label: 'Q', color: K.ENERGY_COLORS.q, max: m0 * G * LIFT },
      ],
      { x: -3.0, y: 0, z: 1.2 },
    );
    g.add(bars.group);

    // тёплые волны в точке удара шара о стол
    const ripples = new K.Ripples();
    ripples.group.position.set(-1.05, TABLE_H, 0.3);
    g.add(ripples.group);

    // ── кликабельные предметы ──
    const hint = (root: THREE.Object3D, text: string, at: THREE.Vector3) =>
      api.clickable(root, () => {
        pulse(api, root);
        api.caption(text, at);
      });
    hint(battery, 'Батарейка — химический накопитель', battery.position.clone().add(new THREE.Vector3(0, 0.75, 0)));
    hint(springStand, 'Пружина — упругий накопитель', springStand.position.clone().add(new THREE.Vector3(0, 0.72, 0)));
    hint(cup, 'Горячая вода — тепловой накопитель', cup.position.clone().add(new THREE.Vector3(0, 0.85, 0)));

    api.fit([0.5, 0.4, 1], [-0.6, 1.75, 0], 1.06);

    // ── состояние ──
    let m = m0;
    let h = 0;
    let hPrev = 0;
    let vEst = 0; // оценка скорости подъёма (для Eк)
    let vy = 0; // вертикальная скорость при свободном падении
    let falling = false; // шар отпущен и падает
    let q = 0; // тепло, выделившееся при ударе
    const rOf = () => 0.2 * Math.cbrt(m);

    const layoutBall = () => {
      const r = rOf();
      ballMesh.scale.setScalar(r / 0.2);
      // меш шара смещён вниз на 0.2 от начала группы; центр шара — на высоте r над столом
      grab.position.y = -0.2;
      grab.scale.setScalar(Math.max(1, r / 0.2));
      ballGroup.position.y = TABLE_H + 0.2 + r + h;
    };

    layoutBall();

    // шар перетаскивается мышкой: схватил — потянул — отпустил
    api.draggable(ballGroup, {
      onStart(p) {
        // взяли шар — падение останавливается
        falling = false;
        vy = 0;
        vEst = 0;
        h = THREE.MathUtils.clamp(h, 0, LIFT);
        layoutBall();
        void p;
      },
      onMove(p, delta) {
        const wasAtBottom = h <= 0.001;
        falling = false;
        vy = 0;
        h = THREE.MathUtils.clamp(h + delta.y, 0, LIFT);
        // начали новый подъём со стола — старый нагрев сбрасываем
        if (wasAtBottom && h > 0.001) q = 0;
        layoutBall();
        void p;
      },
      onEnd() {
        // отпустили выше стола — шар падает под действием силы тяжести
        if (h > 0.001) {
          falling = true;
          vy = 0;
        }
      },
      onClick() {
        // одиночный клик по висящему шару = отпустить его
        if (h > 0.001 && !falling) {
          falling = true;
          vy = 0;
        }
        api.caption('При подъёме: Eп = mgh растёт', new THREE.Vector3(-1.05, TABLE_H + 1.35, 0));
      },
    });

    api.toast('Схвати шар мышкой, подними и отпусти — Eп перейдёт в Eк, а при ударе — в тепло');

    return {
      setParam(v) {
        // сменили шар — прежний нагрев к новой массе не относится
        if (v !== m) q = 0;
        m = v;
        h = Math.min(h, LIFT);
        layoutBall();
        bars.setMax('ep', m * G * LIFT);
        bars.setMax('ek', m * G * LIFT);
        bars.setMax('q', m * G * LIFT);
      },
      tick(dt) {
        // свободное падение: Eп переходит в Eк, при ударе — в тепло
        const wasFalling = falling;
        if (falling) {
          const h0 = h;
          const v0 = vy;
          vy -= G * dt;
          h += vy * dt;
          if (h <= 0) {
            // скорость удара — из сохранения энергии, без ошибки шага
            const vImpact = Math.sqrt(Math.max(0, v0 * v0 + 2 * G * h0));
            h = 0;
            vy = 0;
            falling = false;
            vEst = 0;
            q += 0.5 * m * vImpact * vImpact;
            ripples.spawn(0, 0, 0, 0.45 + vImpact * 0.05, 0.8);
            layoutBall();
            if (vImpact > 0.6) {
              api.caption('Удар: Eк перешла в тепло', new THREE.Vector3(-1.05, TABLE_H + 0.55, 0));
            }
          } else {
            layoutBall();
          }
        }
        // при подъёме мышкой оцениваем скорость руки; при падении берём vy
        const dh = h - hPrev;
        hPrev = h;
        if (!wasFalling) {
          const vInst = Math.abs(dh) / Math.max(dt, 1e-4);
          vEst += (vInst - vEst) * Math.min(dt * 8, 1);
          if (vEst < 0.02) vEst = 0;
        }
        const vNow = falling ? Math.abs(vy) : vEst;
        const ep = m * G * h;
        const ek = 0.5 * m * vNow * vNow;
        bars.set('ep', ep);
        bars.set('ek', Math.min(ek, m * G * LIFT));
        bars.set('q', q);
        bars.tick(dt);
        st.tick(dt);
        ripples.tick(dt);
        api.readouts([
          { label: 'h', value: `${K.fmt(h, 2)} м` },
          { label: 'v', value: `${K.fmt(vNow, 2)} м/с` },
          { label: 'Eп = mgh', value: `${K.fmt(ep, 1)} Дж` },
          { label: 'Eк', value: `${K.fmt(ek, 1)} Дж` },
          { label: 'Q', value: `${K.fmt(q, 1)} Дж` },
        ]);
      },
    };
  },
};
