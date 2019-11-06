var http = require("http");
var url = require("url");
var querystring = require("querystring");
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf8"}) //没有的话会乱码
    console.log(req.url);
    var reqparams = url.parse(req.url, true);
    console.log(reqparams.query);
    // var paramsobject = querystring.parse(reqparams.query);
    // console.log(paramsobject);
    var username = reqparams.query.username;
    var pwd = reqparams.query.pwd;
    res.end("用户名：" + username + "密码：" + pwd);

}).listen(8081);
console.log("服务器监听8081端口");