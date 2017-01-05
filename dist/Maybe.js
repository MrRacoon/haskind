'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMaybe = exports.catMaybes = exports.maybeToList = exports.listToMaybe = exports.fromMaybe = exports.fromJust = exports.isNothing = exports.isJust = exports.maybe = exports.Nothing = exports.Just = undefined;

var _util = require('./util');

// Just :: * -> *
var Just = exports.Just = (0, _util.newKind)('just');

// Nothing :: () -> *
var Nothing = exports.Nothing = (0, _util.emptyKind)('nothing');

var maybe = exports.maybe = (0, _util._curry)(function (def, fn, m) {
  if (isNothing(m)) return def;
  if (isJust(m)) return fn(m.just);
  return (0, _util.error)('Maybe.maybe: third argument should have type maybe');
});

// isJust :: Maybe a -> Bool
var isJust = exports.isJust = function isJust(m) {
  return (0, _util.type)(m) === 'Maybe' && (0, _util.type)(m.just) !== 'undefined';
};

// isNothing :: Maybe a -> Bool
var isNothing = exports.isNothing = function isNothing(m) {
  return (0, _util.type)(m) === 'Maybe' && (0, _util.type)(m.nothing) !== 'undefined';
};

// fromJust :: Maybe a -> a
var fromJust = exports.fromJust = function fromJust(m) {
  return isJust(m) ? m.just : (0, _util.error)('Maybe.fromJust: Nothing');
};

// fromMaybe :: a -> Maybe a -> a
var fromMaybe = exports.fromMaybe = function fromMaybe(def, m) {
  return isJust(m) ? m.just : def;
};

// listToMaybe :: [a] -> Maybe a
var listToMaybe = exports.listToMaybe = function listToMaybe(ls) {
  return ls.length ? Just(ls[0]) : Nothing();
};

// maybeToList :: Maybe a -> [a]
var maybeToList = exports.maybeToList = function maybeToList(m) {
  return isJust(m) ? [fromJust(m)] : [];
};

// catMaybes :: [Maybe a] -> [a]
var catMaybes = exports.catMaybes = function catMaybes(ls) {
  return ls.filter(isJust).map(fromJust);
};

// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
var mapMaybe = exports.mapMaybe = (0, _util._curry)(function (fn, ls) {
  return catMaybes(ls.map(fn));
});