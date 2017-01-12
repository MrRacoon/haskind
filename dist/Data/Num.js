'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lcm = exports.gcd = exports.odd = exports.even = exports.subtract = exports.add = undefined;

var _util = require('../util');

// add :: Num a => a -> a -> a
var add = exports.add = (0, _util._curry)(function (x, y) {
  return x + y;
});

// subtract :: Num a => a -> a -> a
var subtract = exports.subtract = (0, _util._curry)(function (x, y) {
  return y - x;
});

// even :: Integral a => a -> Bool
var even = exports.even = function even(x) {
  return x % 2 === 0;
};

// odd :: Integral a => a -> Bool
var odd = exports.odd = function odd(x) {
  return x % 2 !== 0;
};

// gcd :: Integral a => a -> a -> a
var gcd = exports.gcd = undefined;

// lcm :: Integral a => a -> a -> a
var lcm = exports.lcm = undefined;

// (^) :: (Num a, Integral b) => a -> b -> a
// (^^) :: (Fractional a, Integral b) => a -> b -> a