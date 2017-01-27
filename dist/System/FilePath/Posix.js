'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPathSeparator = isPathSeparator;
exports.isSearchPathSeparator = isSearchPathSeparator;
exports.isExtSeparator = isExtSeparator;
exports.splitSearchPath = splitSearchPath;
exports.splitExtension = splitExtension;
exports.takeExtension = takeExtension;
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

function splitSearchPath(str) {
  return str.split(searchPathSeparator).map(function (x) {
    return x === '' ? '.' : x;
  });
}
function splitExtension(p) {
  var path = p.split('');
  var len = path.length;
  for (var i = len; i >= 0; i -= 1) {
    if (isExtSeparator(path[i])) {
      return [path.slice(0, i).join(''), path.slice(i, len).join('')];
    }
  }
  return path;
}

function takeExtension(p) {
  var path = p.split('');
  var len = path.length;
  for (var i = len; i >= 0; i -= 1) {
    if (isExtSeparator(path[i])) {
      return path.slice(i, len).join('');
    }
  }
  return path;
}