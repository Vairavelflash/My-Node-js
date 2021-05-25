// require fs module for file system
var fs = require('fs');
var wdata = "I am working with streams for the first time";

var myWriteStream = fs.createWriteStream('aboutMe.txt');

// write data

myWriteStream.write(wdata);
console.log('Done');
//done writing
myWriteStream.end();

//write handler for error event
myWriteStream.on('error', function(err) {
    console.log(err);
});

myWriteStream.on('finish', function() {
    console.log("data written successfully using streams");
    console.log("Now trying to read the same file using read streams");
    var myReadStream = fs.createReadStream('about.txt');
    //add handlers for our read stream
    var rContents = " // to hold the read contents";
    myReadStream.on('data', function(chunk) {
        rContents += chunk;
    });
    myReadStream.on('error', function(err) {
        console.log(err);
    });
    myReadStream.on('end', function() {
        console.log('read: ' + rContents);
    });
    console.log('performed write and read using streams');

});