var http = require("http");
var url = require("url");
var querystring = require("querystring");
http.createServer(function(req, res){
    console.log(req.url);
    var reqparams = url.parse(req.url);
    console.log(reqparams.query);
    var paramsobject = querystring.parse(reqparams.query);
    console.log(paramsobject);
}).listen(8083);
console.log("服务器监听8083端口");