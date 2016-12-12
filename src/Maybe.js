import { Maybe } from 'ramda-fantasy'

export const maybe = (def, fn, m) =>
  Maybe.maybe(def, fn, m)
