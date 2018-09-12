var express = require("express");
var fs = require("fs");
var app = express();

app.get("/" , function (req , res) {
    fs.readFile("./project/index/index.html" , "utf-8" , function(err , data){
        if(err){
            res.send("<!DOCTYPE html><html><head><title>哈哈</title></head><body>123</body></html>");
        }else{
            res.send(data);
        }
    });
});

// // 网站首页接受 POST 请求
// app.post('/', function (req, res) {
//     res.send('Got a POST request');
// });

// // /user 节点接受 PUT 请求
// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user');
// });

// // /user 节点接受 DELETE 请求
// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user');
// });


var server = app.listen( 3000 , function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});