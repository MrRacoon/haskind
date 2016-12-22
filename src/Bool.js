import { _curry } from './util'

// and :: Bool -> Bool -> Bool
export const and: Function = _curry(
  (x: any, y: any): boolean =>
    x && y
)

// or :: Bool -> Bool -> Bool
export const or: Function = _curry(
  (x: any, y: any): boolean =>
    x || y
)

// not :: Bool -> Bool
export const not: Function =
  (x: any): boolean =>
    !x

// otherwise :: Bool
export const otherwise: boolean =
  true

// bool :: a -> a -> Bool -> a
export const bool: Function = _curry(
  (x: any, y: any, p: any): any =>
    p ? y : x
)
