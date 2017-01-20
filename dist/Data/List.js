'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumBy = exports.maximumBy = exports.insertBy = exports.sortBy = exports.groupBy = exports.intersectBy = exports.unionBy = exports.deleteFirstsBy = exports.deleteBy = exports.nubBy = exports.insert = exports.sortOn = exports.sort = exports.intersect = exports.union = exports.difference = exports.delete_ = exports.nub = exports.unwords = exports.unlines = exports.words = exports.lines = exports.unzip = exports.zipWith = exports.zip = exports.findIndices = exports.findIndex = exports.elemIndices = exports.elemIndex = exports.index = exports.partition = exports.filter = exports.notElem = exports.elem = exports.isSubsequenceOf = exports.isInfixOf = exports.isSuffixOf = exports.isPrefixOf = exports.tails = exports.inits = exports.group = exports.stripPrefix = exports.break_ = exports.span = exports.dropWhileEnd = exports.dropWhile = exports.takeWhile = exports.splitOn = exports.splitAt = exports.drop = exports.take = exports.minimum = exports.maximum = exports.product = exports.sum = exports.all = exports.any = exports.or = exports.and = exports.concatMap = exports.concat = exports.foldr1 = exports.foldr = exports.foldl1_ = exports.foldl1 = exports.foldl_ = exports.foldl = exports.intersperse = exports.reverse = exports.map = exports.length = exports.null_ = exports.uncons = exports.init = exports.tail = exports.last = exports.head = exports.append = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var append = exports.append = (0, _util._curry)(function (as, bs) {
  return as.concat(bs);
});

var head = exports.head = function head(xs) {
  var x = xs[0];
  return x ? x : (0, _util.error)('List.head: empty list');
};

var last = exports.last = function last(xs) {
  var x = xs.slice(-1)[0];
  return x ? x : (0, _util.error)('List.last: empty list');
};

var tail = exports.tail = function tail(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      xs = _ref2.slice(1);

  return xs;
};

var init = exports.init = function init(ls) {
  if (!ls.length) (0, _util.error)('List.init: empty list');
  return ls.slice(0, -1);
};

var uncons = exports.uncons = undefined;

var null_ = exports.null_ = undefined;

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

var map = exports.map = (0, _util._curry)(function (fn, ls) {
  return ls.map(fn);
});

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

var foldl = exports.foldl = (0, _util._curry)(function (fn, init, ls) {
  return ls.reduce(fn, init);
});

var foldl_ = exports.foldl_ = undefined;

var foldl1 = exports.foldl1 = undefined;

var foldl1_ = exports.foldl1_ = undefined;

var foldr = exports.foldr = undefined;

var foldr1 = exports.foldr1 = undefined;

var concat = exports.concat = function concat(ls) {
  return ls.reduce(function (acc, x) {
    return acc.concat(x);
  }, []);
};

