var fs = require('fs');
var filename = 'data.txt';
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);

// Validating emails using regular expression
var str = 'rjbitdemo@gmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match(pattern);
if (res) {
    console.log("Valid email address");
} else {
    console.log("Please enter a valid email address");
}

// Validating Password using regular expression :
var str = 'Aa#1aaabcde'
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = str.match(pattern);
if (res) {
    console.log("Valid password");
} else {
    console.log("Not a valid password");
}