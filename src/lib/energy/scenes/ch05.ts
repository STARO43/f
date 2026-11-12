// Опыт 5. Удельная теплоёмкость и теплоизоляция: две одинаковые порции
// воды нагреваются одинаковой горелкой. Одна колба открыта, вторая — в
// теплоизолирующем кожухе. Обе горелки зажигаются нажатием и гаснут
// повторным нажатием. Вода может закипеть и частично испариться.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const M_WATER = 0.25; // кг
const CWATER = 4200; // Дж/(кг·°C)
const T_ROOM = 20; // °C
const T_BOIL = 100; // °C при нормальном давлении
const L_VAPOR = 2.26e6; // Дж/кг
const T_SIM = 14; // 1 реальная секунда = 14 секунд опыта
const SC = 0.4; // масштаб лабораторной посуды: 250 мл воды = 0,25 кг
const TABLE_H = 0.75;
const FLASK_Y = 0.34; // дно колбы над столом (в масштабе посуды)
const NECK_Y = FLASK_Y + 0.5; // высота кольца-держателя

// Потери тепла, Вт/°C: открытая колба теряет заметно больше.
const K_OPEN = 2.2;
const K_INSULATED = 0.45;

// Профиль круглодонной колбы с горлышком (радиус, высота)
const GLASS: number[][] = [
  [0, 0],
  [0.07, 0.004],
  [0.15, 0.03],
  [0.19, 0.09],
  [0.2, 0.17],
  [0.19, 0.26],
  [0.15, 0.34],
  [0.085, 0.4],
  [0.062, 0.43],
  [0.06, 0.57],
  [0.072, 0.6],
];

// Жидкость внутри: чуть меньше стенок, налита до половины колбы
const LIQUID: number[][] = [
  [0, 0.012],
  [0.065, 0.012],
  [0.142, 0.035],
  [0.178, 0.092],
  [0.188, 0.17],
  [0.178, 0.245],
  [0.155, 0.295],
  [0, 0.295],
];

// Теплоизолирующий кожух: кольцевая оболочка вокруг нижней части колбы
const JACKET: number[][] = [
  [0.205, 0.012],
  [0.242, 0.012],
  [0.242, 0.35],
  [0.205, 0.35],
  [0.205, 0.012],
];

const lathe = (pts: number[][], seg = 48) =>
  new THREE.LatheGeometry(
    pts.map(([x, y]) => new THREE.Vector2(x, y)),
    seg,
  );