var concatMap = exports.concatMap = (0, _util._curry)(function (fn, xs) {
  var res = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(xs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;
      res = res.concat(fn(x));
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

var and = exports.and = function and(ls) {
  return ls.reduce(function (acc, x) {
    return acc && x;
  }, true);
};

var or = exports.or = function or(ls) {
  return ls.reduce(function (acc, x) {
    return acc || x;
  }, false);
};

var any = exports.any = (0, _util._curry)(function (fn, ls) {
  return ls.reduce(function (acc, x) {
    return acc || !!fn(x);
  }, false);
});

var all = exports.all = (0, _util._curry)(function (fn, ls) {
  return ls.reduce(function (acc, x) {
    return acc && !!fn(x);
  }, true);
});

var sum = exports.sum = function sum(ls) {
  return ls.reduce(function (acc, x) {
    return acc + x;
  }, 0);
};

var product = exports.product = function product(ls) {
  return ls.reduce(function (acc, x) {
    return acc * x;
  }, 1);
};

var maximum = exports.maximum = function maximum(ls) {
  return ls.reduce(function (acc, x) {
    return acc <= x ? x : acc;
  }, -Infinity);
};

var minimum = exports.minimum = function minimum(ls) {
  return ls.reduce(function (acc, x) {
    return x <= acc ? x : acc;
  }, Infinity);
};

var take = exports.take = (0, _util._curry)(function (n, xs) {
  return n < 0 ? [] : xs.slice(0, n);
});

var drop = exports.drop = (0, _util._curry)(function (n, xs) {
  return n < 0 ? xs : xs.filter(function (x, i) {
    return i >= n;
  });
});

var splitAt = exports.splitAt = function splitAt(idx, xs) {
  var as = [];
  var bs = [];
  xs.forEach(function (x, i) {
    if (i < idx) as.push(x);else bs.push(x);
  });
  return [as, bs];
};

var splitOn = exports.splitOn = (0, _util._curry)(function (x, xs) {
  switch ((0, _util.type)(xs)) {
    case 'String':
    case 'Array':
      return xs.split(x);
    default:
      return undefined;
  }
});

var takeWhile = exports.takeWhile = (0, _util._curry)(function (pred, xs) {
  var res = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(xs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var x = _step2.value;

      if (pred(x)) res.push(x);else break;
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

var dropWhile = exports.dropWhile = (0, _util._curry)(function (pred, xs) {
  var res = [];
  var acc = true;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3.default)(xs), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var x = _step3.value;

      acc = acc && pred(x);
      if (acc) continue;else res.push(x);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return res;
});

var dropWhileEnd = exports.dropWhileEnd = (0, _util._curry)(function (pred, xs) {
  return reverse(dropWhile(pred, reverse(xs)));
});

var span = exports.span = (0, _util._curry)(function (fn, xs) {
  var f = [];
  var s = [];
  var bl = true;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = (0, _getIterator3.default)(xs), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var x = _step4.value;

      if (bl = bl && fn(x)) {
        f.push(x);
      } else {
        s.push(x);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return [f, s];
});

var break_ = exports.break_ = (0, _util._curry)(function (fn, xs) {
  var f = [];
  var s = [];
  var bl = false;
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = (0, _getIterator3.default)(xs), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var x = _step5.value;

      if (bl = bl || fn(x)) {
        s.push(x);
      } else {
        f.push(x);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return [f, s];
});

var stripPrefix = exports.stripPrefix = undefined;

var group = exports.group = undefined;

var inits = exports.inits = undefined;

var tails = exports.tails = undefined;

var isPrefixOf = exports.isPrefixOf = undefined;

var isSuffixOf = exports.isSuffixOf = undefined;

var isInfixOf = exports.isInfixOf = undefined;

var isSubsequenceOf = exports.isSubsequenceOf = undefined;

var elem = exports.elem = (0, _util._curry)(function (x, xs) {
  return xs.indexOf(x) !== -1;
});

var notElem = exports.notElem = (0, _util._curry)(function (x, xs) {
  return xs.indexOf(x) === -1;
});

var filter = exports.filter = (0, _util._curry)(function (fn, ls) {
  return ls.filter(fn);
});

var partition = exports.partition = (0, _util._curry)(function (pred, xs) {
  var as = [];
  var bs = [];
  xs.forEach(function (x) {
    if (pred(x)) {
      as.push(x);
    } else {
      bs.push(x);
    }
  });
  return [as, bs];
});

var index = exports.index = (0, _util._curry)(function (ls, i) {
  if (i >= ls.length) {
    return (0, _util.error)('List.index: index too large');
  }
  if (i < 0) {
    return (0, _util.error)('List.index: negative index');
  }
  return ls[i];
});

var elemIndex = exports.elemIndex = (0, _util._curry)(function (l, ls) {
  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (l === ls[i]) {
      return { just: i };
    }
  }
  return { nothing: null };
});

var elemIndices = exports.elemIndices = (0, _util._curry)(function (x, xs) {
  var ys = [];
  xs.forEach(function (y, i) {
    return y === x && ys.push(i);
  });
  return ys;
});

var findIndex = exports.findIndex = (0, _util._curry)(function (prd, ls) {
  var length = ls.length;
  for (var i = 0; i < length; i += 1) {
    if (prd(ls[i])) {
      return { just: i };
    }
  }
  return { nothing: null };
});

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

var zip = exports.zip = (0, _util._curry)(function (xs, ys) {
  var ret = [];
  var len = xs.length < ys.length ? xs.length : ys.length;
  for (var i = 0; i < len; i += 1) {
    ret.push([xs[i], ys[i]]);
  }
  return ret;
});

var zipWith = exports.zipWith = (0, _util._curry)(function (fn, xs, ys) {
  var res = [];
  var len = xs.length < ys.length ? xs.length : ys.length;
  for (var i = 0; i < len; i += 1) {
    res.push(fn(xs[i], ys[i]));
  }
  return res;
});

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
var lines = exports.lines = function lines(str) {
  return str.split('\n');
};

var words = exports.words = function words(str) {
  return str.split(' ');
};

var unlines = exports.unlines = function unlines(xs) {
  return xs.join('\n');
};

var unwords = exports.unwords = function unwords(xs) {
  return xs.join(' ');
};

var nub = exports.nub = function nub(xs) {
  var list = [];
  xs.forEach(function (x) {
    return list.indexOf(x) === -1 && list.push(x);
  });
  return list;
};

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

var sort = exports.sort = undefined;

var sortOn = exports.sortOn = undefined;

var insert = exports.insert = undefined;

var nubBy = exports.nubBy = undefined;

var deleteBy = exports.deleteBy = undefined;

var deleteFirstsBy = exports.deleteFirstsBy = undefined;

var unionBy = exports.unionBy = undefined;

var intersectBy = exports.intersectBy = undefined;

var groupBy = exports.groupBy = undefined;

var sortBy = exports.sortBy = undefined;

var insertBy = exports.insertBy = undefined;

var maximumBy = exports.maximumBy = undefined;

var minimumBy = exports.minimumBy = undefined;