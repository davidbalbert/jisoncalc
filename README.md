jisoncalc
=========

A simple calculator using Jison. It has math, grouping, exponents, PI, e, variables, and a repl.

##Using

```
$ npm -g install jison
$ jison parser.y lexer.l
$ node calc.js
>> 5 + 5
=> 10
>> foo = 10 * 2
=> 20
>> bar = foo + 3
=> 23
```

For more on what it can do, see test.js. For now, all variables default to 0.

License

jisoncalc is licensed under the terms of the [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html).
