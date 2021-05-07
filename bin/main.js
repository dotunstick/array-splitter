#!/usr/bin/env node

const yargs = require('yargs');
const utilFunction = require("../index");

const options = yargs
 .usage('Usage: -a <array> -s <size>')
 .option('a', { alias: 'array', describe: 'Array to split - space separated values, e.g -a=1 2 3 4', type: 'array', demandOption: true })
 .option('s', { alias: 'size', describe: 'Size of new array', type: 'number', demandOption: true })
 .argv;

console.log(utilFunction.splitArray(options.a, options.s));