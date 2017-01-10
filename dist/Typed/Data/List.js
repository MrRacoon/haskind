'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumBy = exports.maximumBy = exports.insertBy = exports.sortBy = exports.groupBy = exports.intersectBy = exports.unionBy = exports.deleteFirstsBy = exports.deleteBy = exports.nubBy = exports.insert = exports.sortOn = exports.sort = exports.intersect = exports.union = exports.difference = exports.delete_ = exports.nub = exports.unwords = exports.unlines = exports.words = exports.lines = exports.unzip = exports.zip = exports.findIndices = exports.findIndex = exports.elemIndices = exports.elemIndex = exports.index = exports.filter = exports.notElem = exports.elem = exports.isSubsequenceOf = exports.isInfixOf = exports.isSuffixOf = exports.isPrefixOf = exports.tails = exports.inits = exports.group = exports.stripPrefix = exports.break_ = exports.span = exports.dropWhileEnd = exports.dropWhile = exports.takeWhile = exports.splitAt = exports.drop = exports.take = exports.minimum = exports.maximum = exports.product = exports.sum = exports.all = exports.any = exports.or = exports.and = exports.concat = exports.foldl = exports.intersperse = exports.strOrList = exports.reverse = exports.map = exports.length = exports.init = exports.tail = exports.last = exports.head = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _hasInstance = require('babel-runtime/core-js/symbol/has-instance');

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Basic functions

var head = exports.head = function head(ls) {
  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return (0, _util._notUndefined)(ls[0], (0, _util._lazy)(_util.error, ['List.head: empty list']));
};

var last = exports.last = function last(ls) {
  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return (0, _util._notUndefined)(ls.slice(-1)[0], (0, _util._lazy)(_util.error, ['List.last: empty list']));
};
// ^ I'm no longer a fan of this.
//   just write it out.

var tail = exports.tail = function tail(_ref28) {
  var _ref29 = (0, _toArray3.default)(_ref28),
      xs = _ref29.slice(1);

  function _ref3(_id3) {
    if (!Array.isArray(_id3)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id3));
    }

    return _id3;
  }

  return _ref3(xs);
};

var init = exports.init = function init(ls) {
  function _ref4(_id4) {
    if (!Array.isArray(_id4)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id4));
    }

    return _id4;
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  if (!ls.length) (0, _util.error)('List.init: empty list');
  return _ref4(ls.slice(0, -1));
};

var _lengthArray = function _lengthArray(ls) {
  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return ls.length;
};

var _lengthObject = function _lengthObject(ls) {
  function _ref5(_id5) {
    if (!(typeof _id5 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
    }

    return _id5;
  }

  if (!(ls != null && (typeof ls === 'undefined' ? 'undefined' : (0, _typeof3.default)(ls)) === 'object')) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\n{}\n\nGot:\n' + _inspect(ls));
  }

  return _ref5((0, _keys2.default)(ls).length);
};

var length = exports.length = function _length(ls) {
  function _ref6(_id6) {
    if (!(typeof _id6 === 'number' || _id6 == null)) {
      throw new TypeError('Function "_length" return value violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(_id6));
    }

    return _id6;
  }

  switch ((0, _util.type)(ls)) {
    case 'Object':
      return _lengthObject(ls);
    case 'Array':
      return _ref6(_lengthArray(ls));

    default:
      return _ref6(undefined);

  }
};

// List transformations

var map = exports.map = (0, _util._curry)(function (fn, ls) {
  function _ref7(_id7) {
    if (!Array.isArray(_id7)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id7));
    }

    return _id7;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref7(ls.map(fn));
});

if (!(typeof map === 'function')) {
  throw new TypeError('Value of variable "map" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(map));
}

var reverse = exports.reverse = function reverse(ls) {
  function _ref8(_id8) {
    if (!(Array.isArray(_id8) || typeof _id8 === 'string')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[] | string\n\nGot:\n' + _inspect(_id8));
    }

    return _id8;
  }

  if (!(Array.isArray(ls) || typeof ls === 'string')) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[] | string\n\nGot:\n' + _inspect(ls));
  }

  switch ((0, _util.type)(ls)) {
    case 'String':
      return _ref8(reverse(ls.split('')).join(''));

    case 'Array':
      return _ref8(ls.reduce(function (acc, x) {
        return [x].concat(acc);
      }, []));

    default:
      return _ref8(ls);

  }
};

var strOrList = exports.strOrList = function () {
  function strOrList(input) {
    return typeof input === 'string' || Array.isArray(input);
  }

  ;
  (0, _defineProperty2.default)(strOrList, _hasInstance2.default, {
    value: function value(input) {
      return strOrList(input);
    }
  });
  return strOrList;
}();

