var path = require('path');
var util = require('util');
var v8 = require('v8');
var readline = require('readline');

var dirPath = path.join(__dirname, 'mydir', 'files', 'uploads');
console.log(dirPath);

// D:\code\xnodejs\mydir\files\uploads
util.log(dirPath);

// 30 Jan 11:02:46 - D:\code\xnodejs\mydir\files\uploads
util.log(v8.getHeapStatistics());

//  { total_heap_size: 7409
//     total_heap_size_executable: 5242880,
//     total_physical_size: 7409232,
//     total_available_size: 1491393480,
//     used_heap_size: 3957904,
//     heap_size_limit: 1535115264 }

var person = {
    name: '',
    sayings: []

}

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Name?", (ans) => {
    person.name = ans;
    rl.setPrompt(`What would ${person.name} has to say?`);
    rl.prompt();
    // console.log(ans);
    rl.on('line', (saying) => {
        // console.log(saying);
        if (saying.toString().trim() == "exit") {
            rl.close();
        } else {
            person.sayings.push(saying);
            rl.setPrompt(`What else ? say exit to leave.`);
            rl.prompt();
        }
    });
});

rl.on('close', (saying) => {
    console.log('%s ==> %j', person.name, person.sayings);
    process.exit();
});

