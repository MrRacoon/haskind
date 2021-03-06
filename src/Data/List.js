import { type, error, _curry } from '../util';
import { Just, Nothing } from './Maybe';

// Basic functions

// (++) :: [a] -> [a] -> [a]
export const append = _curry(
  (as: Iterable, bs: Iterable): Iterable => as.concat(bs)
);

// head :: [a] -> a
export const head: Function =
  (xs: any[]): any => {
    let x = xs[0];
    return x ? x : error('List.head: empty list');
  };

// last :: [a] -> a
export const last: Function =
  (xs: any[]): any => {
    let x = xs.slice(-1)[0];
    return x ? x : error('List.last: empty list');
  };

// tail :: [a] -> [a]
export const tail: Function =
  ([, ...xs]): any[] => xs;

// init :: [a] -> [a]
export const init: Function =
  (ls: any[]): any[] => {
    if (!ls.length) error('List.init: empty list');
    return ls.slice(0, -1);
  };

// uncons :: [a] -> Maybe (a, [a])
export const uncons = xs =>
  xs.length > 0
    ? Just([head(xs), tail(xs)])
    : Nothing();

// null :: Foldable t => t a -> Bool
export const null_ = xs =>
  xs.length === 0;

// length :: Foldable t => t a -> Int
export const length: Function =
  function _length(ls: any): (number | void) {
    switch (type(ls)) {
      case 'Object': return Object.keys(ls).length;
      case 'Array' : return ls.length;
      default      : return undefined;
    }
  };

// List transformations

// map :: (a -> b) -> [a] -> [b]
export const map: Function = _curry(
  (fn: Function, ls: any[]): any[] =>
    ls.map(fn)
);

// reverse :: [a] -> [a]
export const reverse: Function =
  (ls: any[] | string): any[] | string => {
    switch (type(ls)) {
      case 'String':
        return reverse(ls.split('')).join('');
      case 'Array':
        return ls.reduce((acc, x) => [x].concat(acc), []);
      default:
        return ls;
    }
  };

export type strOrList = (string | any[])

// intersperse :: a -> [a] -> [a]
export const intersperse: Function = _curry(
  (ch: any, ls: strOrList): strOrList => {
    switch (type(ls)) {

      case 'Array':
        return ls.reduce((acc, x) => {
          return acc.length ? acc.concat([ch, x]) : [x];
        }, [] );

      case 'String':
        return ls.split('').reduce((acc, x) => {
          return acc.length ? acc + ch + x : acc + x;
        }, '' );

      default:
        error('List.interpserse: requires array or string, got: ' + type(ls));
    }
  }
);

// Reducing lists (folds)

// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
export const foldl: Function = _curry(
  (fn: Function, init: any, ls: any[]): any =>
    ls.reduce(fn, init)
);

// foldl' :: Foldable t => (b -> a -> b) -> b -> t a -> b
export const foldl_ = undefined;

// foldl1 :: Foldable t => (a -> a -> a) -> t a -> a
export const foldl1 = undefined;

// foldl1' :: (a -> a -> a) -> [a] -> a
export const foldl1_ = undefined;

// foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
export const foldr = undefined;

// foldr1 :: Foldable t => (a -> a -> a) -> t a -> a
export const foldr1 = undefined;

// Special folds

// concat :: Foldable t => t [a] -> [a]
export const concat: Function =
  (ls: any[][]): any[] =>
    ls.reduce((acc, x) => acc.concat(x), []);

// concatMap :: Foldable t => (a -> [b]) -> t a -> [b]
export const concatMap = _curry(
  (fn: Function, xs: any[]): any[] => {
    let res = [];
    for (let x of xs) { res = res.concat(fn(x)); }
    return res;
  }
);

// and :: Foldable t => t Bool -> Bool
export const and: Function =
  (ls: any[]): boolean =>
    ls.reduce((acc, x) => acc && x, true);

