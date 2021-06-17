
// const file = process.argv[2]
// mdLinks(file)

// const file = () => pathlib = process.argv[2];
const optionValidate = process.argv[3]
const options = {
    validate: false,
    stats:false
  };


if ((optionValidate === '--validate')) {
    options.validate = true;
    
}else {
    console.log('error');
   
  }
  
//   let uniqueLinks = 0;
//   let totalLinks = 0;
//   let brokenLinks = 0;
  