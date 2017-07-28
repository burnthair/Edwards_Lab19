var http = require('http');
var obj = require('./textObject');

http.createServer(function(request, response) {
  var quote = obj.randomizer();
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(quote);
  response.end();
}).listen(8888);
