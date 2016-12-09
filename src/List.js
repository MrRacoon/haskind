import { _notUndefined, error, _lazy, _curry } from './util'
import type from 'type-of'
// Basic functions

export const head: Function =
  (ls: any[]): any =>
    _notUndefined(ls[0], _lazy(error, ['List.head: empty list']))

export const last: Function =
  (ls: any[]): any =>
    _notUndefined(ls.slice(-1)[0], _lazy(error, ['List.last: empty list']))

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

export const map: Function = _curry(
  (fn: Function, ls: any[]): any[] =>
    ls.map(fn)
)

export const reverse: Function =
  (ls: any[]): any[] => ls.reduce((acc, x) => [x].concat(acc), [])

export type strOrList = (string | any[])

export const intersperse: Function = _curry(
  (ch: any, ls: strOrList): strOrList => {
    switch (type(ls)) {

    case 'array':
      return ls.reduce((acc, x) => {
        return acc.length ? acc.concat([ch, x]) : [x]
      }, [] )

    case 'string':
      return ls.split('').reduce((acc, x) => {
        return acc.length ? acc + ch + x : acc + x
      }, '' )

    default:
      error('List.interpserse: requires array or string, got: ' + type(ls))
    }
  }
)

// Reducing lists (folds)

export const foldl: Function = _curry(
  (fn: Function, init: any, ls: any[]): any =>
    ls.reduce(fn, init)
)

// Special folds

export const concat: Function =
  (ls: any[][]): any[] =>
    ls.reduce((acc, x) => acc.concat(x), [])

export const and: Function =
  (ls: any[]): boolean =>
    ls.reduce((acc, x) => acc && x, true)

export const or: Function =
  (ls: any[]): boolean =>
    ls.reduce((acc, x) => acc || x, false)

export const any: Function = _curry(
  (fn: Function, ls: any[]): boolean =>
    ls.reduce((acc, x) => acc || !!fn(x), false)
)

export const all: Function = _curry(
  (fn: Function, ls: any[]): boolean =>
    ls.reduce((acc, x) => acc && !!fn(x), true)
)

export const sum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc + x, 0)

export const product: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc * x, 1)

export const maximum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc <= x ? x : acc, -Infinity)

export const minimum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => x <= acc ? x : acc, Infinity)

// Building lists

// Accumulating maps

// Unfolding

// Extracting sublists

// Predicates

// Searching by equality

export const elem: Function = _curry(
  (x: any, xs: any[]): boolean =>
    xs.indexOf(x) !== -1
)

export const notElem: Function = _curry(
  (x: any, xs: any[]): boolean =>
    xs.indexOf(x) === -1
)

// Searching with a predicate

export const filter: Function = _curry(
  (fn: Function, ls: any[]): any[] =>
    ls.filter(fn)
)

// Indexing lists

// Zipping and unzipping lists

// Functions on strings

// "Set" operations

// Ordered lists
