import { _curry, error } from '../util';

// range :: (a, a) -> [a]
export const range = ([a: number, b: number]): number[] =>
  [...Array(b-a).keys()].map(x => x + a);

// inRange :: (a, a) -> a -> Bool
export const inRange = _curry(
  ([a: number, b: number], i: number): boolean =>
    a <= i && i <= b
);

// index :: (a, a) -> a -> Int
export const index = _curry(
  ([a: number, b: number], i: number): number =>
    inRange([a,b], i)
      ? i - a
      : error('Ix.index: index out of range')
);

// rangeSize :: (a, a) -> Int
export const rangeSize =
  ([a: number, b: number]): number =>
    b - a;
