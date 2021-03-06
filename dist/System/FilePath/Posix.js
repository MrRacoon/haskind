'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeValid = exports.isValid = exports.isAbsolute = exports.isRelative = exports.makeRelative = exports.equalFilePath = exports.normalise = exports.dropTrailingPathSeparator = exports.addTrailingPathSeparator = exports.hasTrailingPathSeparator = exports.isDrive = exports.dropDrive = exports.hasDrive = exports.takeDrive = exports.joinDrive = exports.splitDrive = exports.splitDirectories = exports.joinPath = exports.splitPath = exports.combine = exports.replaceDirectory = exports.takeDirectory = exports.replaceBaseName = exports.takeBaseName = exports.dropFileName = exports.replaceFileName = exports.takeFileName = exports.splitFileName = exports.stripExtension = exports.replaceExtensions = exports.takeExtensions = exports.dropExtensions = exports.splitExtensions = exports.hasExtension = exports.addExtension = exports.replaceExtension = exports.extSeparator = exports.searchPathSeparator = exports.pathSeparators = exports.pathSeparator = undefined;

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

function takeExtension(fp) {
  var _split2 = _split(fp),
      _split3 = (0, _slicedToArray3.default)(_split2, 3),
      exts = _split3[2];

  var len = exts.length;
  return len ? extSeparator + exts.reverse()[0] : '';
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
  var _split4 = _split(fp),
      _split5 = (0, _slicedToArray3.default)(_split4, 3),
      dirs = _split5[0],
      file = _split5[1],
      exts = _split5[2];

  return [dirs.concat(file).join('/'), exts.length ? '.' + exts.join('.') : exts.join('.')];
};

var dropExtensions = exports.dropExtensions = function dropExtensions(fp) {
  var _split6 = _split(fp),
      _split7 = (0, _slicedToArray3.default)(_split6, 2),
      dirs = _split7[0],
      file = _split7[1];

  return dirs.concat([file]).join('/');
};

var takeExtensions = exports.takeExtensions = function takeExtensions(fp) {
  var _split8 = _split(fp),
      _split9 = (0, _slicedToArray3.default)(_split8, 3),
      exts = _split9[2];

  return exts.length ? '.' + exts.join('.') : '';
};

var replaceExtensions = exports.replaceExtensions = (0, _util._curry)(function replaceExtensions(fp, s) {
  var _split10 = _split(fp),
      _split11 = (0, _slicedToArray3.default)(_split10, 2),
      dirs = _split11[0],
      file = _split11[1];

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
  return _split(fp)[1];
};

var replaceBaseName = exports.replaceBaseName = (0, _util._curry)(function (fp, s) {
  var _split12 = _split(fp),
      _split13 = (0, _slicedToArray3.default)(_split12, 3),
      dirs = _split13[0],
      exts = _split13[2];

  return dirs.concat([s].concat(exts).join(extSeparator)).join(pathSeparator);
});

var takeDirectory = exports.takeDirectory = function takeDirectory(fp) {
  var _split14 = _split(fp),
      _split15 = (0, _slicedToArray3.default)(_split14, 1),
      dirs = _split15[0];

  return (dirs.length ? dirs : ['.']).join(pathSeparator);
};

var replaceDirectory = exports.replaceDirectory = undefined;

var combine = exports.combine = undefined;

var splitPath = exports.splitPath = undefined;

var joinPath = exports.joinPath = undefined;

var splitDirectories = exports.splitDirectories = undefined;

var splitDrive = exports.splitDrive = undefined;

var joinDrive = exports.joinDrive = undefined;

var takeDrive = exports.takeDrive = undefined;

var hasDrive = exports.hasDrive = undefined;

var dropDrive = exports.dropDrive = undefined;

var isDrive = exports.isDrive = undefined;

var hasTrailingPathSeparator = exports.hasTrailingPathSeparator = undefined;

var addTrailingPathSeparator = exports.addTrailingPathSeparator = undefined;

var dropTrailingPathSeparator = exports.dropTrailingPathSeparator = undefined;

var normalise = exports.normalise = undefined;

var equalFilePath = exports.equalFilePath = undefined;

var makeRelative = exports.makeRelative = undefined;

var isRelative = exports.isRelative = undefined;

var isAbsolute = exports.isAbsolute = undefined;

var isValid = exports.isValid = undefined;

var makeValid = exports.makeValid = undefined;