var http = require('http');
var fs = require('fs');
console.log('server will listen at : 127.0.0.1:3000');
http.createServer((req, res) => {
    console.log("port number: 3000");
    // Change the MIME type to application/pdf
    res.writeHead(200, { "Content-Type": "application/pdf" });
    fs.readFile('index.pdf', (error, data) => {
        if (error) {
            res.join({ 'status': 'error', msg: err });
        } else {
            res.write(data);
            res.end();
        }
    })
}).listen(3000);