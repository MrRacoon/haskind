
// fst :: (a, b) -> a
export const fst: Function = ([a: any]): any => a;

// snd :: (a, b) -> b
export const snd: Function = ([ , b: any]): any => b;

// curry :: ((a, b) -> c) -> a -> b -> c
export const curry = undefined;

// uncurry :: (a -> b -> c) -> (a, b) -> c
export const uncurry = undefined;

// swap :: (a, b) -> (b, a)
export const swap: Function = ([a: any, b: any]): any[] => [b, a];
