'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bool = exports.otherwise = exports.not = exports.or = exports.and = undefined;

var _util = require('../util');

// and :: Bool -> Bool -> Bool
var and = exports.and = (0, _util._curry)(function (x, y) {
  return x && y;
});

// or :: Bool -> Bool -> Bool
var or = exports.or = (0, _util._curry)(function (x, y) {
  return x || y;
});

// not :: Bool -> Bool
var not = exports.not = function not(x) {
  return !x;
};

// otherwise :: Bool
var otherwise = exports.otherwise = true;

// bool :: a -> a -> Bool -> a
var bool = exports.bool = (0, _util._curry)(function (x, y, p) {
  return p ? y : x;
});