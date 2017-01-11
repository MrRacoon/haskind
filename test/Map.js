import { Data } from '.';
const { Map, Maybe, List } = Data;
const { Just, Nothing } = Maybe;
const { append } = List;

xdescribe('Map .', () => {
  // null :: Map k a -> Bool
  describe('null', () => {
    describe('({})', () => {
      it('== true', () => {
        Map.null_({}).should.be.eql(true);
      });
    });
    describe('({ a: 1 })', () => {
      it('== false', () => {
        Map.null_({ a: 1 }).should.be.eql(false);
      });
    });
  });
  // size :: Map k a -> Int
  describe('size', () => {
    describe('({})', () => {
      it('=== 0', () => {
        Map.size({}).should.be.eql(0);
      });
    });
    describe('({ a:1 })', () => {
      it('=== 1', () => {
        Map.size({ a:1 }).should.be.eql(1);
      });
    });
    describe('({ a:1, b:2 })', () => {
      it('=== 2', () => {
        Map.size({ a:1, b:2 }).should.be.eql(2);
      });
    });
  });
  // member :: Ord k => k -> Map k a -> Bool
  describe('member', () => {
    describe('("a", {a: 1})', () => {
      it('== true', () => {
        Map.member('a', {a: 1}).should.be.eql(true);
      });
    });
    describe('("a")({a: 1})', () => {
      it('== true', () => {
        Map.member('a')({a: 1}).should.be.eql(true);
      });
    });
    describe('("x", {a: 1})', () => {
      it('== false', () => {
        Map.member('x', {a: 1}).should.be.eql(false);
      });
    });
  });
  // notMember :: Ord k => k -> Map k a -> Bool
  describe('notMember', () => {
    describe('("a", {a: 1})', () => {
      it('== false', () => {
        Map.notMember('a', {a: 1}).should.be.eql(false);
      });
    });
    describe('("a")({a: 1})', () => {
      it('== false', () => {
        Map.notMember('a')({a: 1}).should.be.eql(false);
      });
    });
    describe('("x", {a: 1})', () => {
      it('== true', () => {
        Map.notMember('x', {a: 1}).should.be.eql(true);
      });
    });
  });
  // lookup :: Ord k => k -> Map k a -> Maybe a
  describe('lookup', () => {
    describe('("a", { a:1 })', () => {
      it('== Just(1)', () => {
        Map.lookup('a', { a:1 }).should.be.eql(Just(1));
      });
    });
    describe('("a")({ a:1 })', () => {
      it('== Just(1)', () => {
        Map.lookup('a')({ a:1 }).should.be.eql(Just(1));
      });
    });
    describe('("x", { a:1 })', () => {
      it('== Nothing()', () => {
        Map.lookup('x', { a:1 }).should.be.eql(Nothing());
      });
    });
  });
  // findWithDefault :: Ord k => a -> k -> Map k a -> a
  describe('findWithDefault', () => {
    describe('(42, "a", { a:1 })', () => {
      it('== 1', () => {
        Map.findWithDefault(42, 'a', { a:1 }).should.be.eql(1);
      });
    });
    describe('(42, "x", { a:1 })', () => {
      it('== 42', () => {
        Map.findWithDefault(42, 'x', { a:1 }).should.be.eql(42);
      });
    });
  });
  // lookupLT :: Ord k => k -> Map k v -> Maybe (k, v)
  describe('lookupLT', () => {
    describe('(2, { 1:0 })', () => {
      it('== Just([1, 0])', () => {
        Map.lookupLT(2, { 1:0 }).should.be.eql(Just([1, 0]));
      });
    });
    describe('(1, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupLT(1, { 1:0 }).should.be.eql(Nothing());
      });
    });
    describe('(0, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupLT(0, { 1:0 }).should.be.eql(Nothing());
      });
    });
  });
  // lookupGT :: Ord k => k -> Map k v -> Maybe (k, v)
  describe('lookupGT', () => {
    describe('(0, { 1:0 })', () => {
      it('== Just([1, 0])', () => {
        Map.lookupGT(0, { 1:0 }).should.be.eql(Just([1, 0]));
      });
    });
    describe('(1, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupGT(1, { 1:0 }).should.be.eql(Nothing());
      });
    });
    describe('(2, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupGT(2, { 1:0 }).should.be.eql(Nothing());
      });
    });
  });
  // lookupLE :: Ord k => k -> Map k v -> Maybe (k, v)
  describe('lookupLE', () => {
    describe('(2, { 1:0 })', () => {
      it('== Just([1, 0])', () => {
        Map.lookupLE(0, { 1:0 }).should.be.eql(Just([1, 0]));
      });
    });
    describe('(1, {1:0})', () => {
      it('== Just([1,0])', () => {
        Map.lookupLE(1, { 1:0 }).should.be.eql(Just([1,0]));
      });
    });
    describe('(0, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupLE(2, { 1:0 }).should.be.eql(Nothing());
      });
    });
  });
  // lookupGE :: Ord k => k -> Map k v -> Maybe (k, v)
  describe('lookupGE', () => {
    describe('(0, { 1:0 })', () => {
      it('== Just([1, 0])', () => {
        Map.lookupGE(0, { 1:0 }).should.be.eql(Just([1, 0]));
      });
    });
    describe('(1, {1:0})', () => {
      it('== Just([1,0])', () => {
        Map.lookupGE(1, { 1:0 }).should.be.eql(Just([1,0]));
      });
    });
    describe('(2, {1:0})', () => {
      it('== Nothing()', () => {
        Map.lookupGE(2, { 1:0 }).should.be.eql(Nothing());
      });
    });
  });
  // empty :: Map k a
  describe('empty', () => {
    it('== {}', () => {
      Map.empty.should.be.eql({});
    });
  });
  // singleton :: k -> a -> Map k a
  describe('singleton', () => {
    describe('(1, 0)', () => {
      it('== { 1: 0 }', () => {
        Map.singleton(1, 0).should.be.eql({ 1:0 });
      });
    });
    describe('(1)(0)', () => {
      it('== { 1: 0 }', () => {
        Map.singleton(1)(0).should.be.eql({ 1:0 });
      });
    });
  });
  // insert :: Ord k => k -> a -> Map k a -> Map k a
  describe('insert', () => {
    describe('(1, 0, {})', () => {
      it('== {1:0}', () => {
        Map.insert(1, 0, {}).should.be.eql({1:0});
      });
    });
    describe('(1)(0, {})', () => {
      it('== {1:0}', () => {
        Map.insert(1)(0, {}).should.be.eql({1:0});
      });
    });
    describe('(1, 0)({})', () => {
      it('== {1:0}', () => {
        Map.insert(1, 0)({}).should.be.eql({1:0});
      });
    });
    describe('(1)(0)({})', () => {
      it('== {1:0}', () => {
        Map.insert(1)(0)({}).should.be.eql({1:0});
      });
    });
  });
  // insertWith :: Ord k => (a -> a -> a) -> k -> a -> Map k a -> Map k a
  describe('insertWith', () => {
    describe('description', () => {

    });
  });
  // insertWithKey :: Ord k => (k -> a -> a -> a) -> k -> a -> Map k a -> Map k a
  describe('insertWith', () => {
    // insertWith (++) 5 "xxx" (fromList [(5,"a"), (3,"b")]) == fromList [(3, "b"), (5, "xxxa")]
    describe('(append, 5, "xxx", { 5: "a": 3: "b"})', () => {
      it('== { 3: "b", 5: "xxxa"}', () => {
        Map.insertWith(append, 5, 'xxx', { 5: 'a', 3: 'b'})
          .should.be.eql({ 3: 'b', 5: 'xxxa'});
      });
    });
    // insertWith (++) 7 "xxx" (fromList [(5,"a"), (3,"b")]) == fromList [(3, "b"), (5, "a"), (7, "xxx")]
    describe('(append, 7, "xxx", { 5: "a": 3: "b"})', () => {
      it('== { 3: "b", 5: "a", 7: "xxx"}', () => {
        Map.insertWith(append, 7, 'xxx', { 5: 'a', 3: 'b'})
          .should.be.eql({ 3: 'b', 5: 'a', 7: 'xxx'});
      });
    });
    // insertWith (++) 5 "xxx" empty == singleton 5 "xxx"
    describe('(append, 5, "xxx", {})', () => {
      it('== { 5: "xxx" }', () => {
        Map.insertWith(append, 5, 'xxx', {})
          .should.be.eql({ 5: 'xxx' });
      });
    });
  });
  // insertLookupWithKey :: Ord k => (k -> a -> a -> a) -> k -> a -> Map k a -> (Maybe a, Map k a)
  // delete :: Ord k => k -> Map k a -> Map k a
  // adjust :: Ord k => (a -> a) -> k -> Map k a -> Map k a
  // adjustWithKey :: Ord k => (k -> a -> a) -> k -> Map k a -> Map k a
  // update :: Ord k => (a -> Maybe a) -> k -> Map k a -> Map k a
  // updateWithKey :: Ord k => (k -> a -> Maybe a) -> k -> Map k a -> Map k a
  // updateLookupWithKey :: Ord k => (k -> a -> Maybe a) -> k -> Map k a -> (Maybe a, Map k a)
  // alter :: Ord k => (Maybe a -> Maybe a) -> k -> Map k a -> Map k a
  // alterF :: (Functor f, Ord k) => (Maybe a -> f (Maybe a)) -> k -> Map k a -> f (Map k a)
  // union :: Ord k => Map k a -> Map k a -> Map k a
  // unionWith :: Ord k => (a -> a -> a) -> Map k a -> Map k a -> Map k a
  // unionWithKey :: Ord k => (k -> a -> a -> a) -> Map k a -> Map k a -> Map k a
  // unions :: Ord k => [Map k a] -> Map k a
  // unionsWith :: Ord k => (a -> a -> a) -> [Map k a] -> Map k a
  // difference :: Ord k => Map k a -> Map k b -> Map k a
  // differenceWith :: Ord k => (a -> b -> Maybe a) -> Map k a -> Map k b -> Map k a
  // differenceWithKey :: Ord k => (k -> a -> b -> Maybe a) -> Map k a -> Map k b -> Map k a
  // intersection :: Ord k => Map k a -> Map k b -> Map k a
  // intersectionWith :: Ord k => (a -> b -> c) -> Map k a -> Map k b -> Map k c
  // intersectionWithKey :: Ord k => (k -> a -> b -> c) -> Map k a -> Map k b -> Map k c
  // mergeWithKey :: Ord k => (k -> a -> b -> Maybe c) -> (Map k a -> Map k c) -> (Map k b -> Map k c) -> Map k a -> Map k b -> Map k c
  // map :: (a -> b) -> Map k a -> Map k b
  // mapWithKey :: (k -> a -> b) -> Map k a -> Map k b
  // traverseWithKey :: Applicative t => (k -> a -> t b) -> Map k a -> t (Map k b)
  // traverseMaybeWithKey :: Applicative f => (k -> a -> f (Maybe b)) -> Map k a -> f (Map k b)
  // mapAccum :: (a -> b -> (a, c)) -> a -> Map k b -> (a, Map k c)
  // mapAccumWithKey :: (a -> k -> b -> (a, c)) -> a -> Map k b -> (a, Map k c)
  // mapAccumRWithKey :: (a -> k -> b -> (a, c)) -> a -> Map k b -> (a, Map k c)
  // mapKeys :: Ord k2 => (k1 -> k2) -> Map k1 a -> Map k2 a
  // mapKeysWith :: Ord k2 => (a -> a -> a) -> (k1 -> k2) -> Map k1 a -> Map k2 a
  // mapKeysMonotonic :: (k1 -> k2) -> Map k1 a -> Map k2 a
  // foldr :: (a -> b -> b) -> b -> Map k a -> b
  // foldl :: (a -> b -> a) -> a -> Map k b -> a
  // foldrWithKey :: (k -> a -> b -> b) -> b -> Map k a -> b
  // foldlWithKey :: (a -> k -> b -> a) -> a -> Map k b -> a
  // foldMapWithKey :: Monoid m => (k -> a -> m) -> Map k a -> m
  // foldr' :: (a -> b -> b) -> b -> Map k a -> b
  // foldl' :: (a -> b -> a) -> a -> Map k b -> a
  // foldrWithKey' :: (k -> a -> b -> b) -> b -> Map k a -> b
  // foldlWithKey' :: (a -> k -> b -> a) -> a -> Map k b -> a
  // elems :: Map k a -> [a]
  // keys :: Map k a -> [k]
  // assocs :: Map k a -> [(k, a)]
  // keysSet :: Map k a -> Set k
  // fromSet :: (k -> a) -> Set k -> Map k a
  // toList :: Map k a -> [(k, a)]
  // fromList :: Ord k => [(k, a)] -> Map k a
  // fromListWith :: Ord k => (a -> a -> a) -> [(k, a)] -> Map k a
  // fromListWithKey :: Ord k => (k -> a -> a -> a) -> [(k, a)] -> Map k a
  // toAscList :: Map k a -> [(k, a)]
  // toDescList :: Map k a -> [(k, a)]
  // fromAscList :: Eq k => [(k, a)] -> Map k a
  // fromAscListWith :: Eq k => (a -> a -> a) -> [(k, a)] -> Map k a
  // fromAscListWithKey :: Eq k => (k -> a -> a -> a) -> [(k, a)] -> Map k a
  // fromDistinctAscList :: [(k, a)] -> Map k a
  // fromDescList :: Eq k => [(k, a)] -> Map k a
  // fromDescListWith :: Eq k => (a -> a -> a) -> [(k, a)] -> Map k a
  // fromDescListWithKey :: Eq k => (k -> a -> a -> a) -> [(k, a)] -> Map k a
  // fromDistinctDescList :: [(k, a)] -> Map k a
  // filter :: (a -> Bool) -> Map k a -> Map k a
  // filterWithKey :: (k -> a -> Bool) -> Map k a -> Map k a
  // restrictKeys :: Ord k => Map k a -> Set k -> Map k a
  // withoutKeys :: Ord k => Map k a -> Set k -> Map k a
  // partition :: (a -> Bool) -> Map k a -> (Map k a, Map k a)
  // partitionWithKey :: (k -> a -> Bool) -> Map k a -> (Map k a, Map k a)
  // takeWhileAntitone :: (k -> Bool) -> Map k a -> Map k a
  // dropWhileAntitone :: (k -> Bool) -> Map k a -> Map k a
  // spanAntitone :: (k -> Bool) -> Map k a -> (Map k a, Map k a)
  // mapMaybe :: (a -> Maybe b) -> Map k a -> Map k b
  // mapMaybeWithKey :: (k -> a -> Maybe b) -> Map k a -> Map k b
  // mapEither :: (a -> Either b c) -> Map k a -> (Map k b, Map k c)
  // mapEitherWithKey :: (k -> a -> Either b c) -> Map k a -> (Map k b, Map k c)
  // split :: Ord k => k -> Map k a -> (Map k a, Map k a)
  // splitLookup :: Ord k => k -> Map k a -> (Map k a, Maybe a, Map k a)
  // splitRoot :: Map k b -> [Map k b]
  // isSubmapOf :: (Ord k, Eq a) => Map k a -> Map k a -> Bool
  // isSubmapOfBy :: Ord k => (a -> b -> Bool) -> Map k a -> Map k b -> Bool
  // isProperSubmapOf :: (Ord k, Eq a) => Map k a -> Map k a -> Bool
  // isProperSubmapOfBy :: Ord k => (a -> b -> Bool) -> Map k a -> Map k b -> Bool
  // lookupIndex :: Ord k => k -> Map k a -> Maybe Int
  // findIndex :: Ord k => k -> Map k a -> Int
  // elemAt :: Int -> Map k a -> (k, a)
  // updateAt :: (k -> a -> Maybe a) -> Int -> Map k a -> Map k a
  // deleteAt :: Int -> Map k a -> Map k a
  // take :: Int -> Map k a -> Map k a
  // drop :: Int -> Map k a -> Map k a
  // splitAt :: Int -> Map k a -> (Map k a, Map k a)
  // lookupMin :: Map k a -> Maybe (k, a)
  // lookupMax :: Map k a -> Maybe (k, a)
  // findMin :: Map k a -> (k, a)
  // findMax :: Map k a -> (k, a)
  // deleteMin :: Map k a -> Map k a
  // deleteMax :: Map k a -> Map k a
  // deleteFindMin :: Map k a -> ((k, a), Map k a)
  // deleteFindMax :: Map k a -> ((k, a), Map k a)
  // updateMin :: (a -> Maybe a) -> Map k a -> Map k a
  // updateMax :: (a -> Maybe a) -> Map k a -> Map k a
  // updateMinWithKey :: (k -> a -> Maybe a) -> Map k a -> Map k a
  // updateMaxWithKey :: (k -> a -> Maybe a) -> Map k a -> Map k a
  // minView :: Map k a -> Maybe (a, Map k a)
  // maxView :: Map k a -> Maybe (a, Map k a)
  // minViewWithKey :: Map k a -> Maybe ((k, a), Map k a)
  // maxViewWithKey :: Map k a -> Maybe ((k, a), Map k a)
  // showTree :: (Show k, Show a) => Map k a -> String
  // showTreeWith :: (k -> a -> String) -> Bool -> Bool -> Map k a -> String
  // valid :: Ord k => Map k a -> Bool
});
