var path = require("path");
var name = "Hello coder";

console.log(name);
console.log(global.name);

var substring  = name.slice(6);

console.log(`I am a ${substring}`);

console.log(__dirname);
console.log(__filename);
console.log(`File name is ${path.basename(__filename)}`);
