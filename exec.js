var exec = require("child_process").exec;

exec("git version", (err, stdout) => {
    if (err) {
        throw err;
    } else {
        console.log(stdout);
    }
});