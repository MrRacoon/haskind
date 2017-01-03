'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notEq = exports.eq = undefined;

var _util = require('./util');

// eq :: a -> a -> Bool
var eq = exports.eq = (0, _util._curry)(function (a, b) {
  return a === b;
});

// notEq :: a -> a -> Bool
var notEq = exports.notEq = (0, _util._curry)(function (a, b) {
  return a !== b;
});