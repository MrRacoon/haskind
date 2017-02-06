
// succ :: a -> a
export const succ = (x: number): number => x + 1;

// pred :: a -> a
export const pred = (x: number): number => x - 1;

// toEnum :: Int -> a
export const toEnum = (c) => String.fromCharCode(c);

// fromEnum :: a -> Int
export const fromEnum = (c) => c.charCodeAt(0);

// enumFrom :: a -> [a]
export const enumFrom = undefined;

// enumFromThen :: a -> a -> [a]
export const enumFromThen = undefined;

// enumFromTo :: a -> a -> [a]
export const enumFromTo = undefined;

// enumFromThenTo :: a -> a -> a -> [a]
export const enumFromThenTo = undefined;
