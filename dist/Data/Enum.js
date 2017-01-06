"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// succ :: a -> a
var succ = exports.succ = function succ(x) {
  return x + 1;
};

// pred :: a -> a
var pred = exports.pred = function pred(x) {
  return x - 1;
};

// toEnum :: Int -> a
var toEnum = exports.toEnum = undefined;

// fromEnum :: a -> Int
var fromEnum = exports.fromEnum = undefined;

// enumFrom :: a -> [a]
var enumFrom = exports.enumFrom = undefined;

// enumFromThen :: a -> a -> [a]
var enumFromThen = exports.enumFromThen = undefined;

// enumFromTo :: a -> a -> [a]
var enumFromTo = exports.enumFromTo = undefined;

// enumFromThenTo :: a -> a -> a -> [a]
var enumFromThenTo = exports.enumFromThenTo = undefined;