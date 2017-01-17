'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isString = exports.isString = function isString(x) {
  return typeof x === 'string';
};

var fromString = exports.fromString = function fromString(str) {
  return str.split('');
};

var toString = exports.toString = function toString(ls) {
  return ls.join('');
};