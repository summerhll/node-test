//创建网站服务器
const http = require('http');
const url = require('url');
const app = http.createServer();
//为网站服务器对象监听请求事件
app.on('request', (req, res)=>{
    //实现路由功能：
    //1.获取客户端的请求方式
    const method = req.method.toLowerCase();
    //2.获取客户端的请求地址
    const { pathname } = url.parse(req.url, true);
    res.writeHead(200, {
        'content-type' : 'text/html;charset=utf8;'
    });

    if(method == 'get'){
        if(pathname == '/index' ||pathname == '/'){
            res.end('欢迎来到首页')
        }else if(pathname == '/list'){
            res.end('欢迎来到列表页')
        }else{
            res.end('页面不存在')
        }

    }else if(method == 'post'){
        //与get方法类似

    }
    
});
app.listen(3000);