// or :: Foldable t => t Bool -> Bool
export const or: Function =
  (ls: any[]): boolean =>
    ls.reduce((acc, x) => acc || x, false);

// any :: Foldable t => (a -> Bool) -> t a -> Bool
export const any: Function = _curry(
  (fn: Function, ls: any[]): boolean =>
    ls.reduce((acc, x) => acc || !!fn(x), false)
);

// all :: Foldable t => (a -> Bool) -> t a -> Bool
export const all: Function = _curry(
  (fn: Function, ls: any[]): boolean =>
    ls.reduce((acc, x) => acc && !!fn(x), true)
);

// sum :: (Foldable t, Num a) => t a -> a
export const sum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc + x, 0);

// product :: (Foldable t, Num a) => t a -> a
export const product: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc * x, 1);

// maximum :: forall a. (Foldable t, Ord a) => t a -> a
export const maximum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => acc <= x ? x : acc, -Infinity);

// minimum :: forall a. (Foldable t, Ord a) => t a -> a
export const minimum: Function =
  (ls: number[]): number =>
    ls.reduce((acc, x) => x <= acc ? x : acc, Infinity);

// Scans

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
// scanl' :: (b -> a -> b) -> b -> [a] -> [b]
// scanl1 :: (a -> a -> a) -> [a] -> [a]
// scanr :: (a -> b -> b) -> b -> [a] -> [b]
// scanr1 :: (a -> a -> a) -> [a] -> [a]

// Accumulating maps

// mapAccumL :: Traversable t => (a -> b -> (a, c)) -> a -> t b -> (a, t c)
// mapAccumR :: Traversable t => (a -> b -> (a, c)) -> a -> t b -> (a, t c)

// Infinite Lists

// iterate :: (a -> a) -> a -> [a]
// repeat :: a -> [a]
// replicate :: Int -> a -> [a]
// cycle :: [a] -> [a]

// Unfolding

// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]

// Extracting sublists

// take :: Int -> [a] -> [a]
export const take = _curry((n: number, xs: any[]): any[] =>
  n < 0 ? [] : xs.slice(0, n)
);

// drop :: Int -> [a] -> [a]
export const drop = _curry((n: number, xs: any[]): any[] =>
  n < 0 ? xs : xs.filter((x, i) => i >= n)
);

// splitAt :: Int -> [a] -> ([a], [a])
export const splitAt =
  (idx, xs) => {
    let as = [];
    let bs = [];
    xs.forEach((x, i) => {
      if (i < idx) as.push(x);
      else bs.push(x);
    });
    return [as, bs];
  };

// splitOn :: a -> [a] -> [[a]]
export const splitOn = _curry(
  (x, xs) => {
    switch (type(xs)) {
      case 'String':
      case 'Array':
        return xs.split(x);
      default: return undefined;
    }
  }
);

// takeWhile :: (a -> Bool) -> [a] -> [a]
export const takeWhile = _curry(
  (pred, xs) => {
    let res = [];
    for (let x of xs) {
      if (pred(x)) res.push(x);
      else break;
    }
    return res;
  }
);

// dropWhile :: (a -> Bool) -> [a] -> [a]
export const dropWhile = _curry(
  (pred, xs) => {
    let res = [];
    let acc = true;
    for (let x of xs) {
      acc = acc && pred(x);
      if (acc) continue;
      else res.push(x);
    }
    return res;
  }
);

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
export const dropWhileEnd = _curry(
  (pred: Function, xs: any[]): any[] =>
    reverse(dropWhile(pred, reverse(xs)))
);

// span :: (a -> Bool) -> [a] -> ([a], [a])
export const span = _curry(
  (fn, xs) => {
    let f = [];
    let s = [];
    let bl = true;
    for (let x of xs) {
      if ((bl = bl && fn(x))) {
        f.push(x);
      } else {
        s.push(x);
      }
    }
    return [f, s];
  }
);

