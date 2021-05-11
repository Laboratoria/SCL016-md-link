#!/usr/bin/env node
//read arguments content
fs = require("fs")
let path = require ("path")

const [, , ...args] = process.argv
fs.readFile([, , ...args], 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
