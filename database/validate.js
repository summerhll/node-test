//引入 mongoose，用来操作数据库
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true})
    //数据库连接成功
    .then(()=>{ console.log('数据库连接成功'); })
    //数据库连接失败
    .catch(()=>{ console.log('数据库连接失败'); });


//文章
const postSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入文章标题'], //必选字段
        minlength: [2, 'title长度不能少于2'], //字符串的最小长度
        maxlength: [10, 'title长度不能多于10'],//字符串的最大长度
        trim: true //去除字符串两边空格

    },
    age : {
        type: Number,
        min: 18, //数字的最小范围
        max: 100  //数字的最大范围
    },
    //发布日期
    publishDate: {
        type : Date,
        //默认值
        default: Date.now() 
    },
    //文章分类
    category:{
        type: String,
        //枚举当前字段可取的值
        enum:{
            values: ['html', 'css', 'js', 'nodejs'],
            message : '分类名称要在一定的范围类才可以'
        }
    },
    //作者
    author:{
        type: String,
        //自定义验证器
        validate : {
            validator: v =>{
                //v 待验证的值
                //返回布尔值  true: 验证成功 false:验证失败
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入的值不符合验证规则'
        }

    }
});

const Post = mongoose.model('Post', postSchema) //courses

Post.create({ age: 33, category: 'java'})
    .then(result => { console.log(result); })
    .catch(error => { 
        //获取错误信息对象
        const err = error.errors;
        //循环错误信息对象
        for(let attr in err){
            //打印错误信息
            console.log(err[attr]['message']);
        }
    })
