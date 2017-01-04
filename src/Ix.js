
// range :: (a, a) -> [a]
export const range = (i, n) =>
  [...Array(n-i).keys()].map(x => x + i);

// index :: (a, a) -> a -> Int
export const index = undefined;

// inRange :: (a, a) -> a -> Bool
export const inRange = undefined;

// rangeSize :: (a, a) -> Int
export const rangeSize = undefined;
