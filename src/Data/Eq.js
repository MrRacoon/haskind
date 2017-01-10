import { _curry } from '../util';

// eq :: a -> a -> Bool
export const eq = _curry((a, b) => a === b );

// notEq :: a -> a -> Bool
export const notEq = _curry((a,b) => a !== b );
