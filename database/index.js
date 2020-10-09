//引入 mongoose，用来操作数据库
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true})
    //数据库连接成功
    .then(()=>{ console.log('数据库连接成功'); })
    //数据库连接失败
    .catch(()=>{ console.log('数据库连接失败'); });

