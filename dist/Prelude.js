'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwords = exports.unlines = exports.words = exports.lines = exports.unzip = exports.zipWith = exports.zip = exports.lookup = exports.notElem = exports.elem = exports.break_ = exports.span = exports.dropWhile = exports.takeWhile = exports.splitAt = exports.drop = exports.take = exports.concatMap = exports.concat = exports.all = exports.any = exports.reverse = exports.index = exports.length = exports.init = exports.tail = exports.last = exports.head = exports.filter = exports.append = exports.map = exports.undefined = exports.error = exports.apply = exports.flip = exports.pipe = exports.compose = exports.comp = exports.const_ = exports.id = exports.pred = exports.succ = exports.min = exports.max = exports.ge = exports.gt = exports.le = exports.lt = exports.compare = exports.notEq = exports.eq = exports.snd = exports.fst = exports.GT = exports.EQ = exports.LT = exports.either = exports.Right = exports.Left = exports.maybe = exports.Just = exports.Nothing = exports.otherwise = exports.not = exports.or = exports.and = undefined;

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

// data Bool :: *
// = False
// | True
// (&&) :: Bool -> Bool -> Bool
// (||) :: Bool -> Bool -> Bool
// not :: Bool -> Bool
// otherwise :: Bool
exports.and = _Bool.and;
exports.or = _Bool.or;
exports.not = _Bool.not;
exports.otherwise = _Bool.otherwise;

// data Maybe a
// = Nothing
// | Just a
// maybe :: b -> (a -> b) -> Maybe a -> b

exports.Nothing = _Maybe.Nothing;
exports.Just = _Maybe.Just;
exports.maybe = _Maybe.maybe;

// data Either a b
// = Left a
// | Right b
// either :: (a -> c) -> (b -> c) -> Either a b -> c

exports.Left = _Either.Left;
exports.Right = _Either.Right;
exports.either = _Either.either;

// data Ordering :: *
// = LT
// | EQ
// | GT

exports.LT = _Ord.LT;
exports.EQ = _Ord.EQ;
exports.GT = _Ord.GT;

// data Char :: *

// type String = [Char]

// fst :: (a, b) -> a
// snd :: (a, b) -> b

exports.fst = _Tuple.fst;
exports.snd = _Tuple.snd;

// curry :: ((a, b) -> c) -> a -> b -> c
// uncurry :: (a -> b -> c) -> (a, b) -> c

// class Eq a where
// (==) :: a -> a -> Bool
// (/=) :: a -> a -> Bool

exports.eq = _Eq.eq;
exports.notEq = _Eq.notEq;

// class Eq a => Ord a where
// compare :: a -> a -> Ordering
// (<) :: a -> a -> Bool
// (<=) :: a -> a -> Bool
// (>) :: a -> a -> Bool
// (>=) :: a -> a -> Bool

exports.compare = _Ord.compare;
exports.lt = _Ord.lt;
exports.le = _Ord.le;
exports.gt = _Ord.gt;
exports.ge = _Ord.ge;

// max :: a -> a -> a
// min :: a -> a -> a

exports.max = _Ord.max;
exports.min = _Ord.min;

// class Enum a where

exports.succ = _Enum.succ;
exports.pred = _Enum.pred;

// class Bounded a where
// data Int :: *
// data Integer :: *
// data Float :: *
// data Double :: *
// type Rational = Ratio Integer
// data Word :: *
// class Num a where
// class (Num a, Ord a) => Real a where
// class (Real a, Enum a) => Integral a where
// class Num a => Fractional a where
// class Fractional a => Floating a where
// class (Real a, Fractional a) => RealFrac a where
// class (RealFrac a, Floating a) => RealFloat a where

// subtract :: Num a => a -> a -> a
// even :: Integral a => a -> Bool
// odd :: Integral a => a -> Bool
// gcd :: Integral a => a -> a -> a
// lcm :: Integral a => a -> a -> a
// (^) :: (Num a, Integral b) => a -> b -> a
// (^^) :: (Fractional a, Integral b) => a -> b -> a
// fromIntegral :: (Integral a, Num b) => a -> b
// realToFrac :: (Real a, Fractional b) => a -> b

// class Monoid a where
// class Functor f where
// (<$>) :: Functor f => (a -> b) -> f a -> f b

// class Functor f => Applicative f where
// class Applicative m => Monad m where
// mapM_ :: (Foldable t, Monad m) => (a -> m b) -> t a -> m ()
// sequence_ :: (Foldable t, Monad m) => t (m a) -> m ()
// (=<<) :: Monad m => (a -> m b) -> m a -> m b

// class Foldable t where
// class (Functor t, Foldable t) => Traversable t where

// id :: a -> a
// const :: a -> b -> a
// (.) :: (b -> c) -> (a -> b) -> a -> c
// flip :: (a -> b -> c) -> b -> a -> c
// ($) :: (a -> b) -> a -> b

