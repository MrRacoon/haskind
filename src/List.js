import { _notUndefined, error, _lazy, _curry } from './util'
import type from 'type-of'

// Basic functions

export const head: Function =
  (ls: any[]): any =>
    _notUndefined(ls[0], _lazy(error, ['List.head: empty list']))

export const last: Function =
  (ls: any[]): any =>
    _notUndefined(ls.slice(-1)[0], _lazy(error, ['List.last: empty list']))
    // ^ I'm no longer a fan of this.
    //   just write it out.

export const tail: Function =
  ([, ...xs]): any[] => xs

export const init: Function =
  (ls: any[]): any[] => {
    if (!ls.length) error('List.init: empty list')
    return ls.slice(0, -1)
  }

const _lengthArray : Function =
  (ls: any[]) => ls.length

const _lengthObject: Function =
  (ls: {}): number => Object.keys(ls).length

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
  (ls: any[] | string): any[] | string => {
    switch (type(ls)) {
    case 'string':
      return reverse(ls.split('')).join('')
    case 'array':
      return ls.reduce((acc, x) => [x].concat(acc), [])
    default:
      return ls
    }
  }

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

// Scans

// Accumulating maps

// Unfolding

// Extracting sublists

// take :: Int -> [a] -> [a]
export const take = undefined

// drop :: Int -> [a] -> [a]
export const drop = undefined

// splitAt :: Int -> [a] -> ([a], [a])
export const splitAt = undefined

// takeWhile :: (a -> Bool) -> [a] -> [a]
export const takeWhile = undefined

// dropWhile :: (a -> Bool) -> [a] -> [a]
export const dropWhile = undefined

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
export const dropWhileEnd = undefined

// span :: (a -> Bool) -> [a] -> ([a], [a])
export const span = undefined

// break :: (a -> Bool) -> [a] -> ([a], [a])
export const break_ = undefined

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
export const stripPrefix = undefined

// group :: Eq a => [a] -> [[a]]
export const group = undefined

// inits :: [a] -> [[a]]
export const inits = undefined

// tails :: [a] -> [[a]]
export const tails = undefined

// Predicates

// isPrefixOf :: Eq a => [a] -> [a] -> Bool
export const isPrefixOf = undefined

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
export const isSuffixOf = undefined

// isInfixOf :: Eq a => [a] -> [a] -> Bool
export const isInfixOf = undefined

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
export const isSubsequenceOf = undefined

// Searching by equality

export const elem: Function = _curry(
  (x: any, xs: any[]): boolean => xs.indexOf(x) !== -1
)

export const notElem: Function = _curry(
  (x: any, xs: any[]): boolean => xs.indexOf(x) === -1
)

// Searching with a predicate

export const filter: Function = _curry(
  (fn: Function, ls: any[]): any[] => ls.filter(fn)
)

// Indexing lists

// (!!) :: [a] -> Int -> a
// elemIndex :: Eq a => a -> [a] -> Maybe Int
// elemIndices :: Eq a => a -> [a] -> [Int]
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
// findIndices :: (a -> Bool) -> [a] -> [Int]

// Zipping and unzipping lists

// zip :: [a] -> [b] -> [(a, b)]
export const zip = undefined
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
// zip5 :: [a] -> [b] -> [c] -> [d] -> [e] -> [(a, b, c, d, e)]
// zip6 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [(a, b, c, d, e, f)]
// zip7 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [(a, b, c, d, e, f, g)]
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
// zipWith5 :: (a -> b -> c -> d -> e -> f) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f]
// zipWith6 :: (a -> b -> c -> d -> e -> f -> g) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g]
// zipWith7 :: (a -> b -> c -> d -> e -> f -> g -> h) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [h]

// unzip :: [(a, b)] -> ([a], [b])
export const unzip = undefined
// unzip3 :: [(a, b, c)] -> ([a], [b], [c])
// unzip4 :: [(a, b, c, d)] -> ([a], [b], [c], [d])
// unzip5 :: [(a, b, c, d, e)] -> ([a], [b], [c], [d], [e])
// unzip6 :: [(a, b, c, d, e, f)] -> ([a], [b], [c], [d], [e], [f])
// unzip7 :: [(a, b, c, d, e, f, g)] -> ([a], [b], [c], [d], [e], [f], [g])

// Functions on strings

// lines :: String -> [String]
export const lines = undefined

// words :: String -> [String]
export const words = undefined

// unlines :: [String] -> String
export const unlines = undefined

// unwords :: [String] -> String
export const unwords = undefined

// "Set" operations

// nub :: Eq a => [a] -> [a]
export const nub = undefined

// delete_ :: Eq a => a -> [a] -> [a]
export const delete_ = undefined

// difference :: Eq a => [a] -> [a] -> [a]
export const difference = undefined

// union :: Eq a => [a] -> [a] -> [a]
export const union = undefined

// intersect :: Eq a => [a] -> [a] -> [a]
export const intersect = undefined

// Ordered lists

// sort :: Ord a => [a] -> [a]
// export const sort = undefined

// sortOn :: Ord b => (a -> b) -> [a] -> [a]
// export const sortOn = undefined

// insert :: Ord a => a -> [a] -> [a]
// export const insert = undefined

// The "By" Operations

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]

// User-supplied comparison

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
// maximumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
// minimumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
