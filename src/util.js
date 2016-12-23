import type from 'type-of'

export const id = a => a

export const True: Function = () => true
export const False: Function = () => false

// eslint-disable-next-line
export const constant = _curry((a, b) => a)

export const error = (str: string): void => {
  throw new Error(`haskind.${str}`)
}


// =============================================================================

export const _lazy: Function =
  (fn: Function, args: any[]): any => () =>
    fn.apply(this, args)

export const _notUndefined =
  (x: ?any, fn: Function): any =>
    type(x) === 'undefined' ? fn() : x

export const _curry: Function =
  (fn: Function): Function =>
    (...args: any[]): any => {
      if (args.length >= fn.length)
        return fn.apply(null, args)
      else
        return args.reduce((f, a) => _curry(f.bind(this, a)), fn)
    }

// =============================================================================

const condCheck =
  (...args) => (pair) => // eslint-disable-line
      pair[0](...args)

const condApply =
  (...args: any[]) => (pair: Function[]) => // eslint-disable-line
      pair[1](...args)

const undefinedCond: Function[][] =
  [[ True, constant(undefined) ]]

export const cond: Function =
  (ps: Function[][]): Function =>
    (...args: any[]): any =>
      ps.concat(undefinedCond)
        .filter(condCheck(...args))
        .map(condApply(...args))[0]
