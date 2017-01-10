"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = exports.uncurry = exports.curry = exports.snd = exports.fst = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fst :: (a, b) -> a
var fst = exports.fst = function fst(_ref4) {
  var _ref5 = (0, _slicedToArray3.default)(_ref4, 1),
      a = _ref5[0];

  return a;
};

// snd :: (a, b) -> b
var snd = exports.snd = function snd(_ref6) {
  var _ref7 = (0, _slicedToArray3.default)(_ref6, 2),
      b = _ref7[1];

  return b;
};

// curry :: ((a, b) -> c) -> a -> b -> c
var curry = exports.curry = undefined;

// uncurry :: (a -> b -> c) -> (a, b) -> c
var uncurry = exports.uncurry = undefined;

// swap :: (a, b) -> (b, a)
var swap = exports.swap = function swap(_ref8) {
  var _ref9 = (0, _slicedToArray3.default)(_ref8, 2),
      a = _ref9[0],
      b = _ref9[1];

  function _ref3(_id3) {
    if (!Array.isArray(_id3)) {
      throw new TypeError("Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n" + _inspect(_id3));
    }

    return _id3;
  }

  return _ref3([b, a]);
};

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