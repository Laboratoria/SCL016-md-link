const fs= require('fs');
const marked = require("marked");
const path1 = require("path");

// let myPromise = Promise.resolve('todo bien');




// myPromise.then(res => {
//     console.log(res);
// });



// let myOtherPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(10), 2000);
// });
// myOtherPromise.then(res=>{
//     res= res*500;
//     console.log(res);
// });
// let directory = './Pruebas'
// const files = fs.readdirSync(directory);


//BUSCAR ARCHIVOS .MD

//LEER STATUS DE LINKS

// const fetchUrl= require('fetch').fetchUrl;
// const statusLinks = (url)=>{

//     return new Promise((resolve, reject)=>{

//    fetchUrl(url, (error, meta)=>{     
//      if(meta)  {
//          resolve(meta.status);
//      }else{
//          reject(error);     
//      } 
//     });
//  });
// };

// let url = "http://www.google.com";
// statusLinks(url)
// .then(res => {
//     console.log("el estado de",url,"es:", res);

// })
// .catch(err => {
//     console.log(err.code);
// });

//LEER CONTENIDO DE UN ARCHIVO

// let proces = process.argv;
// console.log(proces[2]);





//funcionó myFile = path.resolve(myFile);
const readAFile= (fileName, encoding) => {
  return new Promise ((resolve, reject) =>{
    fs.readFile(fileName, encoding,(err, data) =>{
      if (err){
        reject(err);
      }else{
        resolve(data);
      }

    });
  });
}


const extMd = (fileMD) => {

    return new Promise((resolve, reject) => {
      fs.readdir(fileMD, (error, files) => {
       
        if (error) {
          reject(error);
        }else{
          const mdFiles = files.filter((file) => file.includes(".md"));
      
          if (mdFiles.length == 0) {
            reject("No se encontraron archivos .md");
          } else {
            // let path1 = process.argv[2];// como ingresa el archivo el usuario
           const completePath = path1.join(fileMD, mdFiles[0]);//encontrar algo q me envie la ruta de todos los archivos md
        const rut = path1.resolve(completePath)//nombre decente
        console.log(rut,1);
            resolve(rut)
          };
        }
        });
      
    });
  };
  // console.log(333, extMd().then(res=>console.log(readAFile(res,'utf8').then(res=>console.log(res)))));


//CODIGO DE PRUEBA DE CONTENIDO DE README


// readAFile("READMEcopy.md", "utf8")
//    .then((res) => {
//   const links = [];
//   const renderer = new marked.Renderer(); // Extrae las diferentes partes del markdown

//   renderer.link = (href, title, text) => {
//     links.push({
//       href: href,
//       text: text,
//       title: title, //ruta del archivo..
//     });
//   };
//   marked(res, { renderer: renderer });

//   console.log(links,11);

//   const listLinks = links.map((link) => {
//     return link.href;
//   });
//   console.log(listLinks,22);

// }).catch((err) => {
//    console.log(err);
// });

//   const path = require("path");

//     const pathUser = process.argv[2];
//     let absPath = path.resolve(pathUser);
//     console.log(absPath);


// console.log(path.normalize(absoluta));
//  console.log(path.dirname(relativa));
// console.log(path.basename(absoluta));
//  console.log(path.extname(absoluta));

// npm install --save-dev jest


