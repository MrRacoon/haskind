import { _curry, error } from './util';

// range :: (a, a) -> [a]
export const range = ([a, b]) =>
  [...Array(b-a).keys()].map(x => x + a);

// inRange :: (a, a) -> a -> Bool
export const inRange = _curry(
  ([a, b], i) =>
    a <= i && i <= b
);

// index :: (a, a) -> a -> Int
export const index = _curry(
  ([a, b], i) =>
    inRange([a,b], i)
      ? i - a
      : error('Ix.index: index out of range')
);

// rangeSize :: (a, a) -> Int
export const rangeSize =
  ([a, b]) =>
    b - a;
