#!/usr/bin/env node

var parser = require('./parser');

var stdin = process.openStdin();
var stdout = process.stdout;

stdout.write(">> ");
stdin.addListener("data", function(d) {
  console.log("=> " +
    parser.parse(d.toString().substring(0, d.length-1)));
  stdout.write(">> ");
});
