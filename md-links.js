const fs = require("fs");
const pathLib = require("path");
const marked = require("marked");
const fetchUrl= require('fetch').fetchUrl;
const { url } = require("inspector");







// const isFile = fs.statSync('./Pruebas/READMEcopy.md').isFile();
// console.log(isFile,00);

// // //EXTRAER ARCHIVOS .md

const readAFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const links = detectLinks(data, fileName)
        resolve(links);
      }
    });
  });
};


const fileMD = process.argv[2];
const extMd =(fileMD) => {
  return new Promise((resolve, reject) => {
    fs.readdir(fileMD, (error, files) => {
      if (error) {
        reject(error);
      } else {
        const mdFiles = files.filter((file) => file.includes(".md"));
        if (mdFiles.length == 0) {
          reject("No se encontraron archivos .md");
        } else {

          const filterMd = mdFiles.map((file) => {
            const completePath = pathLib.join(fileMD, file);
            const route = pathLib.resolve(completePath);

            return readAFile(route);
          }, );
          Promise.all(filterMd).then((results) => {
            resolve(results);
          });
        }
      }
    });
  });
};
extMd(fileMD)
  .then((results) => { 
 console.log(results);
// results.forEach((result) =>{
//   let url = result.href;
//   console.log(url)
// return url
  

// });console.log(url);

});

const detectLinks = (data, route) =>{
  const links = [];
  const renderer = new marked.Renderer(); // Extrae las diferentes partes del markdown

  renderer.link = (href, title, text) => {
    links.push({
      href: href,
      text: text,
      file:route, //ruta del archivo..
    });
  };
  marked(data, { renderer: renderer });

return links
}


const optionValidate = process.argv[3]
const options = {
    validate: false,
    stats:false
  };


if ((optionValidate === '--validate')) {
    options.validate = true;
    
}else {
    console.log('error');
   
  };

  
//crear funcione que tome el nuevo arreglo con map para ver el status.  ver como tomar la caprpeta que inmgresa el usuario y ver la ruta de links.

// const newLinks = extMd(resultado);
//   const listLinks = newLinks.map((link) => {
//     return link.href;


//  })
//  console.log(listLinks);

//VER STATUS DE LINKS


// const statusLinks = (results) => {
  
//   results.forEach(element => {
//     let url = element.href
//   return url
    
 
// });
// }
//  console.log(statusLinks)
//     return new Promise((resolve, reject)=>{

//    fetchUrl(links, (error, meta)=>{
//      if(err)  {
//       reject(error);
//      }else{
// const listLinks = statusLinks(resultado)
//       resolve(listLinks.meta.status);
//      }
//     });
//  });
// };
// statusLinks(resultado)
// .then(res => {
//     console.log("el estado de",links,"es:", res);

// })
// .catch(err => {
//     console.log(err.code);
// });
