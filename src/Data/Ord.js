
import { _curry } from '../util';

export const LT = -1;
export const EQ = 0;
export const GT = 1;

export const Ordering = { LT, EQ, GT };

// compare :: a -> a -> Ordering
export const compare = _curry((a,b) => a < b ? LT : a === b ? EQ : GT);

// (<) :: a -> a -> Bool
export const lt = _curry((a, b) => a < b);

// (<=) :: a -> a -> Bool
export const le = _curry((a,b) => a <= b);

// (>) :: a -> a -> Bool
export const gt = _curry((a,b) => a > b);

// (>=) :: a -> a -> Bool
export const ge = _curry((a,b) => a >= b);

// max :: a -> a -> a
export const max = _curry((a,b) => a < b ? b : a);

// min :: a -> a -> a
export const min = _curry((a,b) => a < b ? a : b);

// comparing :: Ord a => (b -> a) -> b -> b -> Ordering
export const comparing = _curry((fn, a, b) => compare(fn(a), fn(b)));
