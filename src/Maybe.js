import { type } from './util';
import { error, _curry, newKind, emptyKind } from './util';

export type Maybe    = _Just<any> | _Nothing
export type _Just    = { just: any }
export type _Nothing = { nothing: void }

// Just :: * -> *
export const Just: _Just =
  newKind('just');

// Nothing :: () -> *
export const Nothing: _Nothing =
  emptyKind('nothing');

export const maybe = _curry(
  (def: any, fn: Function, m: Maybe): any => {
    if (isNothing(m)) return def;
    if (isJust(m)) return fn(m.just);
    return error('Maybe.maybe: third argument should have type maybe');
  }
);

// isJust :: Maybe a -> Bool
export const isJust: Function =
  (m: Maybe): boolean =>
    type(m) === 'Maybe' && type(m.just) !== 'undefined';

// isNothing :: Maybe a -> Bool
export const isNothing: Function =
  (m: Maybe): boolean =>
    type(m) === 'Maybe' && type(m.nothing) !== 'undefined';

// fromJust :: Maybe a -> a
export const fromJust: Function =
  (m: Maybe): _Just =>
    isJust(m) ? m.just : error('Maybe.fromJust: Nothing');

// fromMaybe :: a -> Maybe a -> a
export const fromMaybe: Function =
  (def: any, m: Maybe): any =>
    isJust(m) ? m.just : def;

// listToMaybe :: [a] -> Maybe a
export const listToMaybe: Function =
  (ls: any[]): Maybe =>
    ls.length ? Just(ls[0]) : Nothing();

// maybeToList :: Maybe a -> [a]
export const maybeToList: Function  =
  (m: Maybe): any[] =>
    isJust(m) ? [fromJust(m)] : [];

// catMaybes :: [Maybe a] -> [a]
export const catMaybes: Function =
  (ls: Maybe[]): any[] =>
    ls.filter(isJust).map(fromJust);

// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
export const mapMaybe: Function  =
  _curry((fn: Function, ls: any[]): any[] =>
    catMaybes(ls.map(fn)));
