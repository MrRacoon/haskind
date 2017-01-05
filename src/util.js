// NOTE: moving to Data.Function
export const id = a => a;

export const True: Function = () => true;
export const False: Function = () => false;

export const error = (str: string): void => {
  throw new Error(`haskind.${str}`);
};


// =============================================================================

export const _lazy: Function =
  (fn: Function, args: any[]): any => () =>
    fn.apply(this, args);

export const _notUndefined =
  (x: ?any, fn: Function): any =>
    type(x) === 'undefined' ? fn() : x;

export const _curry: Function =
  (fn: Function): Function =>
    (...args: any[]): any => {
      if (args.length >= fn.length)
        return fn.apply(null, args);
      else
        return args.reduce((f, a) => _curry(f.bind(this, a)), fn);
    };

// NOTE: Moving to Data.Function
// eslint-disable-next-line
export const constant = _curry((a, b) => a)

// =============================================================================

const condCheck =
  (...args) => (pair) => // eslint-disable-line
      pair[0](...args);

const condApply =
  (...args: any[]) => (pair: Function[]) => // eslint-disable-line
      pair[1](...args);

const undefinedCond: Function[][] =
  [[ True, constant(undefined) ]];

export const cond: Function =
  (ps: Function[][]): Function =>
    (...args: any[]): any =>
      ps.concat(undefinedCond)
        .filter(condCheck(...args))
        .map(condApply(...args))[0];

export const propExists = (prop, obj) => typeof(obj[prop]) !== 'undefined';

export function type (x) {
  switch (typeof x) {
  case 'object':
    switch (true) {
    case x === null : return 'Null';
    case x instanceof Map : return 'Map';
    case x instanceof Set : return 'Set';
    case Array.isArray(x) : return 'Array';
    case propExists('right', x) : return 'Either';
    case propExists('left', x) : return 'Either';
    case propExists('just', x) : return 'Maybe';
    case propExists('nothing', x): return 'Maybe';
    default : return 'Object';
    }
  case 'string': return 'String';
  case 'boolean': return 'Boolean';
  case 'number': return 'Number';
  default : return typeof x;
  }
}
