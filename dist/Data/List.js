'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumBy = exports.maximumBy = exports.insertBy = exports.sortBy = exports.groupBy = exports.intersectBy = exports.unionBy = exports.deleteFirstsBy = exports.deleteBy = exports.nubBy = exports.insert = exports.sortOn = exports.sort = exports.intersect = exports.union = exports.difference = exports.delete_ = exports.nub = exports.unwords = exports.unlines = exports.words = exports.lines = exports.unzip = exports.zip = exports.findIndices = exports.findIndex = exports.elemIndices = exports.elemIndex = exports.index = exports.filter = exports.notElem = exports.elem = exports.isSubsequenceOf = exports.isInfixOf = exports.isSuffixOf = exports.isPrefixOf = exports.tails = exports.inits = exports.group = exports.stripPrefix = exports.break_ = exports.span = exports.dropWhileEnd = exports.dropWhile = exports.takeWhile = exports.splitOn = exports.splitAt = exports.drop = exports.take = exports.minimum = exports.maximum = exports.product = exports.sum = exports.all = exports.any = exports.or = exports.and = exports.concat = exports.foldr1 = exports.foldr = exports.foldl1_ = exports.foldl1 = exports.foldl_ = exports.foldl = exports.intersperse = exports.reverse = exports.map = exports.length = exports.null_ = exports.uncons = exports.init = exports.tail = exports.last = exports.head = exports.append = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Basic functions

// (++) :: [a] -> [a] -> [a]
var append = exports.append = (0, _util._curry)(function (as, bs) {
  return as.concat(bs);
});

// head :: [a] -> a
var head = exports.head = function head(ls) {
  return (0, _util._notUndefined)(ls[0], (0, _util._lazy)(_util.error, ['List.head: empty list']));
};

// last :: [a] -> a
var last = exports.last = function last(ls) {
  return (0, _util._notUndefined)(ls.slice(-1)[0], (0, _util._lazy)(_util.error, ['List.last: empty list']));
};
// ^ I'm no longer a fan of this.
//   just write it out.

// tail :: [a] -> [a]
var tail = exports.tail = function tail(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      xs = _ref2.slice(1);

  return xs;
};

// init :: [a] -> [a]
var init = exports.init = function init(ls) {
  if (!ls.length) (0, _util.error)('List.init: empty list');
  return ls.slice(0, -1);
};

// uncons :: [a] -> Maybe (a, [a])
var uncons = exports.uncons = undefined;

// null :: Foldable t => t a -> Bool
var null_ = exports.null_ = undefined;

// length :: Foldable t => t a -> Int
var length = exports.length = function _length(ls) {
  switch ((0, _util.type)(ls)) {
    case 'Object':
      return (0, _keys2.default)(ls).length;
    case 'Array':
      return ls.length;
    default:
      return undefined;
  }
};

// List transformations

// map :: (a -> b) -> [a] -> [b]
var map = exports.map = (0, _util._curry)(function (fn, ls) {
  return ls.map(fn);
});

// reverse :: [a] -> [a]
var reverse = exports.reverse = function reverse(ls) {
  switch ((0, _util.type)(ls)) {
    case 'String':
      return reverse(ls.split('')).join('');
    case 'Array':
      return ls.reduce(function (acc, x) {
        return [x].concat(acc);
      }, []);
    default:
      return ls;
  }
};

// intersperse :: a -> [a] -> [a]
var intersperse = exports.intersperse = (0, _util._curry)(function (ch, ls) {
  switch ((0, _util.type)(ls)) {

    case 'Array':
      return ls.reduce(function (acc, x) {
        return acc.length ? acc.concat([ch, x]) : [x];
      }, []);

    case 'String':
      return ls.split('').reduce(function (acc, x) {
        return acc.length ? acc + ch + x : acc + x;
      }, '');

    default:
      (0, _util.error)('List.interpserse: requires array or string, got: ' + (0, _util.type)(ls));
  }
});

// Reducing lists (folds)

// foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
var foldl = exports.foldl = (0, _util._curry)(function (fn, init, ls) {
  return ls.reduce(fn, init);
});

// foldl' :: Foldable t => (b -> a -> b) -> b -> t a -> b
var foldl_ = exports.foldl_ = undefined;

// foldl1 :: Foldable t => (a -> a -> a) -> t a -> a
var foldl1 = exports.foldl1 = undefined;

// foldl1' :: (a -> a -> a) -> [a] -> a
var foldl1_ = exports.foldl1_ = undefined;

// foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
var foldr = exports.foldr = undefined;

// foldr1 :: Foldable t => (a -> a -> a) -> t a -> a
var foldr1 = exports.foldr1 = undefined;

// Special folds

// concat :: Foldable t => t [a] -> [a]
var concat = exports.concat = function concat(ls) {
  return ls.reduce(function (acc, x) {
    return acc.concat(x);
  }, []);
};

// concatMap :: Foldable t => (a -> [b]) -> t a -> [b]

// and :: Foldable t => t Bool -> Bool
var and = exports.and = function and(ls) {
  return ls.reduce(function (acc, x) {
    return acc && x;
  }, true);
};

