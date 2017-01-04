'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeSize = exports.index = exports.inRange = exports.range = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// range :: (a, a) -> [a]
var range = exports.range = (0, _util._curry)(function (i, n) {
  return [].concat((0, _toConsumableArray3.default)(Array(n - i).keys())).map(function (x) {
    return x + i;
  });
});

// inRange :: (a, a) -> a -> Bool
var inRange = exports.inRange = (0, _util._curry)(function (_ref, i) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  return a <= i && i <= b;
});

// index :: (a, a) -> a -> Int
var index = exports.index = (0, _util._curry)(function (_ref3, i) {
  var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
      a = _ref4[0],
      b = _ref4[1];

  return inRange([a, b], i) ? i - a : (0, _util.error)('Ix.index: index out of range');
});

// rangeSize :: (a, a) -> Int
var rangeSize = exports.rangeSize = function rangeSize(_ref5) {
  var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
      a = _ref6[0],
      b = _ref6[1];

  return b - a;
};