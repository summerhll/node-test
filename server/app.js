//引入创建网站服务器的模块
const http = require('http');
//用于处理url请求地址
const url = require('url');
//app就是网站服务器对象
const app = http.createServer();
//当客户端有请求时
app.on('request', (req, res)=>{
    //获取请求方式 req.method
    // console.log(req.method);
    // if(req.method =="POST"){
    //     res.end('post');

    // }else if(req.method =="GET"){
    //     res.end('get');
    // }

    //获取请求地址 req.url
    // console.log(req.url)
    // if(req.url == '/index' || req.url == '/'){
    //     res.end('welcome to home page')
    // }else if(req.url == '/list'){
    //     res.end('welcome to list page')
    // }else{
    //     res.end('not find')
    // }

    //获取请求报文信息 req.headers
    // console.log(req.headers)
    // console.log(req.headers['accept'])


    // res.writeHead 修改响应信息
    // res.writeHead(500); //修改状态码
    // res.writeHead(200, {
    //     'content-type': 'text/html;charset=utf8;'
    // });
    // res.end('<h2> welcome 欢迎光临</h2>');

    
    //第一个参数：解析url并返回一个对象
    //第二个参数：将查询到的参数保存成对象格式
    //http://localhost:3000/list?name=zhangsan&code=4
    let { query, pathname} = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.code);
    if(pathname == '/index' ||pathname == '/'){
        res.end('welcome to home page')
    }else if(pathname == '/list'){
        res.end('welcome to list page')
    }else{
        res.end('not find')
    }

});
//监听端口
app.listen(3000);
console.log("网站服务器启动成功");
