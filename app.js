var express = require("express");
var fs = require("fs");
let path = require('path');
var app = express();

// app.get("/" , function (req , res) {
//     fs.readFile("./project/index/static/index.html" , "utf-8" , function(err , data){
//         if(err){
//             res.send("<!DOCTYPE html><html><head><title>哈哈</title></head><body>123</body></html>");
//         }else{
//             res.send(data);
//         }
//     });
// });

app.use(express.static(path.join(__dirname, './project/index/static')));
// 正文资源 请求返回
app.use(express.static(path.join(__dirname, './project/index/src/articleAssets')));


// app.all('/', function(req, res){
//     console.log("=======================================");
//     console.log("请求路径："+req.url);
//     var filename = req.url.split('/')[req.url.split('/').length-1];
//     var suffix = req.url.split('.')[req.url.split('.').length-1];
//     console.log("文件名：", filename);
//     if(req.url==='/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(get_file_content(path.join(__dirname, 'html', 'index.html')));
//     }else if(suffix==='css'){
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.end(get_file_content(path.join(__dirname, 'public', 'css', filename)));
//     }else if(suffix in ['gif', 'jpeg', 'jpg', 'png']) {
//         res.writeHead(200, {'Content-Type': 'image/'+suffix});
//         res.end(get_file_content(path.join(__dirname, 'public', 'images', filename)));
//     }
// });

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


var server = app.listen( 80 , function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});