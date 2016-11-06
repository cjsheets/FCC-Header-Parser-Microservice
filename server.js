var http = require("http");  
const url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  for( item of res.headers ){
    console.log(item);
  }
}).listen(process.env.PORT || 8080);
