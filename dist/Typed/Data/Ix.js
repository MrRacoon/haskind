'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeSize = exports.index = exports.inRange = exports.range = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// range :: (a, a) -> [a]
var range = exports.range = function range(_ref5) {
  var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
      a = _ref6[0],
      b = _ref6[1];

  function _ref(_id) {
    if (!(Array.isArray(_id) && _id.every(function (item) {
      return typeof item === 'number';
    }))) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber[]\n\nGot:\n' + _inspect(_id));
    }

    return _id;
  }

  return _ref([].concat((0, _toConsumableArray3.default)(Array(b - a).keys())).map(function (x) {
    return x + a;
  }));
};

// inRange :: (a, a) -> a -> Bool
var inRange = exports.inRange = (0, _util._curry)(function (_ref7, i) {
  var _ref8 = (0, _slicedToArray3.default)(_ref7, 2),
      a = _ref8[0],
      b = _ref8[1];

  if (!(typeof i === 'number')) {
    throw new TypeError('Value of argument "i" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(i));
  }

  return a <= i && i <= b;
});

// index :: (a, a) -> a -> Int
var index = exports.index = (0, _util._curry)(function (_ref9, i) {
  var _ref10 = (0, _slicedToArray3.default)(_ref9, 2),
      a = _ref10[0],
      b = _ref10[1];

  function _ref3(_id3) {
    if (!(typeof _id3 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id3));
    }

    return _id3;
  }

  if (!(typeof i === 'number')) {
    throw new TypeError('Value of argument "i" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(i));
  }

  return _ref3(inRange([a, b], i) ? i - a : (0, _util.error)('Ix.index: index out of range'));
});

// rangeSize :: (a, a) -> Int
var rangeSize = exports.rangeSize = function rangeSize(_ref11) {
  var _ref12 = (0, _slicedToArray3.default)(_ref11, 2),
      a = _ref12[0],
      b = _ref12[1];

  function _ref4(_id4) {
    if (!(typeof _id4 === 'number')) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id4));
    }

    return _id4;
  }

  return _ref4(b - a);
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