// console.log(process.argv);


function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

var greet = grab('--greet');
var user = grab('--user');

if (!user || !greet) {
    console.log("Something missing");
} else {
    console.log(`${greet} ${user} `);
}

process.stdout.write("hello");

process.stdout.write("world \n\n\n");

// process.exit();

var ques = ['Name?','Happy? Y ? N ? M ?'];

function ask(i){
process.stdout.write(`\n\n${ques[i]} -> `);
}
ask(0);
var ans= [];
process.stdin.on("data",(data)=>{
    ans.push(data.toString().trim());
    if(ans.length <ques.length){
        ask(ans.length);
    }else{
        process.exit();
    }
    
});

process.on("exit",()=>{
    process.stdout.write(`\n${ans[0]} ${ans[1]} \n \n`);
});
