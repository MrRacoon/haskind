Notes
=====

* Haskell.Data.List.delete collides with js's `delete` keyword.
  - added a `'` to `haskind.List.delete'`

* Haskell.Data.Bool.(&&) collides with js's (&&)
  - changed the name to `haskind.Bool.and`

* Haskell.Data.Bool.(&&) short circuits
  - `haskind.Bool.and`'s eager evaluation will not allow this

* Haskell.Data.Bool.(||) collides with js's (||)
  - changed the name to `haskind.Bool.or`

* Haskell.Data.Bool.(||) short circuits
  - `haskind.Bool.or`'s eager evaluation will not allow this
