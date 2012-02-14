parser = require('./parser')

eqn = "5 + 5 + 5 - 2"
console.log(eqn + " = " + parser.parse(eqn))

eqn = "1 - 5 * 4 / 2 + 1"
console.log(eqn + " = " + parser.parse(eqn))

eqn = "-5 + 2"
console.log(eqn + " = " + parser.parse(eqn))
