var http = require('http');
var host = '127.0.0.1';
var port = 3000;
var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': "text/plain" });
    console.log("server Working");
    response.write("hello world");
    response.end('Server working success');
});
server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured:', error);

    } else {
        console.log('server is lisitioning on ' + host + ':' + port);
    }
});