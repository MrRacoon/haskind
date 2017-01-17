'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bool = exports.otherwise = exports.not = exports.or = exports.and = undefined;

var _util = require('../util');

var and = exports.and = (0, _util._curry)(function (x, y) {
  return x && y;
});

var or = exports.or = (0, _util._curry)(function (x, y) {
  return x || y;
});

var not = exports.not = function not(x) {
  return !x;
};

var otherwise = exports.otherwise = true;

var bool = exports.bool = (0, _util._curry)(function (x, y, p) {
  return p ? y : x;
});