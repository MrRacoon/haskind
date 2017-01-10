'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = exports.fix = exports.apply = exports.flip = exports.compose = exports.comp = exports.pipe = exports.const_ = exports.id = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require('babel-runtime/core-js/symbol/iterator');

var _iterator3 = _interopRequireDefault(_iterator2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// id :: a -> a
var id = exports.id = function id(x) {
  return x;
};

// const_ :: a -> b -> a
var const_ = exports.const_ = (0, _util._curry)(function (a, b) {
  return a;
}); // eslint-disable-line

// pipe :: [(a -> b)] -> [a] -> b
var pipe = exports.pipe = (0, _util._curry)(function (fns, args) {
  if (!(fns && (typeof fns[_iterator3.default] === 'function' || Array.isArray(fns)))) {
    throw new TypeError('Expected fns to be iterable, got ' + _inspect(fns));
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(fns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fn = _step.value;

      args = [fn.apply(null, args)];
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

  return args[0];
});

// comp :: [(a -> *)] -> a -> *
var comp = exports.comp = (0, _util._curry)(function (fns, args) {
  return pipe(fns.reverse(), args);
});

// (.) | compose :: (b -> c) -> (a -> b) -> a -> c
var compose = exports.compose = (0, _util._curry)(function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return pipe(fns.reverse(), args);
  };
});

// flip :: (a -> b -> c) -> b -> a -> c
var flip = exports.flip = (0, _util._curry)(function (f, a, b) {
  return f(b, a);
});

// (&) | apply :: a -> (a -> b) -> b
var apply = exports.apply = (0, _util._curry)(function (arg, fn) {
  return fn(arg);
});

// fix :: (a -> a) -> a
var fix = exports.fix = undefined;

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
var on = exports.on = (0, _util._curry)(function (g, f, a, b) {
  return g(f(a), f(b));
});

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