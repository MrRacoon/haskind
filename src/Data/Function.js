import { _curry } from '../util';

// id :: a -> a
export const id = x => x;

// const_ :: a -> b -> a
export const const_ = _curry((a, b) => a); // eslint-disable-line

// pipe :: [(a -> b)] -> [a] -> b
export const pipe = _curry(
  (fns, args) => {
    for (let fn of fns)
      args = [fn.apply(null, args)];
    return args[0];
  }
);

// comp :: [(a -> *)] -> a -> *
export const comp = _curry(
  (fns, args) =>
    pipe(fns.reverse(), args)
);

// (.) | compose :: (b -> c) -> (a -> b) -> a -> c
export const compose = _curry(
  (...fns) =>
    (...args) =>
      pipe(fns.reverse(), args)
);

// flip :: (a -> b -> c) -> b -> a -> c
export const flip = _curry(
  (f, a, b) =>
    f(b, a)
);

// (&) | apply :: a -> (a -> b) -> b
export const apply = _curry((arg, fn) => fn(arg));

// fix :: (a -> a) -> a
export const fix = undefined;

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
export const on = _curry((g, f, a, b) => g(f(a), f(b)));
