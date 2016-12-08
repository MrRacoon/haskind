haskind
=======

##### Good ol' Haskell functions for use in Javascript

---

![haskell](/lamda.png)
![js](/js.png)

---

Motivation
----------

I love Haskell. And, I love Javascript.

It's hard to convince your employer to buy into the Haskell world. (Even though
you know it's the ish). but they **do** do Javascript. and They may even let you
bring in FP to Javascript. Sweet! You know FP! After all, you spent every night
in college playing with a language that really challenged you to understand
something so...arcane. It blew your mind and changed your reality! Why can't you
just bring that learning with you!? If that sounds familiar, this may be you.

Or, you are on the other end. You **want** to learn Haskell but you don't have
the time to fully immerse yourself in the lifestyle. But, you know Javascript.
What if you could get a taste, so that when you do come to the end of the "next
big thing" and you decide to "finally jump this time", you'll be much more
versed. If that sounds familiar, this may be for you.

Things I've learned so far
--------------------------

* Data.List.delete collides with js's `delete` keyword.
  - added a `'` to `haskind.List.delete'`