var intersperse = exports.intersperse = (0, _util._curry)(function (ch, ls) {
  function _ref9(_id9) {
    if (!strOrList(_id9)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nstrOrList\n\nGot:\n' + _inspect(_id9));
    }

    return _id9;
  }

  if (!strOrList(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nstrOrList\n\nGot:\n' + _inspect(ls));
  }

  switch ((0, _util.type)(ls)) {

    case 'Array':
      return _ref9(ls.reduce(function (acc, x) {
        return acc.length ? acc.concat([ch, x]) : [x];
      }, []));


    case 'String':
      return _ref9(ls.split('').reduce(function (acc, x) {
        return acc.length ? acc + ch + x : acc + x;
      }, ''));


    default:
      (0, _util.error)('List.interpserse: requires array or string, got: ' + (0, _util.type)(ls));
  }
});

// Reducing lists (folds)

if (!(typeof intersperse === 'function')) {
  throw new TypeError('Value of variable "intersperse" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(intersperse));
}

var foldl = exports.foldl = (0, _util._curry)(function (fn, init, ls) {
  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return ls.reduce(fn, init);
});

// Special folds

if (!(typeof foldl === 'function')) {
  throw new TypeError('Value of variable "foldl" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(foldl));
}

var concat = exports.concat = function concat(ls) {
  function _ref11(_id11) {
    if (!Array.isArray(_id11)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id11));
    }

    return _id11;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return Array.isArray(item);
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[][]\n\nGot:\n' + _inspect(ls));
  }

  return _ref11(ls.reduce(function (acc, x) {
    return acc.concat(x);
  }, []));
};

var and = exports.and = function and(ls) {
  function _ref12(_id12) {
    if (!(typeof _id12 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id12));
    }

    return _id12;
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref12(ls.reduce(function (acc, x) {
    return acc && x;
  }, true));
};

var or = exports.or = function or(ls) {
  function _ref13(_id13) {
    if (!(typeof _id13 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id13));
    }

    return _id13;
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref13(ls.reduce(function (acc, x) {
    return acc || x;
  }, false));
};

var any = exports.any = (0, _util._curry)(function (fn, ls) {
  function _ref14(_id14) {
    if (!(typeof _id14 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id14));
    }

    return _id14;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref14(ls.reduce(function (acc, x) {
    return acc || !!fn(x);
  }, false));
});

if (!(typeof any === 'function')) {
  throw new TypeError('Value of variable "any" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(any));
}

var all = exports.all = (0, _util._curry)(function (fn, ls) {
  function _ref15(_id15) {
    if (!(typeof _id15 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id15));
    }

    return _id15;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref15(ls.reduce(function (acc, x) {
    return acc && !!fn(x);
  }, true));
});

if (!(typeof all === 'function')) {
  throw new TypeError('Value of variable "all" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(all));
}

var sum = exports.sum = function sum(ls) {
  function _ref16(_id16) {
    if (!(typeof _id16 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id16));
    }

    return _id16;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return typeof item === 'number';
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref16(ls.reduce(function (acc, x) {
    return acc + x;
  }, 0));
};

var product = exports.product = function product(ls) {
  function _ref17(_id17) {
    if (!(typeof _id17 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id17));
    }

    return _id17;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return typeof item === 'number';
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref17(ls.reduce(function (acc, x) {
    return acc * x;
  }, 1));
};

var maximum = exports.maximum = function maximum(ls) {
  function _ref18(_id18) {
    if (!(typeof _id18 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id18));
    }

    return _id18;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return typeof item === 'number';
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref18(ls.reduce(function (acc, x) {
    return acc <= x ? x : acc;
  }, -Infinity));
};

var minimum = exports.minimum = function minimum(ls) {
  function _ref19(_id19) {
    if (!(typeof _id19 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id19));
    }

    return _id19;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return typeof item === 'number';
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref19(ls.reduce(function (acc, x) {
    return x <= acc ? x : acc;
  }, Infinity));
};

// Building lists

// Scans

// Accumulating maps

// Unfolding

// Extracting sublists

// take :: Int -> [a] -> [a]
var take = exports.take = (0, _util._curry)(function (n, xs) {
  function _ref20(_id20) {
    if (!Array.isArray(_id20)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id20));
    }

    return _id20;
  }

  if (!(typeof n === 'number')) {
    throw new TypeError('Value of argument "n" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(n));
  }

  if (!Array.isArray(xs)) {
    throw new TypeError('Value of argument "xs" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(xs));
  }

  return _ref20(n < 0 ? [] : xs.slice(0, n));
});

// drop :: Int -> [a] -> [a]
var drop = exports.drop = (0, _util._curry)(function (n, xs) {
  function _ref21(_id21) {
    if (!Array.isArray(_id21)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id21));
    }

    return _id21;
  }

  if (!(typeof n === 'number')) {
    throw new TypeError('Value of argument "n" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(n));
  }

  if (!Array.isArray(xs)) {
    throw new TypeError('Value of argument "xs" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(xs));
  }

  return _ref21(n < 0 ? xs : xs.filter(function (x, i) {
    return i >= n;
  }));
});

// splitAt :: Int -> [a] -> ([a], [a])
var splitAt = exports.splitAt = undefined;

// takeWhile :: (a -> Bool) -> [a] -> [a]
var takeWhile = exports.takeWhile = undefined;

// dropWhile :: (a -> Bool) -> [a] -> [a]
var dropWhile = exports.dropWhile = undefined;

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
  function _ref22(_id22) {
    if (!(typeof _id22 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id22));
    }

    return _id22;
  }

  if (!Array.isArray(xs)) {
    throw new TypeError('Value of argument "xs" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(xs));
  }

  return _ref22(xs.indexOf(x) !== -1);
});

if (!(typeof elem === 'function')) {
  throw new TypeError('Value of variable "elem" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(elem));
}

var notElem = exports.notElem = (0, _util._curry)(function (x, xs) {
  if (!Array.isArray(xs)) {
    throw new TypeError('Value of argument "xs" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(xs));
  }

  return xs.indexOf(x) === -1;
});

// Searching with a predicate

if (!(typeof notElem === 'function')) {
  throw new TypeError('Value of variable "notElem" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(notElem));
}

var filter = exports.filter = (0, _util._curry)(function (fn, ls) {
  function _ref24(_id24) {
    if (!Array.isArray(_id24)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id24));
    }

    return _id24;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref24(ls.filter(fn));
});

// Indexing lists

// (!!) :: [a] -> Int -> a

if (!(typeof filter === 'function')) {
  throw new TypeError('Value of variable "filter" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(filter));
}

var index = exports.index = (0, _util._curry)(function (ls, i) {
  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  if (!(typeof i === 'number')) {
    throw new TypeError('Value of argument "i" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(i));
  }

  if (i >= ls.length) {
    return (0, _util.error)('List.index: index too large');
  }
  if (i < 0) {
    return (0, _util.error)('List.index: negative index');
  }
  return ls[i];
});

// elemIndex :: Eq a => a -> [a] -> Maybe Int

if (!(typeof index === 'function')) {
  throw new TypeError('Value of variable "index" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(index));
}

var elemIndex = exports.elemIndex = (0, _util._curry)(function (l, ls) {
  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (l === ls[i]) {
      return { just: i };
    }
  }
  return { nothing: null };
});

// elemIndices :: Eq a => a -> [a] -> [Int]

if (!(typeof elemIndex === 'function')) {
  throw new TypeError('Value of variable "elemIndex" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(elemIndex));
}

var elemIndices = exports.elemIndices = (0, _util._curry)(function (x, xs) {
  function _ref26(_id26) {
    if (!(Array.isArray(_id26) && _id26.every(function (item) {
      return typeof item === 'number';
    }))) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(_id26));
    }

    return _id26;
  }

  var ys = [];
  xs.forEach(function (y, i) {
    return y === x && ys.push(i);
  });
  return _ref26(ys);
});

// findIndex :: (a -> Bool) -> [a] -> Maybe Int

if (!(typeof elemIndices === 'function')) {
  throw new TypeError('Value of variable "elemIndices" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(elemIndices));
}

var findIndex = exports.findIndex = (0, _util._curry)(function (prd, ls) {
  if (!(typeof prd === 'function')) {
    throw new TypeError('Value of argument "prd" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(prd));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (prd(ls[i])) {
      return { just: i };
    }
  }
  return { nothing: null };
});

// findIndices :: (a -> Bool) -> [a] -> [Int]

if (!(typeof findIndex === 'function')) {
  throw new TypeError('Value of variable "findIndex" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(findIndex));
}

var findIndices = exports.findIndices = (0, _util._curry)(function (prd, ls) {
  if (!(typeof prd === 'function')) {
    throw new TypeError('Value of argument "prd" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(prd));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

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

if (!(typeof findIndices === 'function')) {
  throw new TypeError('Value of variable "findIndices" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(findIndices));
}

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
  function _ref27(_id27) {
    if (!(Array.isArray(_id27) && _id27.every(function (item) {
      return Array.isArray(item);
    }))) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[][]\n\nGot:\n' + _inspect(_id27));
    }

    return _id27;
  }

  if (!(Array.isArray(as) && as.every(function (item) {
    return Array.isArray(item);
  }))) {
    throw new TypeError('Value of argument "as" violates contract.\n\nExpected:\nany[][]\n\nGot:\n' + _inspect(as));
  }

  var xs = [];
  var ys = [];
  var len = as.length;
  for (var i = 0; i < len; i += 1) {
    xs.push(as[i][0]);
    ys.push(as[i][1]);
  }
  return _ref27([xs, ys]);
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

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}