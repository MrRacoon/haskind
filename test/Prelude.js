import { Prelude } from '.';

describe('Prelude', () => {
  describe('includes', () => {
    // data Bool :: *
    // = False
    // | True
    // (&&) :: Bool -> Bool -> Bool
    it('and', () => {
      Prelude.and.should.exist;
    });
    // (||) :: Bool -> Bool -> Bool
    it('or', () => {
      Prelude.or.should.exist;
    });
    // not :: Bool -> Bool
    it('not', () => {
      Prelude.not.should.exist;
    });
    // otherwise :: Bool
    it('otherwise', () => {
      Prelude.otherwise.should.exist;
    });
    // data Maybe a
    // = Nothing
    it('Nothing', () => {
      Prelude.Nothing.should.exist;
    });
    // | Just a
    it('Just', () => {
      Prelude.Just.should.exist;
    });
    // maybe :: b -> (a -> b) -> Maybe a -> b
    it('maybe', () => {
      Prelude.maybe.should.exist;
    });
    // data Either a b
    // = Left a
    it('Left', () => {
      Prelude.Left.should.exist;
    });
    // | Right b
    it('Right', () => {
      Prelude.Right.should.exist;
    });
    // either :: (a -> c) -> (b -> c) -> Either a b -> c
    it('either', () => {
      Prelude.either.should.exist;
    });
    // data Ordering :: *
    // = LT
    it('LT', () => {
      Prelude.LT.should.exist;
    });
    // | EQ
    it('EQ', () => {
      Prelude.EQ.should.exist;
    });
    // | GT
    it('GT', () => {
      Prelude.GT.should.exist;
    });
    // data Char :: *
    // type String = [Char]
    // fst :: (a, b) -> a
    it('fst', () => {
      Prelude.fst.should.exist;
    });
    // snd :: (a, b) -> b
    it('snd', () => {
      Prelude.snd.should.exist;
    });
    // curry :: ((a, b) -> c) -> a -> b -> c
    // uncurry :: (a -> b -> c) -> (a, b) -> c
    // class Eq a where
    // (==) :: a -> a -> Bool
    it('eq', () => {
      Prelude.eq.should.exist;
    });
    // (/=) :: a -> a -> Bool
    it('notEq', () => {
      Prelude.notEq.should.exist;
    });
    // class Eq a => Ord a where
    // compare :: a -> a -> Ordering
    // (<) :: a -> a -> Bool
    it('lt', () => {
      Prelude.lt.should.exist;
    });
    // (<=) :: a -> a -> Bool
    it('le', () => {
      Prelude.le.should.exist;
    });
    // (>) :: a -> a -> Bool
    it('gt', () => {
      Prelude.gt.should.exist;
    });
    // (>=) :: a -> a -> Bool
    it('ge', () => {
      Prelude.ge.should.exist;
    });
    // max :: a -> a -> a
    it('max', () => {
      Prelude.max.should.exist;
    });
    // min :: a -> a -> a
    it('min', () => {
      Prelude.min.should.exist;
    });
    // class Enum a where
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
    xit('add', () => {
      Prelude.add.should.exist;
    });
    xit('subtract', () => {
      Prelude.subtract.should.exist;
    });
    // even :: Integral a => a -> Bool
    xit('even', () => {
      Prelude.even.should.exist;
    });
    // odd :: Integral a => a -> Bool
    xit('odd', () => {
      Prelude.odd.should.exist;
    });
    // gcd :: Integral a => a -> a -> a
    xit('gcd', () => {
      Prelude.gcd.should.exist;
    });
    // lcm :: Integral a => a -> a -> a
    xit('lcm', () => {
      Prelude.lcm.should.exist;
    });
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
    // until :: (a -> Bool) -> (a -> a) -> a -> a
    // asTypeOf :: a -> a -> a
    // error :: forall r. forall a. HasCallStack => [Char] -> a
    // errorWithoutStackTrace :: forall r. forall a. [Char] -> a
    // undefined :: forall r. forall a. HasCallStack => a
    // seq :: a -> b -> b
    // ($!) :: (a -> b) -> a -> b
    // map :: (a -> b) -> [a] -> [b]
    // (++) :: [a] -> [a] -> [a]
    // filter :: (a -> Bool) -> [a] -> [a]
    // head :: [a] -> a
    // last :: [a] -> a
    // tail :: [a] -> [a]
    // init :: [a] -> [a]
    // null :: Foldable t => t a -> Bool
    // length :: Foldable t => t a -> Int
    // (!!) :: [a] -> Int -> a
    // reverse :: [a] -> [a]
    // and :: Foldable t => t Bool -> Bool
    // or :: Foldable t => t Bool -> Bool
    // any :: Foldable t => (a -> Bool) -> t a -> Bool
    // all :: Foldable t => (a -> Bool) -> t a -> Bool
    // concat :: Foldable t => t [a] -> [a]
    // concatMap :: Foldable t => (a -> [b]) -> t a -> [b]
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
    // notElem :: (Foldable t, Eq a) => a -> t a -> Bool
    // lookup :: Eq a => a -> [(a, b)] -> Maybe b
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
  });
});
