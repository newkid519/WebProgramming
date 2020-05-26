var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    fs.readFile('C:\\Users\\kennyzx\\data.xml', 'utf8', function (err, data) {
       if (err){
           console.log(err);
           return;
        }
        response.write(data);
        response.end();
    });
    
}).listen(8888);