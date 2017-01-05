"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// id :: a -> a
var id = exports.id = undefined;

// const :: a -> b -> a
var const_ = exports.const_ = undefined;

// (.) :: (b -> c) -> (a -> b) -> a -> c
var comp = exports.comp = undefined;

// flip :: (a -> b -> c) -> b -> a -> c
var flip = exports.flip = undefined;

// ($) :: (a -> b) -> a -> b
var ap = exports.ap = undefined;

// (&) :: a -> (a -> b) -> b
var app = exports.app = undefined;

// fix :: (a -> a) -> a
var fix = exports.fix = undefined;

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
var on = exports.on = undefined;