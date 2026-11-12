// Опыт 6. Мощность: два одинаковых груза поднимаются на одну высоту.
// Мотор A делает работу за 5 с, мотор B — за 10 с. Кнопку мотора держат
// мышкой; отпустили — тормоз удерживает груз. Верёвка прикреплена к грузу.
import * as THREE from 'three';
import type { Experiment, ExpHandle, SceneAPI } from '../engine';
import * as K from '../kit';

const G = 9.8;
const H = 2.4; // высота подъёма, м
const T_A = 5; // с
const T_B = 10; // с
const POST_H = 3.2;

/** тонкий цилиндр между двумя точками */
function rod(a: THREE.Vector3, b: THREE.Vector3, r: number, material: THREE.Material) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 8), material);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  return mesh;
}

export const ch06: Experiment = {
  build(api: SceneAPI, m0: number): ExpHandle {
    const g = new THREE.Group();
    api.scene.add(g);

    g.add(K.box(6.6, 0.16, 1.7, K.mat.wood(), 0, 0, 0)); // общий фундамент

    type Crane = {
      grp: THREE.Group;
      drumSpin: THREE.Group;
      rope: THREE.Mesh;
      crate: THREE.Group;
      button: THREE.Group;
      massTip: ReturnType<typeof K.dynamicChip>;
      time: number;
      h: number;
      elapsed: number;
      on: boolean;
      noted: boolean;
      scale: number;
    };

    const mkCrane = (x: number, color: number, name: string, time: number): Crane => {
      const grp = new THREE.Group();
      grp.position.set(x, 0.16, 0);

      const frameMat = K.std(color, { roughness: 0.45, metalness: 0.7 });
      // стойки, верхняя балка и раскосы от подошв к стойкам
      grp.add(K.box(0.14, POST_H, 0.14, frameMat, -0.5, 0, 0));
      grp.add(K.box(0.14, POST_H, 0.14, frameMat, 0.5, 0, 0));
      grp.add(K.box(1.24, 0.15, 0.15, frameMat, 0, POST_H, 0));
      for (const sx of [-1, 1]) {
        grp.add(rod(new THREE.Vector3(sx * 0.86, 0.05, 0), new THREE.Vector3(sx * 0.5, 1.15, 0), 0.045, frameMat));
        grp.add(K.box(0.5, 0.08, 0.4, K.mat.graphite(), sx * 0.5, 0, 0));
      }

      // мотор-короб и барабан с намотанной верёвкой
      grp.add(K.box(0.5, 0.42, 0.34, K.mat.graphite(), 0, 0.24, 0.27));
      const drumSpin = new THREE.Group();
      drumSpin.position.set(0, 0.58, 0.27);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.3, 18), K.mat.brass());
      drum.rotation.z = Math.PI / 2;
      drum.castShadow = true;
      drumSpin.add(drum);
      const drumRim = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 6, 22), K.mat.copper());
      drumRim.rotation.y = Math.PI / 2;
      drumRim.position.x = 0.15;
      drumSpin.add(drumRim);
      grp.add(drumSpin);

      // кнопка «пуск» на передней панели мотора
      const button = new THREE.Group();
      button.position.set(0, 0.35, 0.47);
      button.add(K.cyl(0.075, 0.085, 0.045, K.mat.brass(), 0, 0, 0, 16));
      const cap = K.cyl(0.058, 0.062, 0.05, K.std(0xb4432f, { roughness: 0.55 }), 0, 0.035, 0, 16);
      button.add(cap);
      grp.add(button);

      // верхний блок
      const pulley = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.07, 18), K.mat.steel());
      pulley.rotation.x = Math.PI / 2;
      pulley.position.set(0, POST_H - 0.1, 0);
      pulley.castShadow = true;
      grp.add(pulley);

      // неподвижная часть троса: от барабана вверх вдоль стойки, затем к блоку
      const guide = new THREE.Vector3(0.57, 0.72, 0.27);
      grp.add(rod(new THREE.Vector3(0, 0.58, 0.27), guide, 0.012, K.mat.cream()));
      grp.add(rod(guide, new THREE.Vector3(0.57, POST_H - 0.12, 0.02), 0.012, K.mat.cream()));
      grp.add(rod(new THREE.Vector3(0.57, POST_H - 0.12, 0.02), new THREE.Vector3(0, POST_H - 0.1, 0.02), 0.012, K.mat.cream()));
      const guideWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.05, 12), K.mat.steel());
      guideWheel.rotation.x = Math.PI / 2;
      guideWheel.position.copy(guide);
      grp.add(guideWheel);

      // вертикальная часть троса: длина меняется вместе с высотой груза
      const ropeGeo = new THREE.CylinderGeometry(0.014, 0.014, 1, 8);
      ropeGeo.translate(0, -0.5, 0);
      const rope = new THREE.Mesh(ropeGeo, K.mat.cream());
      rope.position.set(0, POST_H - 0.1, 0);
      rope.castShadow = true;
      grp.add(rope);

      // ящик с рым-болтом на крышке
      const crate = new THREE.Group();
      crate.add(K.box(0.62, 0.5, 0.56, K.mat.woodLight()));
      crate.add(K.box(0.64, 0.06, 0.58, K.mat.woodDark(), 0, 0.44, 0));
      const eye = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 20), K.mat.brass());
      eye.rotation.x = Math.PI / 2;
      eye.position.y = 0.52;
      crate.add(eye);
      grp.add(crate);

      // подпись мотора и масса груза
      const lbl = K.chipSprite(name, 0.34);
      lbl.position.set(0, POST_H + 0.5, 0);
      grp.add(lbl);
      const massTip = K.dynamicChip(0.3);
      massTip.sprite.position.set(0, 1.0, 0.1);
      grp.add(massTip.sprite);

      g.add(grp);
      return {
        grp,
        drumSpin,
        rope,
        crate,
        button,
        massTip,
        time,
        h: 0,
        elapsed: 0,
        on: false,
        noted: false,
        scale: 1,
      };
    };

    const A = mkCrane(-1.6, K.C.brass, 'Мотор A — 5 с', T_A);
    const B = mkCrane(1.6, K.C.copper, 'Мотор B — 10 с', T_B);

    const layoutCrate = (c: Crane) => {
      c.crate.position.y = c.h;
      // верх ящика: h + 0.5·scale; трос должен заканчиваться ровно на рым-болте
      const top = c.h + 0.52 * c.scale;
      c.rope.scale.y = Math.max(POST_H - 0.1 - top, 0.02);
      c.massTip.sprite.position.y = c.h + 0.52 * c.scale + 0.28;
    };

    let m = m0;
    const layoutScale = () => {
      const s = 0.84 + (m / 100) * 0.34;
      for (const c of [A, B]) {
        c.scale = s;
        c.crate.scale.setScalar(s);
        c.massTip.set(`${K.fmt(m, 0)} кг`);
        layoutCrate(c);
      }
    };
    layoutScale();

    api.fit([0.16, 0.4, 1], [0, 1.6, 0]);

    // ── управление: держать кнопку мотора; ящик можно опустить рукой ──
    for (const c of [A, B]) {
      api.draggable(c.button, {
        onStart() {
          c.on = true;
        },
        onEnd() {
          c.on = false;
        },
        onClick() {
          api.caption(
            c === A ? 'Держи кнопку: мотор A поднимает груз за 5 с' : 'Держи кнопку: мотор B поднимает груз за 10 с',
            new THREE.Vector3(c.grp.position.x, 4.1, 0),
          );
        },
      });
      api.draggable(c.crate, {
        onStart() {
          c.on = false;
          c.elapsed = 0;
          c.noted = false;
        },
        onMove(_p, delta) {
          c.h = THREE.MathUtils.clamp(c.h + delta.y, 0, H);
          layoutCrate(c);
        },
        onEnd() {
          // ручное перемещение сбрасывает секундомер мотора
          c.elapsed = 0;
          c.noted = false;
        },
      });
    }

    api.toast('Держи красную кнопку мотора — груз поднимается; отпустишь — тормоз удержит его');

    return {
      setParam(v) {
        m = v;
        layoutScale();
        for (const c of [A, B]) c.massTip.set(`${K.fmt(m, 0)} кг`);
      },
      tick(dt) {
        for (const c of [A, B]) {
          if (c.on && c.h < H) {
            const v = H / c.time;
            const dh = Math.min(v * dt, H - c.h);
            c.h += dh;
            c.elapsed += dh / v;
            c.drumSpin.rotation.x -= dh / 0.13;
            layoutCrate(c);
            if (c.h >= H - 1e-6 && !c.noted) {
              c.noted = true;
              api.caption(
                `${c === A ? 'Мотор A' : 'Мотор B'} закончил: t = ${K.fmt(c.elapsed, 1)} с`,
                new THREE.Vector3(c.grp.position.x, 4.1, 0),
              );
            }
          }
        }
        const W = m * G * H;
        api.readouts([
          { label: 'W = mgh', value: `${K.fmt(W, 0)} Дж` },
          { label: 't A', value: `${K.fmt(A.elapsed, 1)} с` },
          { label: 't B', value: `${K.fmt(B.elapsed, 1)} с` },
          { label: 'P A', value: `${K.fmt(W / T_A, 0)} Вт` },
          { label: 'P B', value: `${K.fmt(W / T_B, 0)} Вт` },
        ]);
      },
    };
  },
};
