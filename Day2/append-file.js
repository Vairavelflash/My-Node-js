// Appending the file Asynchronously
var fs = require('fs');
new_data = "This data will be appended at the end of the file.";
fs.appendFile('input.txt', new_data, (err) => {
    if (err) {
        throw err;
    }
    console.log('The new_content was appended successfully');
});

// Appending the file Synchronously
var fs = require('fs');
var content = "We are Appending this file synchronously using node.js";
fs.appendFileSync('input.txt', content);
console.log("File Appended Successfully");