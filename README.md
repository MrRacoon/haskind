Haskind
=======

[![dependencies Status][DEPS_IMG]][DEPS]
[![Build Status][BUILD_IMG]][BUILD]

##### Tried and true Haskell functions for use in Javascript

.oO( or at least as close as we can get )

![haskell](/lamda.png)
![js](/js.png)

---

### Description

I sure had a fun time when I could just use Haskell everyday back in college. I
miss the REPL and the familiar functions. I sure wish I had all that stuff, now
that I'm doing JS all the time..... I said before all of the sudden, BOOM,
Haskind was born!

This project is an exploration into porting functions common to Haskellers, into
the wild and typeless world of Javascript.

### Get Started

You can get the functions from npm using:

`npm install --save haskind`

Or, for a pre loaded interactive REPL, install [hkci][hkci], It comes with the
latest release of Haskind built in.

```
$> npm install --save hkci
$> hkci
```

### Usage

Require your favorite Haskell modules through the import system.

```javascript
import { Data } from 'haskind';

const { Just, Nothing, catMaybes } = Data.Maybe;
const { reverse } = Data.List

const maybes = [ Just(3), Nothing(), Just(5) ]

console.log(reverse(catMaybes(maybes))); // [ 5, 3 ]
```

### Note

This library is still in heavy development. Some functions/tricks are definitely
missing. Things like `fmap`, which can be applied across multiple types, has
still not been totally fleshed out.

### Inspiration

Haskind was heavily inspired by [Ramda][Ramda], [Lodash][Lodash] and
[Haskell.Base][Haskell].

### License

[MIT License](http://opensource.org/licenses/MIT)

Copyright &copy; 2016 Erik Sutherland. All rights reserved.

[DEPS]: https://david-dm.org/MrRacoon/haskind
[DEPS_IMG]: https://david-dm.org/MrRacoon/haskind/status.svg

[BUILD]: https://travis-ci.org/MrRacoon/haskind
[BUILD_IMG]: https://travis-ci.org/MrRacoon/haskind.svg?branch=master

[hkci]: https://github.com/MrRacoon/hkci
[Ramda]: http://ramdajs.com/
[Lodash]: https://lodash.com/
[Haskell]: http://hackage.haskell.org/package/base