// or :: Foldable t => t Bool -> Bool
var or = exports.or = function or(ls) {
  return ls.reduce(function (acc, x) {
    return acc || x;
  }, false);
};

// any :: Foldable t => (a -> Bool) -> t a -> Bool
var any = exports.any = (0, _util._curry)(function (fn, ls) {
  return ls.reduce(function (acc, x) {
    return acc || !!fn(x);
  }, false);
});

// all :: Foldable t => (a -> Bool) -> t a -> Bool
var all = exports.all = (0, _util._curry)(function (fn, ls) {
  return ls.reduce(function (acc, x) {
    return acc && !!fn(x);
  }, true);
});

// sum :: (Foldable t, Num a) => t a -> a
var sum = exports.sum = function sum(ls) {
  return ls.reduce(function (acc, x) {
    return acc + x;
  }, 0);
};

// product :: (Foldable t, Num a) => t a -> a
var product = exports.product = function product(ls) {
  return ls.reduce(function (acc, x) {
    return acc * x;
  }, 1);
};

// maximum :: forall a. (Foldable t, Ord a) => t a -> a
var maximum = exports.maximum = function maximum(ls) {
  return ls.reduce(function (acc, x) {
    return acc <= x ? x : acc;
  }, -Infinity);
};

// minimum :: forall a. (Foldable t, Ord a) => t a -> a
var minimum = exports.minimum = function minimum(ls) {
  return ls.reduce(function (acc, x) {
    return x <= acc ? x : acc;
  }, Infinity);
};

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
var take = exports.take = (0, _util._curry)(function (n, xs) {
  return n < 0 ? [] : xs.slice(0, n);
});

// drop :: Int -> [a] -> [a]
var drop = exports.drop = (0, _util._curry)(function (n, xs) {
  return n < 0 ? xs : xs.filter(function (x, i) {
    return i >= n;
  });
});

// splitAt :: Int -> [a] -> ([a], [a])
var splitAt = exports.splitAt = function splitAt(idx, xs) {
  var as = [];
  var bs = [];
  xs.forEach(function (x, i) {
    if (i < idx) as.push(x);else bs.push(x);
  });
  return [as, bs];
};

// splitOn :: a -> [a] -> [[a]]
var splitOn = exports.splitOn = (0, _util._curry)(function (x, xs) {
  switch ((0, _util.type)(xs)) {
    case 'String':
    case 'Array':
      return xs.split(x);
    default:
      return undefined;
  }
});

// takeWhile :: (a -> Bool) -> [a] -> [a]
var takeWhile = exports.takeWhile = (0, _util._curry)(function (pred, xs) {
  var res = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(xs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;

      if (pred(x)) res.push(x);else break;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return res;
});

// dropWhile :: (a -> Bool) -> [a] -> [a]
var dropWhile = exports.dropWhile = (0, _util._curry)(function (pred, xs) {
  var res = [];
  var acc = true;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(xs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var x = _step2.value;

      acc = acc && pred(x);
      if (acc) continue;else res.push(x);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return res;
});

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
var dropWhileEnd = exports.dropWhileEnd = undefined;

// span :: (a -> Bool) -> [a] -> ([a], [a])
var span = exports.span = undefined;

// break :: (a -> Bool) -> [a] -> ([a], [a])
var break_ = exports.break_ = undefined;

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
var stripPrefix = exports.stripPrefix = undefined;

// group :: Eq a => [a] -> [[a]]
var group = exports.group = undefined;

// inits :: [a] -> [[a]]
var inits = exports.inits = undefined;

// tails :: [a] -> [[a]]
var tails = exports.tails = undefined;

// Predicates

// isPrefixOf :: Eq a => [a] -> [a] -> Bool
var isPrefixOf = exports.isPrefixOf = undefined;

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
var isSuffixOf = exports.isSuffixOf = undefined;

// isInfixOf :: Eq a => [a] -> [a] -> Bool
var isInfixOf = exports.isInfixOf = undefined;

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
var isSubsequenceOf = exports.isSubsequenceOf = undefined;

// Searching by equality

var elem = exports.elem = (0, _util._curry)(function (x, xs) {
  return xs.indexOf(x) !== -1;
});

var notElem = exports.notElem = (0, _util._curry)(function (x, xs) {
  return xs.indexOf(x) === -1;
});

// Searching with a predicate

var filter = exports.filter = (0, _util._curry)(function (fn, ls) {
  return ls.filter(fn);
});

// Indexing lists

// (!!) :: [a] -> Int -> a
var index = exports.index = (0, _util._curry)(function (ls, i) {
  if (i >= ls.length) {
    return (0, _util.error)('List.index: index too large');
  }
  if (i < 0) {
    return (0, _util.error)('List.index: negative index');
  }
  return ls[i];
});

// elemIndex :: Eq a => a -> [a] -> Maybe Int
var elemIndex = exports.elemIndex = (0, _util._curry)(function (l, ls) {
  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (l === ls[i]) {
      return { just: i };
    }
  }
  return { nothing: null };
});

// elemIndices :: Eq a => a -> [a] -> [Int]
var elemIndices = exports.elemIndices = (0, _util._curry)(function (x, xs) {
  var ys = [];
  xs.forEach(function (y, i) {
    return y === x && ys.push(i);
  });
  return ys;
});

// findIndex :: (a -> Bool) -> [a] -> Maybe Int
var findIndex = exports.findIndex = (0, _util._curry)(function (prd, ls) {
  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (prd(ls[i])) {
      return { just: i };
    }
  }
  return { nothing: null };
});

