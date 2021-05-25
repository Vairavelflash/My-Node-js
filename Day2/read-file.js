// Reading the file Asynchronously :
var fs = require('fs');
fs.readFile('message.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log("Content:" + data);
});

//Reading the file synchronously :
var fs = require('fs');
var filename = 'content.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content' + content);