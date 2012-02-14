parser = require('./parser')

eqn = "5 + 5 + 5 - 2"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "1 - 5 * 4 / 2 + 1"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "-5 + 2"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "2 * (5 + 5)"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();


eqn = "foo = 5 + 5"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "foo"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "bar = foo + 1"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();

eqn = "bar"
console.log(">> " + eqn);
console.log("=> " + parser.parse(eqn));

console.log();
