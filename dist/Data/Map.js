'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertWith = exports.insert = exports.singleton = exports.empty = exports.lookupGE = exports.lookupLE = exports.lookupGT = exports.lookupLT = exports.findWithDefault = exports.lookup = exports.notMember = exports.member = exports.size = exports.null_ = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _util = require('../util');

var _Maybe = require('./Maybe');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var null_ = exports.null_ = function null_(m) {
  return (0, _keys2.default)(m).length === 0;
};

var size = exports.size = function size(m) {
  return (0, _keys2.default)(m).length;
};

var member = exports.member = (0, _util._curry)(function (x, obj) {
  return typeof obj[x] !== 'undefined';
});

var notMember = exports.notMember = (0, _util._curry)(function (x, obj) {
  return typeof obj[x] === 'undefined';
});

var lookup = exports.lookup = (0, _util._curry)(function (key, obj) {
  return member(key, obj) ? (0, _Maybe.Just)(obj[key]) : (0, _Maybe.Nothing)();
});

var findWithDefault = exports.findWithDefault = (0, _util._curry)(function (def, key, obj) {
  return member(key, obj) ? obj[key] : def;
});

var lookupLT = exports.lookupLT = undefined;

var lookupGT = exports.lookupGT = undefined;

var lookupLE = exports.lookupLE = undefined;

var lookupGE = exports.lookupGE = undefined;

var empty = exports.empty = {};

var singleton = exports.singleton = (0, _util._curry)(function (key, value) {
  return (0, _assign2.default)({}, (0, _defineProperty3.default)({}, key, value));
});

var insert = exports.insert = (0, _util._curry)(function (key, value, obj) {
  return (0, _assign2.default)({}, obj, (0, _defineProperty3.default)({}, key, value));
});

var insertWith = exports.insertWith = (0, _util._curry)(function (fn, key, val, mp) {
  var res = (0, _assign2.default)({}, mp);
  if (res[key]) {
    res[key] = fn(val, mp[key]);
  } else {
    res[key] = val;
  }
  return res;
});