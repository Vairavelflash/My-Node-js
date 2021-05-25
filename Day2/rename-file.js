// Renaming the file Asynchronously :

var fs = require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.rename('data.txt', 'new_data.txt', (err) => {
    if (err)
        throw err;
    console.log('File renamed successfully');
});

//To check it's Asynchronous nature !
console.log("This method is Asynchronous");

// Renaming the file Synchronously :

var fs = require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('data.txt', 'newData.txt');
console.log('File renamed successfully');

// To check it's Synchronous nature !
console.log("This method is Synchronous");