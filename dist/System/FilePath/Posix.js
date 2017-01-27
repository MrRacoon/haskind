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

var replaceExtension = exports.replaceExtension = (0, _util._curry)(function replaceExtension(fp, s) {
  return fp.replace(/[^.][\w]*$/, s);
});

function dropExtension(p) {
  var path = p.split('');
  var len = path.length;
  for (var i = len; i >= 0; i -= 1) {
    if (isExtSeparator(path[i])) {
      return path.slice(0, i).join('');
    }
  }
  return path;
}

var addExtension = exports.addExtension = (0, _util._curry)(function addExtension(fp, s) {
  return '' + fp + extSeparator + s;
});

var hasExtension = exports.hasExtension = function hasExtension(fp) {
  return fp.indexOf(extSeparator) > -1;
};

var splitExtensions = exports.splitExtensions = function splitExtensions(fp) {
  var _fp$split = fp.split(extSeparator),
      _fp$split2 = (0, _toArray3.default)(_fp$split),
      x = _fp$split2[0],
      xs = _fp$split2.slice(1);

  return [x, '.' + xs.join(extSeparator)];
};

var dropExtensions = exports.dropExtensions = function dropExtensions(fp) {
  var _fp$split3 = fp.split(extSeparator),
      _fp$split4 = (0, _slicedToArray3.default)(_fp$split3, 1),
      x = _fp$split4[0];

  return x;
};

var takeExtensions = exports.takeExtensions = function takeExtensions(fp) {
  var _fp$split5 = fp.split(extSeparator),
      _fp$split6 = (0, _toArray3.default)(_fp$split5),
      xs = _fp$split6.slice(1);

  return '.' + xs.join(extSeparator);
};

var replaceExtensions = exports.replaceExtensions = (0, _util._curry)(function replaceExtensions(fp, s) {
  var _fp$split7 = fp.split(extSeparator),
      _fp$split8 = (0, _slicedToArray3.default)(_fp$split7, 1),
      x = _fp$split8[0];

  return x + '.' + s;
});

var stripExtension = exports.stripExtension = (0, _util._curry)(function stripExtension(s, fp) {
  var idx = fp.indexOf(s);
  return idx === -1 ? Nothing() : Just(fp.slice(0, idx));
});

var splitFileName = exports.splitFileName = function splitFileName(fp) {
  var _fp$split9 = fp.split('/'),
      _fp$split10 = (0, _toArray3.default)(_fp$split9),
      xs = _fp$split10;

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
  return paths.slice(0, len - 1).join('/') + '/' + s;
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