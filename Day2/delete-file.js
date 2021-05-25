// Deleting the file Asynchronously :

var fs = require('fs');
var filename = 'content.txt';
fs.unlink(filename, (err) => {
    if (err)
        throw err;
    console.log('File deleted successfully');
});



// Deleting the file Synchronously :

var fs = require('fs');
var filename = 'data.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');