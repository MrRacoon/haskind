'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwords = exports.unlines = exports.words = exports.lines = exports.unzip = exports.zipWith = exports.zip = exports.lookup = exports.notElem = exports.elem = exports.break_ = exports.span = exports.dropWhile = exports.takeWhile = exports.splitAt = exports.drop = exports.take = exports.concatMap = exports.concat = exports.all = exports.any = exports.reverse = exports.index = exports.length = exports.init = exports.tail = exports.last = exports.head = exports.filter = exports.append = exports.map = exports.undefined = exports.error = exports.apply = exports.flip = exports.pipe = exports.compose = exports.comp = exports.const_ = exports.id = exports.lcm = exports.gcd = exports.odd = exports.even = exports.subtract = exports.add = exports.pred = exports.succ = exports.min = exports.max = exports.ge = exports.gt = exports.le = exports.lt = exports.compare = exports.notEq = exports.eq = exports.snd = exports.fst = exports.GT = exports.EQ = exports.LT = exports.either = exports.Right = exports.Left = exports.maybe = exports.Just = exports.Nothing = exports.otherwise = exports.not = exports.or = exports.and = undefined;

var _util = require('./util');

var _Bool = require('./Data/Bool');

var _Ord = require('./Data/Ord');

var _Eq = require('./Data/Eq');

var _Tuple = require('./Data/Tuple');

var _Map = require('./Data/Map');

var _Maybe = require('./Data/Maybe');

var _Either = require('./Data/Either');

var _Enum = require('./Data/Enum');

var _Function = require('./Data/Function');

var _List = require('./Data/List');

var _Num = require('./Data/Num');

exports.and = _Bool.and;
exports.or = _Bool.or;
exports.not = _Bool.not;
exports.otherwise = _Bool.otherwise;
exports.Nothing = _Maybe.Nothing;
exports.Just = _Maybe.Just;
exports.maybe = _Maybe.maybe;
exports.Left = _Either.Left;
exports.Right = _Either.Right;
exports.either = _Either.either;
exports.LT = _Ord.LT;
exports.EQ = _Ord.EQ;
exports.GT = _Ord.GT;
exports.fst = _Tuple.fst;
exports.snd = _Tuple.snd;
exports.eq = _Eq.eq;
exports.notEq = _Eq.notEq;
exports.compare = _Ord.compare;
exports.lt = _Ord.lt;
exports.le = _Ord.le;
exports.gt = _Ord.gt;
exports.ge = _Ord.ge;
exports.max = _Ord.max;
exports.min = _Ord.min;
exports.succ = _Enum.succ;
exports.pred = _Enum.pred;
exports.add = _Num.add;
exports.subtract = _Num.subtract;
exports.even = _Num.even;
exports.odd = _Num.odd;
exports.gcd = _Num.gcd;
exports.lcm = _Num.lcm;
exports.id = _Function.id;
exports.const_ = _Function.const_;
exports.comp = _Function.comp;
exports.compose = _Function.compose;
exports.pipe = _Function.pipe;
exports.flip = _Function.flip;
exports.apply = _Function.apply;
exports.error = _util.error;
exports.undefined = undefined;
exports.map = _List.map;
exports.append = _List.append;
exports.filter = _List.filter;
exports.head = _List.head;
exports.last = _List.last;
exports.tail = _List.tail;
exports.init = _List.init;
exports.length = _List.length;
exports.index = _List.index;
exports.reverse = _List.reverse;
exports.any = _List.any;
exports.all = _List.all;
exports.concat = _List.concat;
exports.concatMap = _List.concatMap;
exports.take = _List.take;
exports.drop = _List.drop;
exports.splitAt = _List.splitAt;
exports.takeWhile = _List.takeWhile;
exports.dropWhile = _List.dropWhile;
exports.span = _List.span;
exports.break_ = _List.break_;
exports.elem = _List.elem;
exports.notElem = _List.notElem;
exports.lookup = _Map.lookup;
exports.zip = _List.zip;
exports.zipWith = _List.zipWith;
exports.unzip = _List.unzip;
exports.lines = _List.lines;
exports.words = _List.words;
exports.unlines = _List.unlines;
exports.unwords = _List.unwords;