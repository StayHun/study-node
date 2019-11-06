var http = require("http");
var url = require("url");
var querystring = require("querystring");
http.createServer(function(req, res){
    var post = "";
    req.on("data", function(chunk){
        post += chunk;
        console.log(post);
    });
    req.on("end", function(){
        post = querystring.parse(post);
        console.log(post);
        res.writeHead(200, {"Content-Type": "text/html; charset=utf8"}) //没有的话会乱码
        res.end("用户名：" + post.username + "密码：" + post.pwd);
    });
}).listen(8082);
console.log("服务器监听8082端口");