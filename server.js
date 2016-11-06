var http = require("http");  
const url = require('url');
const UAParser = require('ua-parser-js');

var parser = new UAParser();
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  parser.setUA(req.headers["user-agent"]);
  var result = parser.getResult(),
    language = req.headers["accept-language"].split(',');
  res.end("{\"ipaddress\":\""+req.headers["x-forwarded-for"]+"\",\"language\":\""+language[0]+
    "\",\"software\":\""+result.os.name+" "+result.cpu.architecture+" "+result.engine.name+" "+result.engine.version+"\"}")
}).listen(process.env.PORT || 8080);
