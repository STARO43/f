// Опыт 8. Электростанция и электросеть: котёл → турбина → генератор →
// рубильник (в разрыве цепи) → трансформатор → ЛЭП → город.
// Рубильник защёлкивается нажатием; ток, пар и яркость города зависят
// от передаваемой мощности. Показаны токи и потери I²R на линии.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const U_LOW = 25e3; // В — до повышения
const U_HIGH = 400e3; // В — линия
const R_LINE = 0.5; // Ом — активное сопротивление одной линии

/** цилиндр между двумя точками */
function rod(a: THREE.Vector3, b: THREE.Vector3, r: number, material: THREE.Material) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 8), material);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  return mesh;
}

export const ch08: Experiment = {
  build(api: SceneAPI, p0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    // ── котёл: корпус, топка, труба ──
    const boiler = new THREE.Group();
    boiler.position.set(-4.2, 0, 0);
    boiler.add(K.cyl(0.45, 0.45, 1.6, K.mat.steel(), 0, 0.22, 0, 26));
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.45, 26, 12), K.mat.steel());
    cap.scale.set(1, 0.4, 1);
    cap.position.y = 1.82;
    cap.castShadow = true;
    boiler.add(cap);
    for (const y of [0.55, 1.2]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.455, 0.03, 8, 30), K.mat.graphite());
      band.rotation.x = Math.PI / 2;
      band.position.y = y;
      boiler.add(band);
    }
    // топочная дверца и пламя в ней
    boiler.add(K.box(0.46, 0.42, 0.08, K.mat.graphite(), 0, 0.38, 0.43));
    boiler.add(K.box(0.3, 0.24, 0.03, K.std(0x2a211a, { roughness: 1 }), 0, 0.45, 0.475));
    const fire = K.flame(0.55);
    fire.group.position.set(0, 0.3, 0.49);
    fire.group.visible = false;
    boiler.add(fire.group);
    // ножки
    for (const a of [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3])
      boiler.add(K.cyl(0.05, 0.06, 0.24, K.mat.graphite(), Math.sin(a) * 0.3, 0, Math.cos(a) * 0.3, 10));
    // труба
    boiler.add(K.cyl(0.13, 0.16, 1.3, K.mat.graphite(), 0.1, 1.95, -0.28, 16));
    boiler.add(K.cyl(0.18, 0.14, 0.1, K.mat.copper(), 0.1, 3.22, -0.28, 16));
    // куча угля
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      boiler.add(
        K.ball(
          0.08 + (i % 3) * 0.015,
          K.std(0x2f2b27, { roughness: 0.95 }),
          -0.62 + Math.cos(a) * 0.11,
          0.05 + (i % 2) * 0.06,
          0.25 + Math.sin(a) * 0.1,
          10,
        ),
      );
    }
    g.add(boiler);
    const smoke = K.steam(1.7);
    smoke.group.position.set(-4.1, 3.4, -0.28);
    g.add(smoke.group);

    // ── паропровод котёл → турбина ──
    const steamPipe = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.9, 1.6, 0),
      new THREE.Vector3(-3.3, 1.55, 0),
      new THREE.Vector3(-2.75, 1.15, 0),
      new THREE.Vector3(-2.42, 0.92, 0),
    ]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(steamPipe, 32, 0.055, 10, false), K.mat.copper()));
    const steamBeads = K.flowBeads(steamPipe.getPoints(50), {
      count: 6,
      color: K.C.cream,
      speed: 0.3,
      radius: 0.045,
    });
    g.add(steamBeads.group);

    // ── турбина ──
    const turbine = new THREE.Group();
    turbine.position.set(-2.3, 0, 0);
    turbine.add(K.box(0.7, 0.42, 0.5, K.mat.graphite(), 0, 0, 0));
    const turbBody = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.75, 22), K.mat.copper());
    turbBody.rotation.z = Math.PI / 2;
    turbBody.position.set(0, 0.75, 0);
    turbBody.castShadow = true;
    turbine.add(turbBody);
    const turbBlades = new THREE.Group();
    turbBlades.position.set(0.42, 0.75, 0);
    for (let i = 0; i < 6; i++) {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.4, 0.12), K.mat.brass());
      bl.position.y = 0.21;
      const holder = new THREE.Group();
      holder.rotation.x = (i * Math.PI) / 3;
      holder.add(bl);
      turbBlades.add(holder);
    }
    turbine.add(turbBlades);
    g.add(turbine);

    // ── вал ──
    g.add(rod(new THREE.Vector3(-1.9, 0.75, 0), new THREE.Vector3(-1.5, 0.75, 0), 0.05, K.mat.steel()));

    // ── генератор ──
    const generator = new THREE.Group();
    generator.position.set(-1.2, 0, 0);
    generator.add(K.box(0.7, 0.5, 0.5, K.mat.graphite(), 0, 0, 0));
    const genBody = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 22), K.mat.brass());
    genBody.rotation.z = Math.PI / 2;
    genBody.position.set(0, 0.8, 0);
    genBody.castShadow = true;
    generator.add(genBody);
    const genStripe = new THREE.Mesh(new THREE.TorusGeometry(0.302, 0.025, 8, 30), K.mat.graphite());
    genStripe.rotation.y = Math.PI / 2;
    genStripe.position.set(0.1, 0.8, 0);
    generator.add(genStripe);
    for (const x of [-0.42, 0.42]) {
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.07, 16), K.mat.copper());
      ring.rotation.z = Math.PI / 2;
      ring.position.set(x, 0.8, 0);
      ring.castShadow = true;
      generator.add(ring);
    }
    g.add(generator);

    // ── рубильник в разрыве цепи: панель, два контакта, нож с ручкой ──
    const SW_X = -0.3;
    const sw = new THREE.Group();
    sw.position.set(SW_X, 0, 0);
    sw.add(K.box(0.56, 0.12, 0.42, K.mat.woodDark(), 0, 0, 0));
    // изоляторы и неподвижные контакты
    for (const x of [-0.21, 0.21]) {
      sw.add(K.cyl(0.06, 0.075, 0.14, K.mat.cream(), x, 0.12, 0, 14));
      sw.add(K.cyl(0.028, 0.028, 0.1, K.mat.copper(), x, 0.26, 0, 12));
    }
    // нож: шарнир слева, свободный конец с красной ручкой
    const knife = new THREE.Group();
    knife.position.set(-0.21, 0.34, 0);
    knife.add(K.box(0.48, 0.055, 0.045, K.mat.copper(), 0.24, 0, 0));
    knife.add(K.cyl(0.032, 0.032, 0.09, K.mat.brass(), 0, 0, 0, 12));
    const knob = K.ball(0.055, K.std(0xa9432f, { roughness: 0.6 }), 0.5, 0, 0);
    knife.add(knob);
    knife.rotation.z = 0.95;
    sw.add(knife);
    sw.scale.setScalar(1.5);
    g.add(sw);

    // контакты рубильника в мировых координатах
    const switchA = new THREE.Vector3(SW_X - 0.315, 0.54, 0);
    const switchB = new THREE.Vector3(SW_X + 0.315, 0.54, 0);

    // ── трансформатор ──
    const trafo = new THREE.Group();
    trafo.position.set(1.0, 0, 0);
    trafo.add(K.box(0.8, 0.8, 0.62, K.mat.graphite()));
    for (const sx of [-1, 1])
      for (const sz of [-0.16, 0.16]) trafo.add(K.box(0.06, 0.5, 0.12, K.mat.steel(), sx * 0.44, 0.15, sz));
    for (const x of [-0.24, 0, 0.24]) {
      trafo.add(K.cyl(0.045, 0.055, 0.26, K.mat.cream(), x, 0.8, 0, 12));
      trafo.add(K.cyl(0.07, 0.06, 0.07, K.mat.copper(), x, 1.06, 0, 12));
    }
    g.add(trafo);

    // ── опора ЛЭП ──
    const pylon = new THREE.Group();
    pylon.position.set(3.3, 0, 0);
    const steelMat = K.mat.steel();
    const top = 2.62;
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        pylon.add(
          rod(
            new THREE.Vector3(sx * 0.4, 0, sz * 0.3),
            new THREE.Vector3(sx * 0.16, top, sz * 0.11),
            0.03,
            steelMat,
          ),
        );
    for (const [y, w] of [
      [0.85, 0.66],
      [1.75, 0.48],
    ] as const) {
      pylon.add(K.box(w, 0.045, 0.62 * (w / 0.7), steelMat, 0, y, 0));
    }
    pylon.add(K.box(0.34, 0.045, 0.24, steelMat, 0, 2.2, 0));
    pylon.add(K.box(1.7, 0.07, 0.07, steelMat, 0, top, 0));
    for (const x of [-0.52, 0.52]) {
      pylon.add(K.cyl(0.04, 0.05, 0.2, K.mat.cream(), x, top + 0.03, 0, 10));
      pylon.add(K.cyl(0.06, 0.05, 0.06, K.mat.copper(), x, top + 0.26, 0, 10));
    }
    g.add(pylon);

    // ── город ──
    const city = new THREE.Group();
    city.position.set(6.45, 0, 0);
    const windows: THREE.MeshStandardMaterial[] = [];
    const build = (x: number, w: number, h: number, d: number, color: number) => {
      city.add(K.box(w, h, d, K.std(color, { roughness: 0.85 }), x, 0, 0));
      const winMat = K.std(0x6b5a3a, {
        roughness: 0.5,
        emissive: 0xffc966,
        emissiveIntensity: 0.04,
      });
      windows.push(winMat);
      const cols = Math.max(2, Math.floor(w / 0.16));
      const rows = Math.max(2, Math.floor(h / 0.28));
      for (let i = 0; i < cols; i++)
        for (let j = 0; j < rows; j++) {
          const win = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.02), winMat);
          win.position.set(x - w / 2 + 0.12 + i * ((w - 0.24) / Math.max(cols - 1, 1)), 0.22 + j * 0.24, d / 2 + 0.012);
          city.add(win);
        }
    };
    build(-0.55, 0.5, 1.4, 0.5, 0xb9a789);
    build(0.05, 0.62, 1.9, 0.55, 0xc7b79b);
    build(0.72, 0.46, 1.1, 0.45, 0xa9977c);
    build(-1.1, 0.4, 0.8, 0.4, 0xc2b294);
    g.add(city);
    const cityLbl = K.chipSprite('Город', 0.44);
    cityLbl.position.set(6.55, 2.5, 0);
    g.add(cityLbl);

    // ── провода: генератор → рубильник → трансформатор → ЛЭП → город ──
    const wireMat = K.mat.graphite();
    const wire1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.8, 0.8, 0),
      new THREE.Vector3(-0.62, 0.62, 0),
      switchA.clone(),
    ]);
    const wire2 = new THREE.CatmullRomCurve3([
      switchB.clone(),
      new THREE.Vector3(0.1, 0.55, 0),
      new THREE.Vector3(0.58, 0.95, 0),
      new THREE.Vector3(0.76, 1.16, 0),
    ]);
    const wire3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.24, 1.2, 0),
      new THREE.Vector3(2.0, 1.85, 0),
      new THREE.Vector3(2.78, 2.86, 0),
    ]);
    const wire4 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(3.82, 2.86, 0),
      new THREE.Vector3(5.1, 2.35, 0),
      new THREE.Vector3(6.05, 2.15, 0),
      new THREE.Vector3(6.45, 1.92, 0),
    ]);
    for (const w of [wire1, wire2, wire3, wire4])
      g.add(new THREE.Mesh(new THREE.TubeGeometry(w, 30, 0.016, 6, false), wireMat));

    // ── разряды вдоль проводов ──
    const arcs1 = K.electricArcs(wire1.getPoints(30), { count: 2, color: 0x5fc4ff });
    const arcs2 = K.electricArcs(wire2.getPoints(30), { count: 2, color: 0x7fd4ff });
    const arcs3 = K.electricArcs(wire3.getPoints(40), { count: 2, color: 0x7fd4ff });
    const arcs4 = K.electricArcs(wire4.getPoints(50), { count: 3, color: 0x5fc4ff, spread: 0.07 });
    const arcsTrafo = K.electricArcs(
      [
        new THREE.Vector3(0.76, 1.16, 0),
        new THREE.Vector3(1.0, 1.25, 0),
        new THREE.Vector3(1.24, 1.2, 0),
      ],
      { count: 2, color: 0x9fdcff, spread: 0.045 },
    );
    g.add(arcs1.group, arcs2.group, arcs3.group, arcs4.group, arcsTrafo.group);

    // ── подписи узлов ──
    const place = (text: string, x: number, y: number, z = 0, h = 0.28) => {
      const s = K.chipSprite(text, h);
      s.position.set(x, y, z);
      g.add(s);
    };
    place('Котёл', -4.25, 2.35, 0.35, 0.34);
    place('Турбина', -2.35, 1.85, 0, 0.26);
    place('Генератор', -1.1, 1.4, 0, 0.26);
    place('Рубильник', SW_X, 1.0, 0.2, 0.24);
    place('Трансформатор', 1.0, 1.62, 0, 0.26);
    place('ЛЭП 400 кВ', 3.3, 3.15, 0, 0.3);

    api.fit([0.12, 0.3, 1], [0.6, 1.35, 0], 1.08);

    // ── состояние ──
    let P = p0;
    let running = false;
    let omega = 0;

    const toggle = () => {
      running = !running;
      api.toast(
        running
          ? 'Цепь замкнута: энергия идёт от генератора через трансформатор в город'
          : 'Рубильник разомкнут: передачи энергии нет',
      );
    };
    api.clickable(sw, toggle);
    api.clickable(knife, toggle);

    api.toast('Нажми на рубильник, чтобы замкнуть цепь; нажми ещё раз, чтобы разомкнуть');

    return {
      setParam(v) {
        P = v;
      },
      tick(dt, t) {
        // турбина и генератор плавно раскручиваются; скорость зависит от мощности
        const targetOmega = running ? 4 + (P / 500) * 4 : 0;
        omega += (targetOmega - omega) * Math.min(dt * 2.2, 1);
        turbBlades.rotation.x -= omega * dt;
        genBody.rotation.x -= omega * dt * 0.8;
        genStripe.rotation.x -= omega * dt * 0.8;
        // рубильник замыкается/размыкается
        knife.rotation.z += ((running ? 0 : 0.9) - knife.rotation.z) * Math.min(dt * 7, 1);

        const rate = running ? 0.25 + 0.75 * (P / 500) : 0;
        steamBeads.setRate(running ? 0.35 + 0.65 * (P / 500) : 0);
        arcs1.setRate(rate);
        arcs2.setRate(rate);
        arcs3.setRate(rate);
        arcs4.setRate(rate);
        arcsTrafo.setRate(rate);
        steamBeads.tick(dt);
        for (const a of [arcs1, arcs2, arcs3, arcs4, arcsTrafo]) a.tick(dt);
        smoke.on = running;
        smoke.tick(dt);
        fire.group.visible = running;
        fire.setScale(0.3 + (P / 500) * 0.35);
        fire.tick(t);
        windows.forEach((m) => {
          m.emissiveIntensity += ((running ? 0.85 : 0.04) - m.emissiveIntensity) * Math.min(dt * 4, 1);
        });

        // электрическая модель одной линии: P = UI, потери I²R
        const iLow = (P * 1e6) / U_LOW;
        const iHigh = (P * 1e6) / U_HIGH;
        const lossLow = (iLow * iLow * R_LINE) / 1e6; // МВт
        const lossHigh = (iHigh * iHigh * R_LINE) / 1e6; // МВт
        const delivered = Math.max(P - lossHigh, 0);
        api.readouts([
          { label: 'P генератора', value: `${K.fmt(P, 0)} МВт` },
          { label: 'U линии', value: `${K.fmt(U_HIGH / 1000, 0)} кВ` },
          { label: 'I линии', value: `${K.fmt(iHigh * (running ? 1 : 0), 0)} А` },
          { label: 'Потери I²R', value: `${K.fmt(lossHigh * (running ? 1 : 0), 2)} МВт` },
          { label: 'P в городе', value: `${K.fmt(delivered * (running ? 1 : 0), 0)} МВт` },
          { label: 'Без повышения', value: `${K.fmt(lossLow * (running ? 1 : 0), 0)} МВт потерь` },
        ]);
      },
    };
  },
};
