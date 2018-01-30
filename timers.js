var waitTime = 3000;
var interval = 10;
var curruntTime = 0;
var perwait =0;
// console.log("wait");

function waitPercent(p){
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write(`waiting .. ${p}%`);
}
var intt = setInterval(function () {

    curruntTime += interval; 
    perwait =Math.floor((curruntTime/waitTime)*100);
    waitPercent(perwait);
    // console.log(`waiting ${curruntTime/1000} secs`);


}, interval);

setTimeout(function () {
    clearInterval(intt);
    waitPercent(100);
    console.log("\nDone");

}, waitTime);

waitPercent(perwait);