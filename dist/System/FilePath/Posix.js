'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceBaseName = exports.takeBaseName = exports.dropFileName = exports.replaceFileName = exports.takeFileName = exports.splitFileName = exports.stripExtension = exports.replaceExtensions = exports.takeExtensions = exports.dropExtensions = exports.splitExtensions = exports.hasExtension = exports.addExtension = exports.replaceExtension = exports.extSeparator = exports.searchPathSeparator = exports.pathSeparators = exports.pathSeparator = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

exports.isPathSeparator = isPathSeparator;
exports.isSearchPathSeparator = isSearchPathSeparator;
exports.isExtSeparator = isExtSeparator;
exports.splitSearchPath = splitSearchPath;
exports.splitExtension = splitExtension;
exports.takeExtension = takeExtension;
exports.dropExtension = dropExtension;

var _util = require('../../util');

var _Data = require('../../Data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Just = _Data.Maybe.Just,
    Nothing = _Data.Maybe.Nothing;


var _split = function _split(fp) {
  if (!fp) return [[], '', []];
  var dirs = [];
  var dirSep = fp.lastIndexOf('/');
  if (dirSep > -1) dirs = fp.slice(0, dirSep).split('/');
  var filename = fp.slice(dirSep + 1);

  var _filename$split = filename.split(extSeparator),
      _filename$split2 = (0, _toArray3.default)(_filename$split),
      f = _filename$split2[0],
      es = _filename$split2.slice(1);

  return [dirs, f, es];
};

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
  return [p, ''];
}

function takeExtension(p) {
  var path = p.split('');
  var len = path.length;
  for (var i = len; i >= 0; i -= 1) {
    if (isExtSeparator(path[i])) {
      return path.slice(i, len).join('');
    }
  }
  return '';
}

var replaceExtension = exports.replaceExtension = (0, _util._curry)(function replaceExtension(fp, s) {
  var lastExtSep = fp.lastIndexOf(extSeparator);
  if (lastExtSep === -1) return fp + '.' + s;
  if (!s) return fp.slice(0, lastExtSep);
  return fp.slice(0, lastExtSep) + '.' + s;
});

function dropExtension(p) {
  if (!p) return '';
  var lastExtSep = p.lastIndexOf(extSeparator);
  if (lastExtSep === -1) return p;
  return p.slice(0, lastExtSep);
}

var addExtension = exports.addExtension = (0, _util._curry)(function addExtension(fp, s) {
  if (!s) return fp;
  return '' + fp + extSeparator + s;
});

var hasExtension = exports.hasExtension = function hasExtension(fp) {
  return fp.indexOf(extSeparator) > -1;
};

var splitExtensions = exports.splitExtensions = function splitExtensions(fp) {
  var _split2 = _split(fp),
      _split3 = (0, _slicedToArray3.default)(_split2, 3),
      dirs = _split3[0],
      file = _split3[1],
      exts = _split3[2];

  return [dirs.concat(file).join('/'), exts.length ? '.' + exts.join('.') : exts.join('.')];
};

var dropExtensions = exports.dropExtensions = function dropExtensions(fp) {
  var _split4 = _split(fp),
      _split5 = (0, _slicedToArray3.default)(_split4, 2),
      dirs = _split5[0],
      file = _split5[1];

  return dirs.concat([file]).join('/');
};

var takeExtensions = exports.takeExtensions = function takeExtensions(fp) {
  var _split6 = _split(fp),
      _split7 = (0, _slicedToArray3.default)(_split6, 3),
      exts = _split7[2];

  return exts.length ? '.' + exts.join('.') : '';
};

var replaceExtensions = exports.replaceExtensions = (0, _util._curry)(function replaceExtensions(fp, s) {
  var _split8 = _split(fp),
      _split9 = (0, _slicedToArray3.default)(_split8, 2),
      dirs = _split9[0],
      file = _split9[1];

  return dirs.concat([file]).join('/').concat('.' + s);
});

var stripExtension = exports.stripExtension = (0, _util._curry)(function stripExtension(s, fp) {
  var idx = fp.indexOf(s);
  return idx === -1 ? Nothing() : Just(fp.slice(0, idx));
});

var splitFileName = exports.splitFileName = function splitFileName(fp) {
  var _fp$split = fp.split('/'),
      _fp$split2 = (0, _toArray3.default)(_fp$split),
      xs = _fp$split2;

  var len = xs.length;
  return ['' + (len === 1 ? '.' : '') + xs.slice(0, len - 1).join('/') + '/', xs.reverse()[0]];
};

var takeFileName = exports.takeFileName = function takeFileName(fp) {
  var paths = fp.split('/');
  var len = paths.length;
  return paths[len - 1];
};

var replaceFileName = exports.replaceFileName = (0, _util._curry)(function replaceFileName(fp, s) {
  var paths = fp.split('/');
  var len = paths.length;
  return '' + (len > 1 ? paths.slice(0, len - 1).join('/') + '/' : '') + s;
});

var dropFileName = exports.dropFileName = function dropFileName(fp) {
  var paths = fp.split('/');
  var len = paths.length;
  return '' + (len === 1 ? '.' : '') + paths.slice(0, len - 1).join('/') + '/';
};

var takeBaseName = exports.takeBaseName = function takeBaseName(fp) {
  var paths = fp.split('/');
  var len = paths.length;

  var _paths$split = paths[len - 1].split('.'),
      _paths$split2 = (0, _slicedToArray3.default)(_paths$split, 1),
      file = _paths$split2[0];

  return file;
};

var replaceBaseName = exports.replaceBaseName = (0, _util._curry)(function (fp, s) {
  var paths = fp.split('/');
  var len = paths.length;

  var _paths$split3 = paths[len - 1].split('.'),
      _paths$split4 = (0, _slicedToArray3.default)(_paths$split3, 2),
      ext = _paths$split4[1];

  return '' + (len > 1 ? paths.slice(0, len - 1).join('/') + '/' : '') + s + '.' + ext;
});