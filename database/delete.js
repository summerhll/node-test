
//引入 mongoose，用来操作数据库
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true})
    //数据库连接成功
    .then(()=>{ console.log('数据库连接成功'); })
    //数据库连接失败
    .catch(()=>{ console.log('数据库连接失败'); });


const userSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

const User = mongoose.model('User', userSchema) //courses


//查询到一条文档并且删除，返回删除的文档
//如果查询条件匹配了多个文档，那么则会删除第一个匹配的文档
User.findOneAndDelete({_id : '5f8034f57db7b38f93da7fb0'}).then((result) =>{
    console.log(result);
});

//删除多个
//查询条件为空或者是空对象时，则会删除所有的数据
//删除User表中所有数据
// User.deleteMany().then((result) =>{
//     console.log(result);
// });

//删除User表中所有数据
User.deleteMany({}).then((result) =>{
    console.log(result);
});






