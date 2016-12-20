Notes
=====

* Haskell.Data.List.delete collides with js's `delete` keyword.
  - added a `'` to `haskind.List.delete'`

* Haskell.Data.Bool.(&&) collides with js's (&&)
  - changed the name to `haskind.Bool.and`

* Haskell.Data.Bool.(||) collides with js's (||)
  - changed the name to `haskind.Bool.or`
