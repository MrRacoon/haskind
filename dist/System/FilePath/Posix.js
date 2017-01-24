'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pathSeparator = exports.pathSeparator = '/';

var pathSeparators = exports.pathSeparators = ['/'];

var isPathSeparator = exports.isPathSeparator = function isPathSeparator(c) {
  return pathSeparators.indexOf(c) > -1;
};