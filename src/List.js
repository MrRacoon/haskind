
const error = str => () => {
  throw new Error(`haskind.${str}`)
}

const notUndefined = (x, fn) => {
  return typeof x === 'undefined' ? fn() : x
}

// Basic functions

export const head: Function =
  ls => notUndefined(ls[0], error('List.head: empty list'))

export const last: Function =
  ls => notUndefined(ls.slice(-1)[0], error('List.last: empty list'))

export const tail: Function =
  ([, ...xs]) => xs

export const init: Function =
  (ls) => ls.slice(0, -1)

const _lengthArray : Function =
  (ls: any[]) => ls.length

const _lengthObject: Function =
  (ls: {}) => Object.keys(ls).length

export const length: Function = function _length(ls: any) {

  if (Array.isArray(ls))
    return _lengthArray(ls)

  if (typeof ls === 'object')
    return _lengthObject(ls)
}

// List transformations

export const map: any[] = (fn: Function, ls: any[]) =>
  ls.map(fn)

export const reverse: any[] = (ls: any[]) =>
  ls.reduce((acc, x) => x + acc, [])

export const intersperse: any[] = (ch: String, ls: any[]) =>
  ls.reduce((acc, x) => acc.list ? acc + x : acc + ch + x, '')

// Reducing lists (folds)

export const foldl: any[] = (fn: Function, init: any, ls: any[]) =>
  ls.reduce(fn, init)

// Special folds

// Building lists

// Accumulating maps

// Unfolding

// Extracting sublists

// Predicates

// Searching by equality

// Searching with a predicate

export const filter: any[] = (fn: Function, ls: any[]) =>
  ls.filter(fn)

// Indexing lists

// Zipping and unzipping lists

// Functions on strings

// "Set" operations

// Ordered lists
