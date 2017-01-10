'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionEithers = exports.isRight = exports.isLeft = exports.rights = exports.lefts = exports.fromRight = exports.fromLeft = exports.either = exports.Right = exports.Left = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Left = exports.Left = (0, _util.newKind)('left');
var Right = exports.Right = (0, _util.newKind)('right');

// either :: (a -> c) -> (b -> c) -> Either a b -> c
var either = exports.either = (0, _util._curry)(function (lfn, rfn, ethr) {
  if (isLeft(ethr)) {
    return lfn(ethr.left);
  }
  if (isRight(ethr)) {
    return lfn(ethr.right);
  }
});

var fromLeft = exports.fromLeft = function fromLeft(l) {
  return l.left;
};
var fromRight = exports.fromRight = function fromRight(r) {
  return r.right;
};

// lefts :: [Either a b] -> [a]
var lefts = exports.lefts = function lefts(es) {
  return es.filter(isLeft).map(fromLeft);
};

// rights :: [Either a b] -> [b]
var rights = exports.rights = function rights(es) {
  return es.filter(isRight).map(fromRight);
};

// isLeft :: Either a b -> Bool
var isLeft = exports.isLeft = function isLeft(l) {
  return (typeof l === 'undefined' ? 'undefined' : (0, _typeof3.default)(l)) === 'object' && typeof l.left !== 'undefined';
};

// isRight :: Either a b -> Bool
var isRight = exports.isRight = function isRight(r) {
  return (typeof r === 'undefined' ? 'undefined' : (0, _typeof3.default)(r)) === 'object' && typeof r.right !== 'undefined';
};

// partitionEithers :: [Either a b] -> ([a], [b])
var partitionEithers = exports.partitionEithers = function partitionEithers(es) {
  return [lefts(es), rights(es)];
};