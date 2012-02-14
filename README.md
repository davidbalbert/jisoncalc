jisoncalc
=========

A simple calculator using Jison. It has a repl.

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

For more on what it can do, see test.js
