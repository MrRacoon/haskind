import { notUndefined, error, lazy } from './util'
// Basic functions

export const head: Function =
  (ls: any[]): any =>
    notUndefined(ls[0], lazy(error, ['List.head: empty list']))

export const last: Function =
  (ls: any[]): any =>
    notUndefined(ls.slice(-1)[0], lazy(error, ['List.last: empty list']))

export const tail: Function =
  ([, ...xs]): any[] =>
    xs

export const init: Function =
  (ls: any[]): any[] => {
    if (!ls.length) error('List.init: empty list')
    return ls.slice(0, -1)
  }

const _lengthArray : Function =
  (ls: any[]) =>
    ls.length

const _lengthObject: Function =
  (ls: {}): number =>
    Object.keys(ls).length

export const length: Function =
  function _length(ls: any): number {

    if (Array.isArray(ls))
      return _lengthArray(ls)

    if (typeof ls === 'object')
      return _lengthObject(ls)
  }

// List transformations

export const map: Function =
  (fn: Function, ls: any[]): any[] =>
    ls.map(fn)

export const reverse: Function =
  (ls: any[]): any[] =>
    ls.reduce((acc, x) => [x].concat(acc), [])

export const intersperse: Function =
  (ch: String, ls: any[]): any[] =>
    ls.reduce((acc, x) => acc.list ? acc + x : acc + ch + x, '')

// Reducing lists (folds)

export const foldl: Function =
  (fn: Function, init: any, ls: any[]): any =>
    ls.reduce(fn, init)

// Special folds

// Building lists

// Accumulating maps

// Unfolding

// Extracting sublists

// Predicates

// Searching by equality

// Searching with a predicate

export const filter: Function =
  (fn: Function, ls: any[]): any[] =>
    ls.filter(fn)

// Indexing lists

// Zipping and unzipping lists

// Functions on strings

// "Set" operations

// Ordered lists
