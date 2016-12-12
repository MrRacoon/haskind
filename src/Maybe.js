import type from 'type-of'
import { error } from './util'

export type A = any;
export type Maybe<A> = { just?: A, nothing?: void }

export const Just: Maybe = (x) => ({ just: x })
export const Nothing: Maybe = () => ({ nothing: null })

export const maybe = (def: any, fn: Function, m: Maybe<any>) => {
  if (isNothing(m)) return def
  if (isJust(m)) return fn(m.just)
  return error('Maybe.maybe: third argument should have type maybe')
}

export const isJust: Function = (m: Maybe<any>): boolean =>
  type(m) === 'object' && type(m.just) !== 'undefined' && type(m.nothing) === 'undefined'

export const isNothing: Function = (m: Maybe<any>): boolean =>
  type(m) === 'object' && type(m.nothing) !== 'undefined' && type(m.just) === 'undefined'


// fromJust :: Maybe a -> a
// fromMaybe :: a -> Maybe a -> a
// listToMaybe :: [a] -> Maybe a
// maybeToList :: Maybe a -> [a]
// catMaybes :: [Maybe a] -> [a]
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
