"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enumFromThenTo = exports.enumFromTo = exports.enumFromThen = exports.enumFrom = exports.fromEnum = exports.toEnum = exports.pred = exports.succ = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// succ :: a -> a
var succ = exports.succ = function succ(x) {
  function _ref(_id) {
    if (!(typeof _id === 'number')) {
      throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id));
    }

    return _id;
  }

  if (!(typeof x === 'number')) {
    throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
  }

  return _ref(x + 1);
};

// pred :: a -> a
var pred = exports.pred = function pred(x) {
  function _ref2(_id2) {
    if (!(typeof _id2 === 'number')) {
      throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id2));
    }

    return _id2;
  }

  if (!(typeof x === 'number')) {
    throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
  }

  return _ref2(x - 1);
};

// toEnum :: Int -> a
var toEnum = exports.toEnum = undefined;

// fromEnum :: a -> Int
var fromEnum = exports.fromEnum = undefined;

// enumFrom :: a -> [a]
var enumFrom = exports.enumFrom = undefined;

// enumFromThen :: a -> a -> [a]
var enumFromThen = exports.enumFromThen = undefined;

// enumFromTo :: a -> a -> [a]
var enumFromTo = exports.enumFromTo = undefined;

// enumFromThenTo :: a -> a -> a -> [a]
var enumFromThenTo = exports.enumFromThenTo = undefined;

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
    return typeof input === "undefined" ? "undefined" : (0, _typeof3.default)(input);
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

      if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
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