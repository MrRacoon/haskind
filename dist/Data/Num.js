'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lcm = exports.gcd = exports.odd = exports.even = exports.subtract = exports.add = undefined;

var _util = require('../util');

var add = exports.add = (0, _util._curry)(function (x, y) {
  return x + y;
});

var subtract = exports.subtract = (0, _util._curry)(function (x, y) {
  return y - x;
});

var even = exports.even = function even(x) {
  return x % 2 === 0;
};

var odd = exports.odd = function odd(x) {
  return x % 2 !== 0;
};

var gcd = exports.gcd = undefined;

var lcm = exports.lcm = undefined;