var http = require('http');
var obj = require('./textObject');

http.createServer(function(request, response) {
  var asciiArt = obj.randomizer();
  console.log(asciiArt);
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(asciiArt);
  // console.log(asciiArt.randomProp);
  response.end();
}).listen(8888);
