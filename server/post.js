//引入创建网站服务器的模块
const http = require('http');
//引入处理请求参数模块
const querystring = require('querystring');
//app就是网站服务器对象
const app = http.createServer();
//当客户端有请求时
app.on('request', (req, res)=>{
    //post参数放在请求体中进行传输，get参数放在地址栏中进行传输
    //post参数是通过事件的方式接收的，post参数不是一次性传递完成的，会分片
    //当请求参数传递的时侯触发data事件
    //当参数传递完成的时侯触发end事件
    //使用querystring系统模块将参数转换为对象格式

    let postParams = ''

    //监听参数传输事件
    req.on('data', (params)=>{
        postParams += params;
    });

    //监听参数传输完毕事件
    req.on('end', ()=>{
        console.log(querystring.parse(postParams)); //将字符串参数处理成对象格式
    });
    res.end('ok');
   
});
//监听端口
app.listen(3000);
console.log("网站服务器启动成功");
