let fs = require('fs');

let file =process.argv[2];
fs.readFile(file,'utf8',(err,content)=>{
   return console.log(content.toString().split('\n').length-1);
});
