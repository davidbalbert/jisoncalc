#!/usr/bin/env node

var assert = require('assert'),
    parser = require('./parser');

var stdout = process.stdout;

eqn = "5 + 5 + 5 - 2";
assert.equal(parser.parse(eqn), 13);
stdout.write(".");

eqn = "1 - 5 * 4 / 2 + 1";
assert.equal(parser.parse(eqn), -8);
stdout.write(".");

eqn = "-5 + 2";
assert.equal(parser.parse(eqn), -3);
stdout.write(".");

eqn = "2 * (5 + 5)";
assert.equal(parser.parse(eqn), 20);
stdout.write(".");

eqn = "foo = 5 + 5";
assert.equal(parser.parse(eqn), 10);
stdout.write(".");

eqn = "foo";
assert.equal(parser.parse(eqn), 10);
stdout.write(".");

eqn = "hello_there1 = foo + 1";
assert.equal(parser.parse(eqn), 11);
stdout.write(".");

eqn = "hello_there1";
assert.equal(parser.parse(eqn), 11);
stdout.write(".");

eqn = "2^3";
assert.equal(parser.parse(eqn), 8);
stdout.write(".");

eqn = "2^3^4";
assert.equal(parser.parse(eqn), 2.4178516392292583e+24);
stdout.write(".");

eqn = "2^foo";
assert.equal(parser.parse(eqn), 1024);
stdout.write(".");

eqn = "PI";
assert.equal(parser.parse(eqn), Math.PI);
stdout.write(".");

eqn = "e ^ 2";
assert.equal(parser.parse(eqn), Math.E * Math.E);
stdout.write(".");

eqn = "2.3 + 3.2e2";
assert.equal(parser.parse(eqn), 2.3 + 3.2e2);
stdout.write(".");

console.log("All passed!");
