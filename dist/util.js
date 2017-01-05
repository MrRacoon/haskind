'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propExists = exports.cond = exports.constant = exports._curry = exports._notUndefined = exports._lazy = exports.error = exports.False = exports.True = exports.id = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.type = type;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: moving to Data.Function
var id = exports.id = function id(a) {
  return a;
};

var True = exports.True = function True() {
  return true;
};
var False = exports.False = function False() {
  return false;
};

var error = exports.error = function error(str) {
  throw new Error('haskind.' + str);
};

// =============================================================================

var _lazy = exports._lazy = function _lazy(fn, args) {
  return function () {
    return fn.apply(undefined, args);
  };
};

var _notUndefined = exports._notUndefined = function _notUndefined(x, fn) {
  return type(x) === 'undefined' ? fn() : x;
};

var _curry = exports._curry = function _curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= fn.length) return fn.apply(null, args);else return args.reduce(function (f, a) {
      return _curry(f.bind(undefined, a));
    }, fn);
  };
};

// NOTE: Moving to Data.Function
// eslint-disable-next-line
var constant = exports.constant = _curry(function (a, b) {
  return a;
});

// =============================================================================

var condCheck = function condCheck() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return function (pair) {
    return (// eslint-disable-line
      pair[0].apply(pair, args)
    );
  };
};

var condApply = function condApply() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return function (pair // eslint-disable-line
  ) {
    return pair[1].apply(pair, (0, _toConsumableArray3.default)(args));
  };
};

var undefinedCond = [[True, constant(undefined)]];

var cond = exports.cond = function cond(ps) {
  return function () {
    return ps.concat(undefinedCond).filter(condCheck.apply(undefined, arguments)).map(condApply.apply(undefined, arguments))[0];
  };
};

var propExists = exports.propExists = function propExists(prop, obj) {
  return typeof obj[prop] !== 'undefined';
};

function type(x) {
  switch (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) {
    case 'object':
      switch (true) {
        case x === null:
          return 'Null';
        case x instanceof _map2.default:
          return 'Map';
        case x instanceof _set2.default:
          return 'Set';
        case Array.isArray(x):
          return 'Array';
        case propExists('right', x):
          return 'Either';
        case propExists('left', x):
          return 'Either';
        case propExists('just', x):
          return 'Maybe';
        case propExists('nothing', x):
          return 'Maybe';
        default:
          return 'Object';
      }
    case 'string':
      return 'String';
    case 'boolean':
      return 'Boolean';
    case 'number':
      return 'Number';
    default:
      return typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x);
  }
}