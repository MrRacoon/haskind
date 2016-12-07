
export const lengthArray : Function = (ls: any[]) => ls.length
export const lengthObject: Function = (ls: {}) => Object.keys(ls).length

export const length: Function = (ls: any) => {

  if (Array.isArray(ls))
    return lengthArray(ls)

  if (typeof ls === 'object')
    return lengthObject(ls)
}

export const map: any[] = (fn: Function, ls: any[]) =>
  ls.map(fn)

export const filter: any[] = (fn: Function, ls: any[]) =>
  ls.filter(fn)

export const foldl: any[] = (fn: Function, init: any, ls: any[]) =>
  ls.reduce(fn, init)
