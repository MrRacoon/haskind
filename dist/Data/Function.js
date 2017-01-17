'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = exports.fix = exports.apply = exports.flip = exports.compose = exports.comp = exports.pipe = exports.const_ = exports.id = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = exports.id = function id(x) {
  return x;
};

var const_ = exports.const_ = (0, _util._curry)(function (a, b) {
  return a;
});var pipe = exports.pipe = (0, _util._curry)(function (fns, args) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(fns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fn = _step.value;

      args = [fn.apply(null, args)];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return args[0];
});

var comp = exports.comp = (0, _util._curry)(function (fns, args) {
  return pipe(fns.reverse(), args);
});

var compose = exports.compose = (0, _util._curry)(function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return pipe(fns.reverse(), args);
  };
});

var flip = exports.flip = (0, _util._curry)(function (f, a, b) {
  return f(b, a);
});

var apply = exports.apply = (0, _util._curry)(function (arg, fn) {
  return fn(arg);
});

var fix = exports.fix = undefined;

var on = exports.on = (0, _util._curry)(function (g, f, a, b) {
  return g(f(a), f(b));
});