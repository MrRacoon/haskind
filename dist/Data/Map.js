"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.null_ = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (!) :: Ord k => Map k a -> k -> a
// (!?) :: Ord k => Map k a -> k -> Maybe a
// (\\) :: Ord k => Map k a -> Map k b -> Map k a

// null :: Map k a -> Bool
var null_ = exports.null_ = function null_(m) {
  return (0, _keys2.default)(m).length === 0;
};

// size :: Map k a -> Int
var size = exports.size = function size(m) {
  return (0, _keys2.default)(m).length;
};

// member :: Ord k => k -> Map k a -> Bool
// notMember :: Ord k => k -> Map k a -> Bool
// lookup :: Ord k => k -> Map k a -> Maybe a
// findWithDefault :: Ord k => a -> k -> Map k a -> a
// lookupLT :: Ord k => k -> Map k v -> Maybe (k, v)
// lookupGT :: Ord k => k -> Map k v -> Maybe (k, v)
// lookupLE :: Ord k => k -> Map k v -> Maybe (k, v)
// lookupGE :: Ord k => k -> Map k v -> Maybe (k, v)
// empty :: Map k a
// singleton :: k -> a -> Map k a
// insert :: Ord k => k -> a -> Map k a -> Map k a
// insertWith :: Ord k => (a -> a -> a) -> k -> a -> Map k a -> Map k a
// insertWithKey :: Ord k => (k -> a -> a -> a) -> k -> a -> Map k a -> Map k a
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