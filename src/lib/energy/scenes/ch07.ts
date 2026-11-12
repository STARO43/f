// Опыт 7. КПД: машина получает энергию E и отдаёт 80% на подъём груза.
// Рычаг защёлкивается нажатием; высота подъёма вычисляется из полезной
// работы A = ηE, поэтому при любой E баланс сходится. Груз можно опустить.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const ETA = 0.8;
const G = 9.8;
const LOAD_M = 80; // кг
const DUR = 6; // секунд на полный подъём
const WINCH_X = 3.05;
const BODY_X = -0.75;

export const ch07: Experiment = {
  build(api: SceneAPI, e0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    g.add(K.box(7.2, 0.14, 2.0, K.mat.wood(), 0, 0, 0));

    // ── корпус машины: вал, купол, маховик, труба ──
    const body = new THREE.Group();
    body.position.set(BODY_X, 0.14, 0);
    const hull = K.cyl(0.58, 0.62, 1.0, K.mat.graphite(), 0, 0, 0, 30);
    body.add(hull);
    // латунные пояса
    const band1 = new THREE.Mesh(new THREE.TorusGeometry(0.585, 0.035, 10, 36), K.mat.brass());
    band1.rotation.x = Math.PI / 2;
    band1.position.y = 0.3;
    body.add(band1);
    const band2 = band1.clone();
    band2.position.y = 0.95;
    body.add(band2);
    // купол
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.58, 28, 16), K.mat.brass());
    dome.scale.set(1, 0.55, 1);
    dome.position.y = 1.0;
    dome.castShadow = true;
    body.add(dome);
    // труба с паром
    body.add(K.cyl(0.085, 0.1, 0.55, K.mat.copper(), -0.22, 1.32, -0.18));
    const steamLoss = K.steam(0.85);
    steamLoss.group.position.set(BODY_X - 0.22, 2.0, -0.18);
    g.add(steamLoss.group);
    // маховик спереди
    const flywheel = new THREE.Group();
    flywheel.position.set(0.16, 0.62, 0.64);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.05, 12, 30), K.mat.steel());
    flywheel.add(rim);
    for (let i = 0; i < 3; i++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.035, 0.03), K.mat.steel());
      spoke.rotation.z = (i * Math.PI) / 3;
      flywheel.add(spoke);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 14), K.mat.copper());
    hub.rotation.x = Math.PI / 2;
    flywheel.add(hub);
    body.add(flywheel);
    // вал отбора мощности
    const shaft = K.cyl(0.055, 0.055, 0.55, K.mat.copper(), 0.5, 0.62, 0, 14);
    shaft.rotation.z = Math.PI / 2;
    shaft.position.set(0.82, 0.62, 0);
    body.add(shaft);
    // рычаг пуска: защёлкивается в верхнем положении
    const lever = new THREE.Group();
    lever.position.set(0.62, 0.86, 0.28);
    const leverArm = K.box(0.5, 0.055, 0.055, K.mat.copper(), 0.22, 0, 0);
    lever.add(leverArm);
    const knob = K.ball(0.06, K.mat.woodDark());
    knob.position.set(0.5, 0, 0);
    lever.add(knob);
    const pivot = K.ball(0.05, K.mat.brass());
    lever.add(pivot);
    lever.rotation.z = -0.18;
    body.add(lever);
    // ножки
    for (const [sx, sz] of [
      [-0.45, -0.32],
      [0.45, -0.32],
      [-0.45, 0.32],
      [0.45, 0.32],
    ])
      body.add(K.box(0.22, 0.16, 0.22, K.mat.woodDark(), sx, 0, sz));
    g.add(body);

    // ── вход энергии: труба с латунными бусинами ──
    const inCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.4, 0.9, 0),
      new THREE.Vector3(-2.5, 1.05, 0),
      new THREE.Vector3(-1.7, 0.95, 0),
      new THREE.Vector3(BODY_X - 0.62, 0.75, 0),
    ]);
    const inPipe = new THREE.Mesh(new THREE.TubeGeometry(inCurve, 40, 0.09, 12, false), K.mat.copper());
    inPipe.castShadow = true;
    g.add(inPipe);
    g.add(K.box(0.46, 0.82, 0.46, K.mat.graphite(), -3.42, 0, 0));
    g.add(K.cyl(0.1, 0.1, 0.07, K.mat.brass(), -3.42, 0.82, 0));
    const inBeads = K.flowBeads(inCurve.getPoints(60), { count: 9, color: K.C.brass, speed: 0.28 });
    g.add(inBeads.group);
    const inLbl = K.labelSprite('Подведённая энергия E', 0.3);
    inLbl.position.set(-2.6, 1.55, 0);
    g.add(inLbl);

    // ── полезный выход: дуга к лебёдке ──
    const outCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(BODY_X + 0.3, 1.5, 0),
      new THREE.Vector3(0.7, 2.0, 0),
      new THREE.Vector3(2.0, 2.0, 0),
      new THREE.Vector3(WINCH_X, 1.98, 0),
    ]);
    const outPipe = new THREE.Mesh(new THREE.TubeGeometry(outCurve, 40, 0.07, 12, false), K.mat.brass());
    outPipe.castShadow = true;
    g.add(outPipe);
    const outBeads = K.flowBeads(outCurve.getPoints(60), { count: 8, color: K.ENERGY_COLORS.ep, speed: 0.28 });
    g.add(outBeads.group);
    const outLbl = K.labelSprite('A = ηE', 0.28, { color: '#5c6b3a' });
    outLbl.position.set(1.5, 2.4, 0);
    g.add(outLbl);

    // ── потери: тёплые волны и пар ──
    const ripples = new K.Ripples();
    ripples.group.position.set(0, 0.16, 0);
    g.add(ripples.group);
    const lossLbl = K.labelSprite('Тепло и звук', 0.27, { color: '#9c5636' });
    lossLbl.position.set(BODY_X + 1.55, 0.58, 0.9);
    g.add(lossLbl);

    // ── лебёдка с грузом ──
    const winch = new THREE.Group();
    winch.position.set(WINCH_X, 0.14, 0);
    winch.add(K.box(0.7, 0.1, 0.62, K.mat.woodDark(), 0, 0, 0));
    for (const sx of [-0.28, 0.28]) {
      winch.add(K.box(0.09, 2.2, 0.09, K.mat.brass(), sx, 0.1, -0.18));
    }
    winch.add(K.box(0.7, 0.09, 0.16, K.mat.brass(), 0, 2.2, -0.18));
    // барабан, на который наматывается трос
    const winchDrum = new THREE.Group();
    winchDrum.position.set(0, 2.05, 0);
    const drumMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.42, 18), K.mat.brass());
    drumMesh.rotation.z = Math.PI / 2;
    winchDrum.add(drumMesh);
    winch.add(winchDrum);

    const weight = new THREE.Group();
    weight.add(K.box(0.4, 0.34, 0.34, K.mat.sage(), 0, 0, 0));
    const eye = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.011, 6, 18), K.mat.brass());
    eye.rotation.x = Math.PI / 2;
    eye.position.y = 0.37;
    weight.add(eye);
    weight.position.set(0, 0.4, 0);
    winch.add(weight);
    g.add(winch);

    const weightRopeGeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 6);
    weightRopeGeo.translate(0, -0.5, 0);
    const weightRope = new THREE.Mesh(weightRopeGeo, K.mat.cream());
    weightRope.position.set(WINCH_X, 1.94, 0);
    weightRope.castShadow = true;
    g.add(weightRope);

    const etaLbl = K.chipSprite('η = 80%', 0.44);
    etaLbl.position.set(BODY_X, 2.2, 0);
    g.add(etaLbl);

    api.fit([0.38, 0.38, 1], [0.3, 1.0, 0]);

    // ── состояние ──
    let E = e0;
    let t = 0; // 0..1 — доля полного цикла
    let on = false;
    let flyOmega = 0;

    const liftMax = () => (E * ETA) / (LOAD_M * G);

    const layoutWeight = () => {
      weight.position.y = 0.4 + t * liftMax();
      const top = weight.position.y + 0.37;
      weightRope.scale.y = Math.max(1.94 - top, 0.02);
    };
    layoutWeight();

    const resetCycle = () => {
      on = false;
      t = 0;
      layoutWeight();
      lever.rotation.z = -0.18;
    };

    const toggle = () => {
      if (t >= 1) {
        api.caption('Груз наверху — потяни его вниз, чтобы начать новый цикл', new THREE.Vector3(WINCH_X, 2.4, 0));
        return;
      }
      on = !on;
      api.toast(on ? 'Машина работает: 80% энергии идёт на подъём груза' : 'Машина остановлена');
    };

    api.clickable(lever, toggle);
    api.clickable(body, toggle);
    // груз опускают мышкой
    api.draggable(weight, {
      onStart() {
        on = false;
      },
      onMove(_p, delta) {
        const yLocal = weight.position.y + delta.y; // winch не масштабируется
        t = THREE.MathUtils.clamp((yLocal - 0.4) / liftMax(), 0, 1);
        layoutWeight();
      },
      onClick() {
        api.caption('Потяни груз вниз, чтобы опустить', new THREE.Vector3(WINCH_X, 2.4, 0));
      },
    });

    api.toast('Нажми на рычаг — машина поднимет груз; потяни груз вниз, чтобы опустить');

    return {
      setParam(v) {
        E = v;
        resetCycle();
      },
      tick(dt, time) {
        if (on && t < 1) {
          t = Math.min(t + dt / DUR, 1);
          layoutWeight();
          winchDrum.rotation.x -= (liftMax() / DUR) * dt / 0.11;
          if (t >= 1) {
            on = false;
            api.caption(
              `Груз поднят на ${K.fmt(liftMax(), 2)} м: A = ${K.fmt(E * ETA, 0)} Дж`,
              new THREE.Vector3(WINCH_X, 2.6, 0),
            );
          }
        }
        // маховик плавно раскручивается и останавливается
        flyOmega += ((on ? 2 + (E / 1000) * 4 : 0) - flyOmega) * Math.min(dt * 2.5, 1);
        flywheel.rotation.z -= flyOmega * dt;
        // рычаг защёлкивается
        lever.rotation.z += ((on ? 0.42 : -0.18) - lever.rotation.z) * Math.min(dt * 6, 1);
        const rate = on ? 0.35 + (E / 1000) * 0.65 : 0;
        inBeads.setRate(rate);
        outBeads.setRate(rate * ETA);
        inBeads.tick(dt);
        outBeads.tick(dt);
        if (on && Math.random() < dt * 4 * (1 - ETA)) ripples.spawn(BODY_X + 0.6, 0.16, 0.42, 0.55, 0.8);
        ripples.tick(dt);
        steamLoss.on = on;
        steamLoss.tick(dt);
        void time;

        const delivered = E * t;
        const useful = delivered * ETA;
        api.readouts([
          { label: 'E подведено', value: `${K.fmt(delivered, 0)} Дж` },
          { label: 'A пол = 0,8·E', value: `${K.fmt(useful, 0)} Дж` },
          { label: 'h груза', value: `${K.fmt(t * liftMax(), 2)} м` },
          { label: 'Потери', value: `${K.fmt(delivered * (1 - ETA), 0)} Дж` },
          { label: 'P подв', value: `${K.fmt(E / DUR, 0)} Вт` },
        ]);
      },
    };
  },
};
