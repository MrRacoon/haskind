"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = exports.uncurry = exports.curry = exports.snd = exports.fst = undefined;

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fst = exports.fst = function fst(_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 1),
      a = _ref2[0];

  return a;
};

var snd = exports.snd = function snd(_ref3) {
  var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
      b = _ref4[1];

  return b;
};

var curry = exports.curry = undefined;

var uncurry = exports.uncurry = undefined;

var swap = exports.swap = function swap(_ref5) {
  var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
      a = _ref6[0],
      b = _ref6[1];

  return [b, a];
};