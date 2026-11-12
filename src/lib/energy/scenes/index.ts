// Реестр сцен опытов.
import type { Experiment } from '../engine';
import { ch01 } from './ch01';
import { ch02 } from './ch02';
import { ch03 } from './ch03';
import { ch04 } from './ch04';
import { ch05 } from './ch05';
import { ch06 } from './ch06';
import { ch07 } from './ch07';
import { ch08 } from './ch08';
import { ch09 } from './ch09';
import { ch10 } from './ch10';

export const SCENES: Record<number, Experiment> = {
  1: ch01,
  2: ch02,
  3: ch03,
  4: ch04,
  5: ch05,
  6: ch06,
  7: ch07,
  8: ch08,
  9: ch09,
  10: ch10,
};
