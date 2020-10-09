
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






//查询用户集合中的所有文档， 返回数组
// User.find().then((result) =>{
//     console.log(result);
// })



// //查询指定条件的文档,返回数组
// User.find({_id : '5f80308e791a948f36f2593e'}).then((result) =>{
//     console.log(result);
// })

//返回一个对象，默认返回当前集合中的第一条文档
// User.findOne({name : '李四'}).then((result) =>{
//     console.log(result);
// })

//匹配大于、小于
// $gt 大于， $lt: 小于
// User.find({age : { $gt: 20,$lt: 99}}).then((result) =>{
//     console.log(result);
// })


//匹配包含 $in
// User.find({hobbies : { $in: ['睡觉']}}).then((result) =>{
//     console.log(result);
// })

//选择要查询的字段， 默认都会查询_id字段
// -_id: 表示不查询_id字段  不查询某个字段就在前面加-
// User.find().select('name email').then((result) =>{
//     console.log(result);
// })


//排序
//age 正序， -age 倒序
// User.find().sort('-age').then((result) =>{
//     console.log(result);
// })


//skip跳过多少条数据 skip(2):跳过前两条文档
//limit限制查询数量
User.find().skip(2).limit(2).then((result) =>{
    console.log(result);
})
    