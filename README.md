jisoncalc
=========

A simple calculator using Jison. Only does addition :).

#Using
```
$ npm -g install jison
$ jison parser.y lexer.l
$ node
```

```javascript
> parser = require('./parser')
> parser.parse("5 + 5");
```
