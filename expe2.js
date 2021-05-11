#!/usr/bin/env node

fs = require("fs")
let path = require ("path")

//grab provided args
const [, , ...args] = process.argv

//print hello world  provided args
console.log(`hello world ${args}`)