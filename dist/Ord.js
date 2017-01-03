'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparing = exports.min = exports.max = exports.ge = exports.gt = exports.le = exports.lt = exports.compare = exports.Ordering = exports.GT = exports.EQ = exports.LT = undefined;

var _util = require('./util');

var LT = exports.LT = -1;
var EQ = exports.EQ = 0;
var GT = exports.GT = 1;

var Ordering = exports.Ordering = { LT: LT, EQ: EQ, GT: GT };

// compare :: a -> a -> Ordering
var compare = exports.compare = (0, _util._curry)(function (a, b) {
  return a < b ? LT : a === b ? EQ : GT;
});

// (<) :: a -> a -> Bool
var lt = exports.lt = (0, _util._curry)(function (a, b) {
  return a < b;
});

// (<=) :: a -> a -> Bool
var le = exports.le = (0, _util._curry)(function (a, b) {
  return a <= b;
});

// (>) :: a -> a -> Bool
var gt = exports.gt = (0, _util._curry)(function (a, b) {
  return a > b;
});

// (>=) :: a -> a -> Bool
var ge = exports.ge = (0, _util._curry)(function (a, b) {
  return a >= b;
});

// max :: a -> a -> a
var max = exports.max = (0, _util._curry)(function (a, b) {
  return a < b ? b : a;
});

// min :: a -> a -> a
var min = exports.min = (0, _util._curry)(function (a, b) {
  return a < b ? a : b;
});

// comparing :: Ord a => (b -> a) -> b -> b -> Ordering
var comparing = exports.comparing = (0, _util._curry)(function (fn, a, b) {
  return compare(fn(a), fn(b));
});