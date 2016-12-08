export const lazy = (fn, args) => () => {
  return fn.apply(this, args)
}
export const error = str => {
  throw new Error(`haskind.${str}`)
}

export const notUndefined = (x, fn) => {
  return typeof x === 'undefined' ? fn() : x
}
