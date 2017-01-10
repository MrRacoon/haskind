"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// isString :: String -> Bool
var isString = exports.isString = undefined;

/*

The following functions don't really make sense in javascript, because Haskell
is taking advatage of it's ability to infer type.

Would it be helpful to make them conversions between strings and lists of
strings?

ie:

fromString("string") === ['s', 't', 'r', 'i', 'n', 'g']

toString(['s', 't', 'r', 'i', 'n', 'g']) === "string"

*/

// fromString :: String -> a
var fromString = exports.fromString = undefined;

// toString :: a -> String
var toString = exports.toString = undefined;

/*

The following are already defined in Data.List. Where *should* they go? I feel
like they need to only be defined once.

// lines :: String -> [String]
export const lines = undefined

// words :: String -> [String]
export const words = undefined

// unlines :: [String] -> String
export const unlines = undefined

// unwords :: [String] -> String
export const unwords = undefined

*/