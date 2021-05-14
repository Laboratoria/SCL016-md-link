const fs = require("fs");
const path = require('path');
let files = process.argv[2];

// const mdLinks = () => {

// let path = process.argv[2];
//   if(!path){
//   console.log("please write a valid path")
//   return path
// } 

// new Promise 
// ((resolve, reject) => {
//   fs.readdir(files, 'utf8', (err, data) => {
//   if (err) {throw err;} else {resolve (data)}
//     // console.log(data);  
//     console.log(data);  
//     return data 
//     })
    
//   })
// }

// mdLinks()


const mdLinks = () => {

  let path = process.argv[2];
  if(!path){
    console.log("please write a valid path")
    return path
  }

new Promise 
((resolve, reject) => {
  fs.readdir(files, 'utf8', (err, data) => {
  if (err) {throw err;} else {resolve (data)}
    // console.log(data);  
    console.log(data);  
    return data 
    })
  
  // if (files === "md") {
  //   fs.
  })
}

mdLinks()


