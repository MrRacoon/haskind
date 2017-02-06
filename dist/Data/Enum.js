"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var succ = exports.succ = function succ(x) {
  return x + 1;
};

var pred = exports.pred = function pred(x) {
  return x - 1;
};

var toEnum = exports.toEnum = function toEnum(c) {
  return String.fromCharCode(c);
};

var fromEnum = exports.fromEnum = function fromEnum(c) {
  return c.charCodeAt(0);
};

var enumFrom = exports.enumFrom = undefined;

var enumFromThen = exports.enumFromThen = undefined;

var enumFromTo = exports.enumFromTo = undefined;

var enumFromThenTo = exports.enumFromThenTo = undefined;