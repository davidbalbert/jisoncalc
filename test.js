parser = require('./parser')

calc_eval = function(eqn) {
  console.log(">> " + eqn);
  console.log("=> " + parser.parse(eqn));

  console.log();
}

eqn = "5 + 5 + 5 - 2";
calc_eval(eqn);

eqn = "1 - 5 * 4 / 2 + 1";
calc_eval(eqn);

eqn = "-5 + 2";
calc_eval(eqn);

eqn = "2 * (5 + 5)";
calc_eval(eqn);

eqn = "foo = 5 + 5";
calc_eval(eqn);

eqn = "foo";
calc_eval(eqn);

eqn = "hello_there1 = foo + 1";
calc_eval(eqn);

eqn = "hello_there1";
calc_eval(eqn);

eqn = "2^3";
calc_eval(eqn);

eqn = "2^3^4";
calc_eval(eqn);

eqn = "2^foo";
calc_eval(eqn);

eqn = "PI";
calc_eval(eqn);

eqn = "e ^ 2";
calc_eval(eqn);

eqn = "2.3 + 3.2e2";
calc_eval(eqn);