export const ch05: Experiment = {
  build(api: SceneAPI, p0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    g.add(K.table(1.1, 0.72, TABLE_H));

    // прозрачное стекло и чуть более заметная кромка горлышка
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xdcebe8,
      roughness: 0.04,
      metalness: 0,
      transparent: true,
      opacity: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const rimMat = new THREE.MeshPhysicalMaterial({
      color: 0xcfe3df,
      roughness: 0.05,
      metalness: 0,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    type Cup = {
      grp: THREE.Group;
      burner: THREE.Group;
      flask: THREE.Group;
      fl: ReturnType<typeof K.flame>;
      water: THREE.Mesh;
      col: THREE.Mesh;
      tip: ReturnType<typeof K.dynamicChip>;
      steam: ReturnType<typeof K.steam>;
      name: string;
      m: number;
      T: number;
      qIn: number;
      qLoss: number;
      evaporated: number;
      boilAt: number | null;
    };

    const mkCup = (x: number, insulated: boolean, side: number): Cup => {
      const grp = new THREE.Group();
      grp.position.set(x, TABLE_H, 0);
      grp.scale.setScalar(SC);

      // спиртовка под колбой; по умолчанию погашена
      const burner = new THREE.Group();
      burner.add(K.cyl(0.13, 0.15, 0.09, K.mat.brass(), 0, 0, 0));
      burner.add(K.cyl(0.055, 0.07, 0.04, K.mat.copper(), 0, 0.09, 0));
      const fl = K.flame(0.5);
      fl.group.position.set(0, 0.12, 0);
      fl.group.visible = false;
      burner.add(fl.group);
      grp.add(burner);

      // держатель для колбы: основание, стойка, лапка, кольцо, винт
      const steel = K.mat.steel();
      const standX = side * 0.3;
      grp.add(K.box(0.28, 0.03, 0.26, K.mat.graphite(), standX, 0, -0.14));
      grp.add(K.cyl(0.014, 0.017, 0.98, steel, standX, 0.03, -0.14));
      const arm = K.cyl(0.012, 0.012, 0.3, steel, 0, 0, 0);
      arm.rotation.z = side * (Math.PI / 2);
      arm.position.set(standX, NECK_Y, -0.14);
      grp.add(arm);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.012, 10, 36), steel);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, NECK_Y, 0);
      ring.castShadow = true;
      grp.add(ring);
      grp.add(K.ball(0.022, K.mat.brass(), side * 0.09, NECK_Y, -0.03));

      // сама колба
      const flask = new THREE.Group();
      flask.position.y = FLASK_Y;
      grp.add(flask);

      const glass = new THREE.Mesh(lathe(GLASS), glassMat);
      glass.renderOrder = 3;
      glass.castShadow = false;
      glass.receiveShadow = false;
      flask.add(glass);

      const lip = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 8, 28), rimMat);
      lip.rotation.x = Math.PI / 2;
      lip.position.y = 0.6;
      flask.add(lip);

      const waterMat = new THREE.MeshPhysicalMaterial({
        color: 0x8fb9c4,
        roughness: 0.08,
        metalness: 0,
        transparent: true,
        opacity: 0.66,
        clearcoat: 0.5,
        depthWrite: false,
      });
      const water = new THREE.Mesh(lathe(LIQUID, 44), waterMat);
      water.renderOrder = 1;
      water.castShadow = false;
      water.receiveShadow = false;
      flask.add(water);

      // термометр: стеклянная трубка в горлышке, шарик в воде
      const thermo = new THREE.Group();
      const tubeMat = new THREE.MeshPhysicalMaterial({
        color: 0xe8eee9,
        transparent: true,
        opacity: 0.4,
        roughness: 0.12,
      });
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.62, 10), tubeMat);
      tube.geometry.translate(0, 0.31, 0);
      thermo.add(tube);
      const colGeo = new THREE.CylinderGeometry(0.0045, 0.0045, 1, 8);
      colGeo.translate(0, 0.5, 0);
      const col = new THREE.Mesh(
        colGeo,
        K.std(0xb84a32, { emissive: 0x8c2f1f, emissiveIntensity: 0.25 }),
      );
      col.position.y = 0.035;
      col.scale.y = 0.001;
      thermo.add(col);
      thermo.position.set(0.022, 0.055, 0.018);
      flask.add(thermo);

      if (insulated) {
        // матерчатый кожух; горлышко остаётся открытым, чтобы пар мог выходить
        const jacket = new THREE.Mesh(
          lathe(JACKET, 44),
          K.std(0xcbb894, { roughness: 0.95, side: THREE.DoubleSide }),
        );
        jacket.castShadow = true;
        flask.add(jacket);
        for (const y of [0.09, 0.22, 0.33]) {
          const band = new THREE.Mesh(new THREE.TorusGeometry(0.244, 0.008, 6, 36), K.mat.cream());
          band.rotation.x = Math.PI / 2;
          band.position.y = y;
          flask.add(band);
        }
      }

      // струйка пара над горлышком
      const steam = K.steam(0.82 * SC);
      steam.group.position.set(x, TABLE_H + (FLASK_Y + 0.6) * SC, 0);
      g.add(steam.group);

      // всегда видимая температурная плашка над колбой
      const tip = K.dynamicChip(0.14 * SC);
      tip.sprite.position.set(x * 1.55, TABLE_H + (FLASK_Y + 0.82) * SC + (insulated ? 0.06 : 0), 0);
      g.add(tip.sprite);

      g.add(grp);
      return {
        grp,
        burner,
        flask,
        fl,
        water,
        col,
        tip,
        steam,
        name: insulated ? 'Изолированная' : 'Открытая',
        m: M_WATER,
        T: T_ROOM,
        qIn: 0,
        qLoss: 0,
        evaporated: 0,
        boilAt: null,
      };
    };

    const open = mkCup(-0.3, false, -1);
    const insu = mkCup(0.3, true, 1);

    api.fit([0.1, 0.32, 1], [0, TABLE_H + 0.12, 0]);

    // ── состояние ──
    let P = p0;
    let heating = false; // обе горелки включаются/выключаются вместе
    let time = 0;
    let heatTime = 0; // суммарное время с включёнными горелками, с

    const flameScale = () => 0.24 + (P / 1000) * 0.14;

    const setFlames = () => {
      const s = heating ? flameScale() : 0;
      open.fl.group.visible = heating;
      insu.fl.group.visible = heating;
      open.fl.setScale(s);
      insu.fl.setScale(s);
    };
    setFlames();

    const toggle = () => {
      heating = !heating;
      setFlames();
      api.toast(
        heating
          ? 'Обе горелки горят. Сравните температуры и дождитесь кипения'
          : 'Горелки погашены. Вода остывает',
      );
    };
    api.clickable(open.burner, toggle);
    api.clickable(insu.burner, toggle);

    const tipText = (c: Cup) => {
      const state = c.T >= T_BOIL - 0.05 ? ' · кипит' : '';
      return `${c.name} · ${K.fmt(c.T, 1)} °C${state}`;
    };

    // один шаг интегрирования: нагрев, потери, кипение и испарение
    const stepCup = (c: Cup, dt: number) => {
      const loss = (c.T - T_ROOM) * (c === open ? K_OPEN : K_INSULATED) * dt;
      c.qLoss += loss;
      let net = (heating ? P * dt : 0) - loss;
      if (heating) c.qIn += P * dt;

      // при 100 °C избыток энергии уходит на парообразование
      if (c.T >= T_BOIL - 1e-6 && net > 0) {
        if (c.boilAt === null) c.boilAt = heatTime;
        const dm = net / L_VAPOR;
        c.m = Math.max(c.m - dm, 0.02);
        c.evaporated += dm;
        c.T = T_BOIL;
        return;
      }
      c.T += net / (c.m * CWATER);
      if (c.T > T_BOIL) {
        if (c.boilAt === null) c.boilAt = heatTime;
        const excess = (c.T - T_BOIL) * c.m * CWATER;
        const dm = excess / L_VAPOR;
        c.m = Math.max(c.m - dm, 0.02);
        c.evaporated += dm;
        c.T = T_BOIL;
      }
      if (c.T < T_ROOM) c.T = T_ROOM;
    };

    const applyVisual = (c: Cup) => {
      // уровень воды опускается по мере испарения
      c.water.scale.y = Math.max(c.m / M_WATER, 0.12);
      // столбик термометра: шкала 0…110 °C на длине 0,5 м
      c.col.scale.y = Math.max(Math.min(c.T / 110, 1) * 0.5, 0.001);
      c.tip.set(tipText(c));
      c.steam.on = c.T >= T_BOIL - 0.2 && c.m > 0.03;
    };

    api.toast('Нажми на спиртовку — зажгутся обе горелки; нажми ещё раз, чтобы погасить');

    return {
      setParam(v) {
        P = v;
        setFlames();
      },
      tick(dt, t) {
        time = t;
        // устойчивый шаг при ускоренном времени
        const dtSim = dt * T_SIM;
        if (heating) heatTime += dtSim;
        const n = Math.max(1, Math.ceil(dtSim / 0.2));
        for (let i = 0; i < n; i++) {
          stepCup(open, dtSim / n);
          stepCup(insu, dtSim / n);
        }
        applyVisual(open);
        applyVisual(insu);
        open.fl.tick(time);
        insu.fl.tick(time);
        open.steam.tick(dt);
        insu.steam.tick(dt);

        api.readouts([
          { label: 'Q подведено', value: `${K.fmt(open.qIn, 0)} Дж` },
          { label: 'T открытая', value: `${K.fmt(open.T, 1)} °C` },
          { label: 'T изолированная', value: `${K.fmt(insu.T, 1)} °C` },
          { label: 'ΔT', value: `${K.fmt(insu.T - open.T, 1)} °C` },
          { label: 'Закипела', value: `${open.boilAt === null ? '—' : K.fmt(open.boilAt, 0)} / ${insu.boilAt === null ? '—' : K.fmt(insu.boilAt, 0)} с` },
          { label: 'Испарилось', value: `${K.fmt(open.evaporated * 1000, 0)} / ${K.fmt(insu.evaporated * 1000, 0)} г` },
        ]);
      },
    };
  },
};
