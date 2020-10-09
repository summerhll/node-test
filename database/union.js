//引入 mongoose，用来操作数据库
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //数据库连接成功
    .then(() => {
        console.log('数据库连接成功');
    })
    //数据库连接失败
    .catch(() => {
        console.log('数据库连接失败');
    });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

const User = mongoose.model('User', userSchema) //courses

//文章
const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
   
    //作者
    author: {
        //使用id将文章和作者集合相关联
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
});

const Post = mongoose.model('Post', postSchema) //courses

//创建文章
// Post.create({ title: 'js权威指南', author: '5f8038e4f353018fe911a95f'})
// Post.create({ title: 'css世界', author: '5f8038e4f353018fe911a960'})

//关联查询
Post.find().populate('author').then(result => {
    console.log(result)
})