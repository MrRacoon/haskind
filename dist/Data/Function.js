'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = exports.fix = exports.app = exports.ap = exports.flip = exports.compose = exports.const_ = exports.id = undefined;

var _util = require('../util');

// id :: a -> a
var id = exports.id = function id(x) {
  return x;
};

// const_ :: a -> b -> a
var const_ = exports.const_ = (0, _util._curry)(function (a, b) {
  return a;
}); // eslint-disable-line

// (.) | compose :: (b -> c) -> (a -> b) -> a -> c
var compose = exports.compose = undefined;

// flip :: (a -> b -> c) -> b -> a -> c
var flip = exports.flip = undefined;

// ($) | pipe :: (a -> b) -> a -> b
var ap = exports.ap = undefined;

// (&) | apply :: a -> (a -> b) -> b
var app = exports.app = undefined;

// fix :: (a -> a) -> a
var fix = exports.fix = undefined;

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
var on = exports.on = undefined;