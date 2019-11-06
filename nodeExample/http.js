// http协议：一个应用层协议，由请求和响应构成，是一个标准的客户端服务器模型，
// 用于从WWW服务器传输超文本到本地浏览器的传输协议，并且是一个无状态的协议。

// http工作原理：
// 1.建立tcp连接，客户端连接服务器。
// 2.发送http请求。
// 3.服务器接受请求并返回HTTP响应。
// 4.释放连接TCP连接。
// 5.客户端解析HTML内容。

// // 方法一
// var http = require("http");
// http.createServer(function(req, res){
//     res.write("hello world");
//     res.end();
// }).listen(8081);// http://localhost:8081 显示 hello world

// 方法二
var http = require("http");
var server = new http.Server();
// server.listen(8081);
server.on("request", function(req, res){
    res.write("hello worldddd");
    res.end();
}).listen(8081);// http://localhost:8081 显示 hello worldddd
