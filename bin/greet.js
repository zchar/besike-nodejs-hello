#!/usr/bin/env node
var greet = require('../index');
var argv = require('minimist')(process.argv.slice(2));
var name = process.argv[2];

console.log(greet(name, argv.drunk));
