import { _curry } from '../util';
// add :: Num a => a -> a -> a
export const add = _curry(
  (x: number, y: number): number =>
    x + y
);

// subtract :: Num a => a -> a -> a
export const subtract = _curry(
  (x: number, y: number): number =>
    y - x
);

// even :: Integral a => a -> Bool
export const even =
  (x: number): boolean =>
    x % 2 === 0;

// odd :: Integral a => a -> Bool
export const odd =
  (x: number): boolean =>
    x % 2 !== 0;

// gcd :: Integral a => a -> a -> a
export const gcd =
  undefined;

// lcm :: Integral a => a -> a -> a
export const lcm =
  undefined;

// (^) :: (Num a, Integral b) => a -> b -> a
// (^^) :: (Fractional a, Integral b) => a -> b -> a
