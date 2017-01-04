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

Currently all functions are required through a single entry point (not quite ready for `import` tricks).

```javascript
const Data = require('haskind');

const { Just, Noting, catMaybes } = Data.Maybe;
const { reverse } = Data.List

const maybes = [ Just(3), Noting(), Just(5) ]

console.log(reverse(catMaybes(maybes))); // [ 5, 3 ]
```

### Note

This lib is still in heavy development. Some functions/tricks are definitely missing. Things like `fmap`, which can be applied across multiple types, has still not been fleshed out.

### Contributing

Luckily, it's super easy to contribute. I can't say no to anything that is provably available in Haskell. Submit a PR with the example case you want to cover in the tests, along with your solution, (or not, you can make the test pending and I'll eventually get around to it), and we'll sort it out.
