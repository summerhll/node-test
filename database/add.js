//引入 mongoose，用来操作数据库
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true})
    //数据库连接成功
    .then(()=>{ console.log('数据库连接成功'); })
    //数据库连接失败
    .catch(()=>{ console.log('数据库连接失败'); });

//创建集合规则
const courseSchema =  new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

//使用规则创建集合,返回新建集合的构造函数
//入参： 1.集合名称 2.集合规则
const Course = mongoose.model('Course', courseSchema) //courses

//创建文档方式一
//创建集合实例
// const course = new Course({ 
//     name : "nodejs 基础",
//     author : '黑马讲师',
//     isPublished: true
// });

 //将数据保存到数据库中
// course.save();

//创建文档方式二
// Course.create({
//     name : "css世界",
//     author : '心绪',
//     isPublished: true

// }, (err, result)=>{
//     console.log(err);
//     console.log(result);
// })


// Course.create({ name : "html5", author : '李四', isPublished: true})
//     .then((result)=>{ console.log(result); })
//     .catch((err)=>{console.log(err); });


const userSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

const User = mongoose.model('User', userSchema) //courses

User.create({
    name : "张三",
    age : 11,
    email: '1833002417@qq.com',
    password: '123456',
    hobbies: ['睡觉']

})

User.create({
    name : "林奇",
    age : 99,
    email: '1833002417@qq.com',
    password: '123456',
    hobbies: ['运动']

})

User.create({
    name : "李四",
    age : 11,
    email: '1833002417@qq.com',
    password: '123456',
    hobbies: ['吃饭']

})

User.create({
    name : "王武",
    age : 22,
    email: '1833002417@qq.com',
    password: '123456',
    hobbies: ['跑步']

})

User.create({
    name : "赵六",
    age : 12,
    email: '1833002417@qq.com',
    password: '123456',
    hobbies: ['跳舞']

})

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


//匹配包含 
User.find({hobbies : { $in: ['睡觉']}}).then((result) =>{
    console.log(result);
})