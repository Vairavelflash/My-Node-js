//here error.message property is set to the string provided.
const err = new Error('This is an error message');
console.error(err.message);
//Output will be :
//This is an error message

//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permissions , etc
//then an err message will be console.
//otherwise data will be printed
var fs = require('fs');

fs.readFile('message.txt', (err, data) => {
    if (err)
        return console.error(err);

    console.log("Content :  " + data);
});