"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// id :: a -> a
var id = exports.id = undefined;

// const_ :: a -> b -> a
var const_ = exports.const_ = undefined;

// (.) | compose :: (b -> c) -> (a -> b) -> a -> c
var compose = exports.compose = undefined;

// flip :: (a -> b -> c) -> b -> a -> c
var flip = exports.flip = undefined;

// ($) | pipe :: (a -> b) -> a -> b
var ap = exports.ap = undefined;

// (&) | apply :: a -> (a -> b) -> b
var app = exports.app = undefined;

// fix :: (a -> a) -> a
var fix = exports.fix = undefined;

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
var on = exports.on = undefined;