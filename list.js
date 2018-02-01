var fs = require("fs");

var files = fs.readdirSync('../xnodejs');

console.log(files);

var filesAsync = fs.readdir('../xnodejs',(err,files)=>{
    if(err) throw err;
    console.log(files);
});
console.log(`reading  files`);


