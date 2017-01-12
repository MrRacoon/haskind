import { error } from './util';
import { and, or, not, otherwise } from './Data/Bool';
import { LT, EQ, GT, lt, le, gt, ge, max, min, compare } from './Data/Ord';
import { eq, notEq } from './Data/Eq';
import { fst, snd } from './Data/Tuple';
import { lookup } from './Data/Map';
import { Nothing, Just, maybe } from './Data/Maybe';
import { Left, Right, either } from './Data/Either';
import { succ, pred } from './Data/Enum';
import { id, const_, comp, compose, pipe, flip, apply } from './Data/Function';
import {
  all, any, append, break_, concat, concatMap, drop, dropWhile, elem, filter,
  head, index, init, last, length, lines, map, notElem, reverse, span, splitAt,
  tail, take, takeWhile, unlines, unwords, unzip, words, zip, zipWith,
} from './Data/List';
import { add, subtract, even, odd, gcd, lcm } from './Data/Num';

// data Bool :: *
// = False
// | True
// (&&) :: Bool -> Bool -> Bool
// (||) :: Bool -> Bool -> Bool
// not :: Bool -> Bool
// otherwise :: Bool
export { and, or, not, otherwise };

// data Maybe a
// = Nothing
// | Just a
// maybe :: b -> (a -> b) -> Maybe a -> b
export { Nothing, Just, maybe };

// data Either a b
// = Left a
// | Right b
// either :: (a -> c) -> (b -> c) -> Either a b -> c
export { Left, Right, either };

// data Ordering :: *
// = LT
// | EQ
// | GT
export { LT, EQ, GT };

// data Char :: *

// type String = [Char]

// fst :: (a, b) -> a
// snd :: (a, b) -> b
export { fst, snd };

// curry :: ((a, b) -> c) -> a -> b -> c
// uncurry :: (a -> b -> c) -> (a, b) -> c

// class Eq a where
// (==) :: a -> a -> Bool
// (/=) :: a -> a -> Bool
export { eq, notEq };

// class Eq a => Ord a where
// compare :: a -> a -> Ordering
// (<) :: a -> a -> Bool
// (<=) :: a -> a -> Bool
// (>) :: a -> a -> Bool
// (>=) :: a -> a -> Bool
export { compare, lt, le, gt, ge };

// max :: a -> a -> a
// min :: a -> a -> a
export { max, min };

// class Enum a where
export { succ, pred };

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
export { add, subtract, even, odd, gcd, lcm };

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
export { id, const_, comp, compose, pipe, flip, apply };

// until :: (a -> Bool) -> (a -> a) -> a -> a
// asTypeOf :: a -> a -> a
// error :: forall r. forall a. HasCallStack => [Char] -> a
// errorWithoutStackTrace :: forall r. forall a. [Char] -> a
// undefined :: forall r. forall a. HasCallStack => a
export { error, undefined };

// seq :: a -> b -> b
// ($!) :: (a -> b) -> a -> b
// map :: (a -> b) -> [a] -> [b]
export { map };

// (++) :: [a] -> [a] -> [a]
export { append };

// filter :: (a -> Bool) -> [a] -> [a]
export { filter };

// head :: [a] -> a
// last :: [a] -> a
// tail :: [a] -> [a]
// init :: [a] -> [a]
export { head, last, tail, init };

// null :: Foldable t => t a -> Bool
// length :: Foldable t => t a -> Int
// (!!) :: [a] -> Int -> a
// reverse :: [a] -> [a]
export { length, index, reverse };

// and :: Foldable t => t Bool -> Bool
// or :: Foldable t => t Bool -> Bool
// any :: Foldable t => (a -> Bool) -> t a -> Bool
// all :: Foldable t => (a -> Bool) -> t a -> Bool
// concat :: Foldable t => t [a] -> [a]
// concatMap :: Foldable t => (a -> [b]) -> t a -> [b]
export { any, all, concat, concatMap };

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
export { take, drop, splitAt, takeWhile, dropWhile, span, break_ };

// notElem :: (Foldable t, Eq a) => a -> t a -> Bool
// lookup :: Eq a => a -> [(a, b)] -> Maybe b
export { elem, notElem, lookup };

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
export { zip, zipWith, unzip, lines, words, unlines, unwords };

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
