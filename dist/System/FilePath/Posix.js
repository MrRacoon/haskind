'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPathSeparator = isPathSeparator;
exports.isSearchPathSeparator = isSearchPathSeparator;
exports.isExtSeparator = isExtSeparator;
var pathSeparator = exports.pathSeparator = '/';

var pathSeparators = exports.pathSeparators = ['/'];

function isPathSeparator(c) {
  return pathSeparators.indexOf(c) > -1;
}

var searchPathSeparator = exports.searchPathSeparator = ':';

function isSearchPathSeparator(c) {
  return c === searchPathSeparator;
}

var extSeparator = exports.extSeparator = '.';

function isExtSeparator(c) {
  return c === extSeparator;
}