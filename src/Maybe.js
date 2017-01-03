import { type } from './util';
import { error, _curry } from './util';

export type Maybe = _Just<any> | Nothing
export type _Just = { just: any }
export type _Nothing = { nothing: void }

export const Just: Maybe = just => ({ just });
export const Nothing: Maybe = () => ({ nothing: null });

export const maybe = _curry((def: any, fn: Function, m: Maybe) => {
  if (isNothing(m)) return def;
  if (isJust(m)) return fn(m.just);
  return error('Maybe.maybe: third argument should have type maybe');
});

// isJust :: Maybe a -> Bool
export const isJust: Function = (m: Maybe): boolean =>
  type(m) === 'Maybe' && type(m.just) !== 'undefined';

// isNothing :: Maybe a -> Bool
export const isNothing: Function = (m: Maybe): boolean =>
  type(m) === 'Maybe' && type(m.nothing) !== 'undefined';

// fromJust :: Maybe a -> a
export const fromJust = (m: Maybe): any =>
  isJust(m) ? m.just : error('Maybe.fromJust: Nothing');

// fromMaybe :: a -> Maybe a -> a
export const fromMaybe = (def: any, m: Maybe): any =>
  isJust(m) ? m.just : def;

// listToMaybe :: [a] -> Maybe a
export const listToMaybe =
  (ls: any[]): Maybe =>
    ls.length ? Just(ls[0]) : Nothing();

// maybeToList :: Maybe a -> [a]
export const maybeToList =
  (m: Maybe) =>
    isJust(m) ? [fromJust(m)] : [];

// catMaybes :: [Maybe a] -> [a]
export const catMaybes =
  (ls: Maybe[]): any[] =>
    ls.filter(isJust).map(fromJust);

// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
export const mapMaybe =
  _curry((fn: Function, ls: any[]): any[] =>
    catMaybes(ls.map(fn)));
