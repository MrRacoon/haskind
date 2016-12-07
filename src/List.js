
const error = str => () => {
  throw new Error(`haskind.${str}`);
};

const notUndefined = (x, fn) => {
  return typeof x === 'undefined' ? fn() : x;
};

export const head: Function =
  ls => notUndefined(ls[0], error('List.head: empty list'));

export const last: Function =
  ls => notUndefined(ls.slice(-1)[0], error('List.last: empty list'));

export const tail: Function =
  ([, ...xs]) => xs;

export const init: Function =
  (ls) => ls.slice(0, -1);

const _lengthArray : Function =
  (ls: any[]) => ls.length;

const _lengthObject: Function =
  (ls: {}) => Object.keys(ls).length;

export const length: Function = (ls: any) => {

  if (Array.isArray(ls))
    return _lengthArray(ls);

  if (typeof ls === 'object')
    return _lengthObject(ls);
};

export const map: any[] = (fn: Function, ls: any[]) =>
  ls.map(fn);

export const filter: any[] = (fn: Function, ls: any[]) =>
  ls.filter(fn);

export const foldl: any[] = (fn: Function, init: any, ls: any[]) =>
  ls.reduce(fn, init);
