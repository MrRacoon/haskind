import type from 'type-of'
import { error } from './util'

export type Maybe = _Just<any> | Nothing
export type _Just = { just: any }
export type _Nothing = { nothing: void }

export const Just: Maybe = (x) => ({ just: x })
export const Nothing: Maybe = () => ({ nothing: null })

export const maybe = (def: any, fn: Function, m: Maybe) => {
  if (isNothing(m)) return def
  if (isJust(m)) return fn(m.just)
  return error('Maybe.maybe: third argument should have type maybe')
}

export const isJust: Function = (m: Maybe): boolean =>
  type(m) === 'object' && type(m.just) !== 'undefined' && type(m.nothing) === 'undefined'

export const isNothing: Function = (m: Maybe): boolean =>
  type(m) === 'object' && type(m.nothing) !== 'undefined' && type(m.just) === 'undefined'


// fromJust :: Maybe a -> a
export const fromJust = (m: Maybe): any =>
  isJust(m) ? m.just : error('Maybe.fromJust: Nothing')

// fromMaybe :: a -> Maybe a -> a
export const fromMaybe = (def: any, m: Maybe): any =>
  isJust(m) ? m.just : def

// listToMaybe :: [a] -> Maybe a
// maybeToList :: Maybe a -> [a]
// catMaybes :: [Maybe a] -> [a]
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
