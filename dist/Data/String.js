'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// isString :: String -> Bool
var isString = exports.isString = function isString(x) {
  return typeof x === 'string';
};

// fromString :: String -> [Char]
var fromString = exports.fromString = function fromString(str) {
  return str.split('');
};

// toString :: [Char] -> String
var toString = exports.toString = function toString(ls) {
  return ls.join('');
};