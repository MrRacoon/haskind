export const error = (str: string): void => {
  throw new Error(`haskind.${str}`)
}

export const id = a => a

// =============================================================================

export const _lazy: Function = (fn: Function, args: any[]): any => () => {
  return fn.apply(this, args)
}

export const _notUndefined = (x: ?any, fn: Function): any => {
  return typeof x === 'undefined' ? fn() : x
}

export const _curry: Function =
  (fn: Function): Function =>
    (...args: any[]): any => {
      if (args.length >= fn.length)
        return fn.apply(null, args)
      else
        return args.reduce((f, a) => _curry(f.bind(this, a)), fn)
    }
