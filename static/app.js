//引入创建网站服务器的模块
const http = require('http');
//app就是网站服务器对象
const app = http.createServer();

const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require('mime');

//当客户端有请求时
app.on('request', (req, res)=>{
    let pathname = url.parse(req.url).pathname;//获取用户的请求路径
    pathname = pathname =='/' ? '/form.html' : pathname;
    //将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join( __dirname, 'public', pathname);
    let mimeType = mime.getType(realPath);
    //读取文件
    fs.readFile(realPath, (error, result) =>{
        //如果文件读取失败
        if(error != null){
            res.writeHead(404, {
                'content-type' : 'text/html;charset=utf8'
            })
            res.end('文件读取失败');
            return;
        }

        res.writeHead(200, {
            'content-type' : mimeType

        })
        console.log(mimeType)
        res.end(result);

    })
   

});
//监听端口
app.listen(3000);
console.log("网站服务器启动成功");
