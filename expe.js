#!/usr/bin/env node
//reads a local file
fs = require("fs")
let path = require ("path")
const file = process.argv[2]
fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    console.log("zapato")
});
