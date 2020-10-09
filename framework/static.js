const express = require('express');
const path = require('path');
const app = express();

// 实现静态资源访问功能
 //http://localhost:3000/default.html
//app.use( express.static(path.join(__dirname, 'public')))


//http://localhost:3000/static/default.html
app.use( '/static', express.static(path.join(__dirname, 'public')))  

// 端口监听
app.listen(3000);