// break_ :: (a -> Bool) -> [a] -> ([a], [a])
export const break_ = _curry(
  (fn, xs) => {
    let f = [];
    let s = [];
    let bl = false;
    for (let x of xs) {
      if ((bl = bl || fn(x))) {
        s.push(x);
      } else {
        f.push(x);
      }
    }
    return [f, s];
  }
);

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
export const stripPrefix = undefined;

// group :: Eq a => [a] -> [[a]]
export const group = undefined;

// inits :: [a] -> [[a]]
export const inits = undefined;

// tails :: [a] -> [[a]]
export const tails = undefined;

// Predicates

// isPrefixOf :: Eq a => [a] -> [a] -> Bool
export const isPrefixOf = undefined;

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
export const isSuffixOf = undefined;

// isInfixOf :: Eq a => [a] -> [a] -> Bool
export const isInfixOf = undefined;

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
export const isSubsequenceOf = undefined;

// Searching by equality

export const elem: Function = _curry(
  (x: any, xs: any[]): boolean => xs.indexOf(x) !== -1
);

export const notElem: Function = _curry(
  (x: any, xs: any[]): boolean => xs.indexOf(x) === -1
);

// Searching with a predicate

export const filter: Function = _curry(
  (fn: Function, ls: any[]): any[] => ls.filter(fn)
);

// partition :: (a -> Bool) -> [a] -> ([a], [a])
export const partition: Function = _curry(
  (pred: Function, xs: any[]): any[] => {
    let as = [];
    let bs = [];
    xs.forEach((x) => {
      if (pred(x)) {
        as.push(x);
      } else {
        bs.push(x);
      }
    });
    return [as, bs];
  }
);

// Indexing lists

// (!!) :: [a] -> Int -> a
export const index: Function = _curry(
  (ls: any[], i: number): any => {
    if (i >= ls.length) {
      return error('List.index: index too large');
    }
    if (i < 0) {
      return error('List.index: negative index');
    }
    return ls[i];
  }
);

// elemIndex :: Eq a => a -> [a] -> Maybe Int
export const elemIndex: Function = _curry(
  (l: any, ls: any[]) => {
    const length = ls.length;
    for (let i = 0; i < length; i+=1) {
      if (l === ls[i]) {
        return { just: i };
      }
    }
    return { nothing: null };
  }
);

// elemIndices :: Eq a => a -> [a] -> [Int]
export const elemIndices: Function = _curry(
  (x, xs): number[] => {
    const ys = [];
    xs.forEach((y, i) => y === x && ys.push(i));
    return ys;
  }
);

// findIndex :: (a -> Bool) -> [a] -> Maybe Int
export const findIndex: Function = _curry(
  (prd: Function, ls: any[]) => {
    const length = ls.length;
    for (let i = 0; i < length; i+=1) {
      if (prd(ls[i])) {
        return { just: i };
      }
    }
    return { nothing: null };
  }

);

// findIndices :: (a -> Bool) -> [a] -> [Int]
export const findIndices: Function = _curry(
  (prd: Function, ls: any[]) => {
    const length = ls.length;
    let ys = [];
    for (let i = 0; i < length; i+=1) {
      if (prd(ls[i])) {
        ys.push(i);
      }
    }
    return ys;
  }

);

// Zipping and unzipping lists

// zip :: [a] -> [b] -> [(a, b)]
export const zip = _curry((xs, ys) => {
  const ret = [];
  const len = xs.length < ys.length ? xs.length : ys.length;
  for (let i = 0; i < len; i+=1) {
    ret.push([xs[i], ys[i]]);
  }
  return ret;
});

// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
// zip5 :: [a] -> [b] -> [c] -> [d] -> [e] -> [(a, b, c, d, e)]
// zip6 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [(a, b, c, d, e, f)]
// zip7 :: [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [(a, b, c, d, e, f, g)]

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
export const zipWith = _curry(
  (fn, xs, ys) => {
    let res = [];
    let len = xs.length < ys.length ? xs.length : ys.length;
    for (let i = 0; i < len; i+=1) {
      res.push(fn(xs[i], ys[i]));
    }
    return res;
  }
);

// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
// zipWith5 :: (a -> b -> c -> d -> e -> f) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f]
// zipWith6 :: (a -> b -> c -> d -> e -> f -> g) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g]
// zipWith7 :: (a -> b -> c -> d -> e -> f -> g -> h) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [h]

// unzip :: [(a, b)] -> ([a], [b])
export const unzip = _curry((as: any[][]): any[][] => {
  let xs = [];
  let ys = [];
  const len = as.length;
  for (let i=0; i < len; i+=1) {
    xs.push(as[i][0]);
    ys.push(as[i][1]);
  }
  return [xs, ys];
});
// unzip3 :: [(a, b, c)] -> ([a], [b], [c])
// unzip4 :: [(a, b, c, d)] -> ([a], [b], [c], [d])
// unzip5 :: [(a, b, c, d, e)] -> ([a], [b], [c], [d], [e])
// unzip6 :: [(a, b, c, d, e, f)] -> ([a], [b], [c], [d], [e], [f])
// unzip7 :: [(a, b, c, d, e, f, g)] -> ([a], [b], [c], [d], [e], [f], [g])

// Functions on strings

// lines :: String -> [String]
export const lines =
  (str) =>
    str.split('\n');

// words :: String -> [String]
export const words =
  (str) =>
    str.split(' ');

// unlines :: [String] -> String
export const unlines =
  (xs) =>
    xs.join('\n');

// unwords :: [String] -> String
export const unwords =
  (xs) =>
    xs.join(' ');

// "Set" operations

// nub :: Eq a => [a] -> [a]
export const nub =
  (xs) => {
    const list = [];
    xs.forEach(x => list.indexOf(x) === -1 && list.push(x));
    return list;
  };

// delete_ :: Eq a => a -> [a] -> [a]
export const delete_ = _curry(
  (x, xs) => {
    let list = [];
    const len = xs.length;
    for (let i = 0; i < len; i+=1) {
      if (xs[i] === x) {
        list = list.concat(xs.slice(i+1));
        break;
      }
      list.push(xs[i]);
    }
    if (type(xs) === 'String') {
      return list.join('');
    }
    return list;
  }
);

// difference :: Eq a => [a] -> [a] -> [a]
export const difference = _curry(
  (as, bs) => {
    const list = [];
    const len = as.length;
    for (let i = 0; i < len; i+=1) {
      if (bs.indexOf(as[i]) === -1) {
        list.push(as[i]);
      }
    }
    return list;
  }
);

// union :: Eq a => [a] -> [a] -> [a]
export const union = _curry(
  (as, bs) => {
    const list = as;
    const len = bs.length;
    for (let i = 0; i < len; i+=1) {
      if (as.indexOf(bs[i]) === -1) {
        list.push(bs[i]);
      }
    }
    return list;
  }
);

// intersect :: Eq a => [a] -> [a] -> [a]
export const intersect = _curry(
  (as, bs) => {
    const list = [];
    const len = as.length;
    for (let i = 0; i < len; i+=1) {
      if (bs.indexOf(as[i]) !== -1) {
        list.push(as[i]);
      }
    }
    return list;
  }
);

// Ordered lists

// sort :: Ord a => [a] -> [a]
export const sort = undefined;

// sortOn :: Ord b => (a -> b) -> [a] -> [a]
export const sortOn = undefined;

// insert :: Ord a => a -> [a] -> [a]
export const insert = undefined;

// The "By" Operations

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
export const nubBy = undefined;

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
export const deleteBy = undefined;

// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
export const deleteFirstsBy = undefined;

// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
export const unionBy = undefined;

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
export const intersectBy = undefined;

// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
export const groupBy = undefined;

// User-supplied comparison

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
export const sortBy = undefined;

// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
export const insertBy = undefined;

// maximumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
export const maximumBy = undefined;

// minimumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
export const minimumBy = undefined;
