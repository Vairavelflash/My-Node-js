// var buff = Buffer.alloc(3);
// console.log(buff);

// var buff = Buffer.allocUnsafe(10);
// console.log(buff);

//Name of the file : buffer.from.js
var buff1 = Buffer.from('Nodejsera');
console.log("buff1 : " + buff1);

//Name of the file : buffer.compare.js
var buffer1 = Buffer.from('Nodejsera');
var buffer2 = Buffer.from('Nodejsera');
var output = buffer1.compare(buffer2);
console.log(output)
if (output < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (output == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(output + " comes after " + buffer2);
}