exports.id = _Function.id;
exports.const_ = _Function.const_;
exports.comp = _Function.comp;
exports.compose = _Function.compose;
exports.pipe = _Function.pipe;
exports.flip = _Function.flip;
exports.apply = _Function.apply;

// until :: (a -> Bool) -> (a -> a) -> a -> a
// asTypeOf :: a -> a -> a
// error :: forall r. forall a. HasCallStack => [Char] -> a
// errorWithoutStackTrace :: forall r. forall a. [Char] -> a
// undefined :: forall r. forall a. HasCallStack => a

exports.error = _util.error;
exports.undefined = undefined;

// seq :: a -> b -> b
// ($!) :: (a -> b) -> a -> b
// map :: (a -> b) -> [a] -> [b]

exports.map = _List.map;

// (++) :: [a] -> [a] -> [a]

exports.append = _List.append;

// filter :: (a -> Bool) -> [a] -> [a]

exports.filter = _List.filter;

// head :: [a] -> a
// last :: [a] -> a
// tail :: [a] -> [a]
// init :: [a] -> [a]

exports.head = _List.head;
exports.last = _List.last;
exports.tail = _List.tail;
exports.init = _List.init;

// null :: Foldable t => t a -> Bool
// length :: Foldable t => t a -> Int
// (!!) :: [a] -> Int -> a
// reverse :: [a] -> [a]

exports.length = _List.length;
exports.index = _List.index;
exports.reverse = _List.reverse;

// and :: Foldable t => t Bool -> Bool
// or :: Foldable t => t Bool -> Bool
// any :: Foldable t => (a -> Bool) -> t a -> Bool
// all :: Foldable t => (a -> Bool) -> t a -> Bool
// concat :: Foldable t => t [a] -> [a]
// concatMap :: Foldable t => (a -> [b]) -> t a -> [b]

exports.any = _List.any;
exports.all = _List.all;
exports.concat = _List.concat;
exports.concatMap = _List.concatMap;

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
// scanl1 :: (a -> a -> a) -> [a] -> [a]
// scanr :: (a -> b -> b) -> b -> [a] -> [b]
// scanr1 :: (a -> a -> a) -> [a] -> [a]

// iterate :: (a -> a) -> a -> [a]
// repeat :: a -> [a]
// replicate :: Int -> a -> [a]
// cycle :: [a] -> [a]

// take :: Int -> [a] -> [a]
// drop :: Int -> [a] -> [a]
// splitAt :: Int -> [a] -> ([a], [a])
// takeWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (a -> Bool) -> [a] -> [a]
// span :: (a -> Bool) -> [a] -> ([a], [a])
// break :: (a -> Bool) -> [a] -> ([a], [a])

exports.take = _List.take;
exports.drop = _List.drop;
exports.splitAt = _List.splitAt;
exports.takeWhile = _List.takeWhile;
exports.dropWhile = _List.dropWhile;
exports.span = _List.span;
exports.break_ = _List.break_;

// notElem :: (Foldable t, Eq a) => a -> t a -> Bool
// lookup :: Eq a => a -> [(a, b)] -> Maybe b

exports.elem = _List.elem;
exports.notElem = _List.notElem;
exports.lookup = _Map.lookup;

// zip :: [a] -> [b] -> [(a, b)]
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
// unzip :: [(a, b)] -> ([a], [b])
// unzip3 :: [(a, b, c)] -> ([a], [b], [c])
// lines :: String -> [String]
// words :: String -> [String]
// unlines :: [String] -> String
// unwords :: [String] -> String

exports.zip = _List.zip;
exports.zipWith = _List.zipWith;
exports.unzip = _List.unzip;
exports.lines = _List.lines;
exports.words = _List.words;
exports.unlines = _List.unlines;
exports.unwords = _List.unwords;

// type ShowS = String -> String
// class Show a where
// shows :: Show a => a -> ShowS
// showChar :: Char -> ShowS
// showString :: String -> ShowS
// showParen :: Bool -> ShowS -> ShowS
// type ReadS a = String -> [(a, String)]
// class Read a where
// reads :: Read a => ReadS a
// readParen :: Bool -> ReadS a -> ReadS a
// read :: Read a => String -> a
// lex :: ReadS String
// data IO a :: * -> *
// putChar :: Char -> IO ()
// putStr :: String -> IO ()
// putStrLn :: String -> IO ()
// print :: Show a => a -> IO ()
// getChar :: IO Char
// getLine :: IO String
// getContents :: IO String
// interact :: (String -> String) -> IO ()
// type FilePath = String
// readFile :: FilePath -> IO String
// writeFile :: FilePath -> String -> IO ()
// appendFile :: FilePath -> String -> IO ()
// readIO :: Read a => String -> IO a
// readLn :: Read a => IO a
// type IOError = IOException
// ioError :: IOError -> IO a
// userError :: String -> IOError