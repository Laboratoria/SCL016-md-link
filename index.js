#!/usr/bin/env node
let fs = require("fs")
let path = require ("path")
//Read a file and print content to the console
module.exports = (path) => {
  fs.readFile(path, "uft8", (err, data) => {
    if(err) {
      console.log("error: ", err)
      //return
    } else {
      console.log(data)
      return data
      
    }
  })
};

