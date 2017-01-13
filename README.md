haskind
=======

[![dependencies Status](https://david-dm.org/MrRacoon/haskind/status.svg)](https://david-dm.org/MrRacoon/haskind)
[![Build Status](https://travis-ci.org/MrRacoon/haskind.svg?branch=master)](https://travis-ci.org/MrRacoon/haskind)

##### Tried and true Haskell functions for use in Javascript

.oO( or at least as close as we can get )

![haskell](/lamda.png)
![js](/js.png)

---
### Description

This project uses [Flow types](https://flowtype.org/) and some functional magic to provide a set of functions closely mimicking the libraries provided by Haskell.

I keep track of weird compatibility issues in [my notes](/notes.md).

### Get Started

If you wanna get started as soon as possible, try [hkci](https://www.npmjs.com/package/hkci), a preloaded repl!

otherwise, install the library from npm:

```
npm install --save haskind
```

### Usage

Require your favorite Haskell modules through import.

```javascript
import { Data } from 'haskind';

const { Just, Nothing, catMaybes } = Data.Maybe;
const { reverse } = Data.List

const maybes = [ Just(3), Nothing(), Just(5) ]

console.log(reverse(catMaybes(maybes))); // [ 5, 3 ]
```

### Note

This lib is still in heavy development. Some functions/tricks are definitely missing. Things like `fmap`, which can be applied across multiple types, has still not been fleshed out.

### Contributing

If you see something you want to fill in, or think is off, feel free to submit a
PR.

## Alternatives

Haskind was heavily inspired by [Ramda](http://ramdajs.com/), [Lodash](https://lodash.com/) and [Haskell.Base](http://hackage.haskell.org/package/base).

## License

[MIT License](http://opensource.org/licenses/MIT)

Copyright &copy; 2016 Erik Sutherland. All rights reserved.
