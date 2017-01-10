'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propExists = exports.cond = exports.checkKind = exports.twoKind = exports.emptyKind = exports.newKind = exports.constant = exports._curry = exports._notUndefined = exports._lazy = exports.error = exports.False = exports.True = exports.id = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
  if (!(typeof str === 'string')) {
    throw new TypeError('Value of argument "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
  }

  throw new Error('haskind.' + str);
};

// =============================================================================

var _lazy = exports._lazy = function _lazy(fn, args) {
  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(args)) {
    throw new TypeError('Value of argument "args" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(args));
  }

  return function () {
    return fn.apply(undefined, args);
  };
};

var _notUndefined = exports._notUndefined = function _notUndefined(x, fn) {
  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  return type(x) === 'undefined' ? fn() : x;
};

var _curry = exports._curry = function _curry(fn) {
  function _ref4(_id4) {
    if (!(typeof _id4 === 'function')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(_id4));
    }

    return _id4;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  return _ref4(function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!Array.isArray(args)) {
      throw new TypeError('Value of argument "args" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(args));
    }

    if (args.length >= fn.length) return fn.apply(null, args);else return args.reduce(function (f, a) {
      return _curry(f.bind(undefined, a));
    }, fn);
  });
};

// NOTE: Moving to Data.Function
// eslint-disable-next-line
var constant = exports.constant = _curry(function (a, b) {
  return a;
});

// =============================================================================

var newKind = exports.newKind = function newKind(name) {
  return function (value) {
    return (0, _defineProperty3.default)({}, name, value);
  };
};
var emptyKind = exports.emptyKind = function emptyKind(name) {
  return function (arbit) {
    return (0, _defineProperty3.default)({}, name, null);
  };
}; // eslint-disable-line
var twoKind = exports.twoKind = function twoKind(n1, n2) {
  return function (v1, v2) {
    var _ref10;

    return _ref10 = {}, (0, _defineProperty3.default)(_ref10, n1, v1), (0, _defineProperty3.default)(_ref10, n2, v2), _ref10;
  };
};

var checkKind = exports.checkKind = _curry(function (name, a) {
  return !!a[name];
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

  if (!Array.isArray(args)) {
    throw new TypeError('Value of argument "args" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(args));
  }

  return function (pair // eslint-disable-line
  ) {
    if (!(Array.isArray(pair) && pair.every(function (item) {
      return typeof item === 'function';
    }))) {
      throw new TypeError('Value of argument "pair" violates contract.\n\nExpected:\nFunction[]\n\nGot:\n' + _inspect(pair));
    }

    return pair[1].apply(pair, (0, _toConsumableArray3.default)(args));
  };
};

var undefinedCond = [[True, constant(undefined)]];

if (!(Array.isArray(undefinedCond) && undefinedCond.every(function (item) {
  return Array.isArray(item) && item.every(function (item) {
    return typeof item === 'function';
  });
}))) {
  throw new TypeError('Value of variable "undefinedCond" violates contract.\n\nExpected:\nFunction[][]\n\nGot:\n' + _inspect(undefinedCond));
}

var cond = exports.cond = function cond(ps) {
  function _ref6(_id6) {
    if (!(typeof _id6 === 'function')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(_id6));
    }

    return _id6;
  }

  if (!(Array.isArray(ps) && ps.every(function (item) {
    return Array.isArray(item) && item.every(function (item) {
      return typeof item === 'function';
    });
  }))) {
    throw new TypeError('Value of argument "ps" violates contract.\n\nExpected:\nFunction[][]\n\nGot:\n' + _inspect(ps));
  }

  return _ref6(function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (!Array.isArray(args)) {
      throw new TypeError('Value of argument "args" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(args));
    }

    return ps.concat(undefinedCond).filter(condCheck.apply(undefined, (0, _toConsumableArray3.default)(args))).map(condApply.apply(undefined, (0, _toConsumableArray3.default)(args)))[0];
  });
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