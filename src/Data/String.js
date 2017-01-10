
// isString :: String -> Bool
export const isString = x => typeof x === 'string';

// fromString :: String -> [Char]
export const fromString = str => str.split('');

// toString :: [Char] -> String
export const toString = ls => ls.join('');
