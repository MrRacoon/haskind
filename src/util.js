export const lazy: Function = (fn: Function, args: any[]): any => () => {
  return fn.apply(this, args)
}

export const error = (str: string): void => {
  throw new Error(`haskind.${str}`)
}

export const notUndefined = (x: ?any, fn: Function): any => {
  return typeof x === 'undefined' ? fn() : x
}