// findIndices :: (a -> Bool) -> [a] -> [Int]
var findIndices = exports.findIndices = (0, _util._curry)(function (prd, ls) {
  var length = ls.length;
  var ys = [];
  for (var i = 0; i < length; i += 1) {
    if (prd(ls[i])) {
      ys.push(i);
    }
  }
  return ys;
});

// Zipping and unzipping lists

// zip :: [a] -> [b] -> [(a, b)]
var zip = exports.zip = (0, _util._curry)(function (xs, ys) {
  var ret = [];
  var len = xs.length < ys.length ? xs.length : ys.length;
  for (var i = 0; i < len; i += 1) {
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
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
// zipWith5 :: (a -> b -> c -> d -> e -> f) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f]
// zipWith6 :: (a -> b -> c -> d -> e -> f -> g) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g]
// zipWith7 :: (a -> b -> c -> d -> e -> f -> g -> h) -> [a] -> [b] -> [c] -> [d] -> [e] -> [f] -> [g] -> [h]

// unzip :: [(a, b)] -> ([a], [b])
var unzip = exports.unzip = (0, _util._curry)(function (as) {
  var xs = [];
  var ys = [];
  var len = as.length;
  for (var i = 0; i < len; i += 1) {
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
var lines = exports.lines = function lines(str) {
  return str.split('\n');
};

// words :: String -> [String]
var words = exports.words = function words(str) {
  return str.split(' ');
};

// unlines :: [String] -> String
var unlines = exports.unlines = function unlines(xs) {
  return xs.join('\n');
};

// unwords :: [String] -> String
var unwords = exports.unwords = function unwords(xs) {
  return xs.join(' ');
};

// "Set" operations

// nub :: Eq a => [a] -> [a]
var nub = exports.nub = function nub(xs) {
  var list = [];
  xs.forEach(function (x) {
    return list.indexOf(x) === -1 && list.push(x);
  });
  return list;
};

// delete_ :: Eq a => a -> [a] -> [a]
var delete_ = exports.delete_ = (0, _util._curry)(function (x, xs) {
  var list = [];
  var len = xs.length;
  for (var i = 0; i < len; i += 1) {
    if (xs[i] === x) {
      list = list.concat(xs.slice(i + 1));
      break;
    }
    list.push(xs[i]);
  }
  if ((0, _util.type)(xs) === 'String') {
    return list.join('');
  }
  return list;
});

// difference :: Eq a => [a] -> [a] -> [a]
var difference = exports.difference = (0, _util._curry)(function (as, bs) {
  var list = [];
  var len = as.length;
  for (var i = 0; i < len; i += 1) {
    if (bs.indexOf(as[i]) === -1) {
      list.push(as[i]);
    }
  }
  return list;
});

// union :: Eq a => [a] -> [a] -> [a]
var union = exports.union = (0, _util._curry)(function (as, bs) {
  var list = as;
  var len = bs.length;
  for (var i = 0; i < len; i += 1) {
    if (as.indexOf(bs[i]) === -1) {
      list.push(bs[i]);
    }
  }
  return list;
});

// intersect :: Eq a => [a] -> [a] -> [a]
var intersect = exports.intersect = (0, _util._curry)(function (as, bs) {
  var list = [];
  var len = as.length;
  for (var i = 0; i < len; i += 1) {
    if (bs.indexOf(as[i]) !== -1) {
      list.push(as[i]);
    }
  }
  return list;
});

// Ordered lists

// sort :: Ord a => [a] -> [a]
var sort = exports.sort = undefined;

// sortOn :: Ord b => (a -> b) -> [a] -> [a]
var sortOn = exports.sortOn = undefined;

// insert :: Ord a => a -> [a] -> [a]
var insert = exports.insert = undefined;

// The "By" Operations

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
var nubBy = exports.nubBy = undefined;

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
var deleteBy = exports.deleteBy = undefined;

// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
var deleteFirstsBy = exports.deleteFirstsBy = undefined;

// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
var unionBy = exports.unionBy = undefined;

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
var intersectBy = exports.intersectBy = undefined;

// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
var groupBy = exports.groupBy = undefined;

// User-supplied comparison

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
var sortBy = exports.sortBy = undefined;

// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
var insertBy = exports.insertBy = undefined;

// maximumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
var maximumBy = exports.maximumBy = undefined;

// minimumBy :: Foldable t => (a -> a -> Ordering) -> t a -> a
var minimumBy = exports.minimumBy = undefined;