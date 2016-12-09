export const lazy: Function = (fn: Function, args: any[]): any => () => {
  return fn.apply(this, args)
}

export const error = (str: string): void => {
  throw new Error(`haskind.${str}`)
}

export const notUndefined = (x: ?any, fn: Function): any => {
  return typeof x === 'undefined' ? fn() : x
}

export const id = a => a


export const _curry = fn => {
  switch (fn.length) {
  case 0: return fn()
  case 1: return fn.apply(null, arguments[0])
  }
}
