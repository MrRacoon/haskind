'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bool = exports.otherwise = exports.not = exports.or = exports.and = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// and :: Bool -> Bool -> Bool
var and = exports.and = (0, _util._curry)(function (x, y) {
  function _ref(_id) {
    if (!(typeof _id === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id));
    }

    return _id;
  }

  return _ref(x && y);
});

// or :: Bool -> Bool -> Bool

if (!(typeof and === 'function')) {
  throw new TypeError('Value of variable "and" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(and));
}

var or = exports.or = (0, _util._curry)(function (x, y) {
  function _ref2(_id2) {
    if (!(typeof _id2 === 'boolean')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id2));
    }

    return _id2;
  }

  return _ref2(x || y);
});

// not :: Bool -> Bool

if (!(typeof or === 'function')) {
  throw new TypeError('Value of variable "or" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(or));
}

var not = exports.not = function not(x) {
  return !x;
};

// otherwise :: Bool
var otherwise = exports.otherwise = true;

// bool :: a -> a -> Bool -> a
var bool = exports.bool = (0, _util._curry)(function (x, y, p) {
  return p ? y : x;
});

if (!(typeof bool === 'function')) {
  throw new TypeError('Value of variable "bool" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(bool));
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