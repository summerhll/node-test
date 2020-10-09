
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

//更新集合中的单个文档
User.updateOne({name : '李四'}, {name : '李丽'})
    .then((result) => { console.log(result)})

//更新集合中的多个文档，{}表示所有文档
User.updateMany({}, {age : 25})
    .then((result) => { console.log(result)})