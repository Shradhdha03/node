var spawn = require("child_process").spawn;
var cp = spawn("node", ["talking"]);

cp.stdout.on("data", (data) => {
    console.log(`${data.toString()}`);
});

cp.on("close", () => {
    console.log("Child process is ended");
    process.exit();
});

setTimeout(function() {
    cp.stdin.write("stop");
}, 5000);