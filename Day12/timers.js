//Set Immediate - setImmediate(callback, args*)

function hello() {
    console.log("This will run Immediately");
}
console.log("It will orit the data Immediately");
setImmediate(hello);
console.log("After set immediate");

///
//set Interval - setInterval(callback, delay , args**)
// function hello() {
//     console.log("This will run recursively");
// }
// console.log("It will print the data recursively after a delay of 2000ms");
// setInterval(hello, 2000);
// console.log("come before set Interval");

///
//set Timeout - setTimeout(callback, delay , args** )
// function hello() {
//     console.log("This will run only once");
// }
// console.log("It will print the data once after the delay of 2000ms");
// setTimeout(hello, 2000);
// console.log("come before set timeout");

///
//clearImmediate 
function hello() {
    console.log("This will not run at all");
}
console.log("It is supposed to print the data immediately")
var imm = setImmediate(hello);
clearImmediate(imm);

///
//clear interval
function hello() {
    console.log("This will Not Run at all");
}
console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
var s_int = setInterval(hello, 2000);
clearInterval(s_int);

///
//clear Timeout
function hello() {
    console.log("This will not run at all");
}
console.log("It is supposed to Print the data once after the delay of 2000ms")
var tim = setTimeout(hello, 2000);
clearTimeout(tim);