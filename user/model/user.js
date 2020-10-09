const mongoose = require('mongoose');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	age: {
		type: Number,
		min: 10,
		max: 25
	},

	password: String,
	hobbies: [ String ],
	
});
// 创建学生信息集合
const User = mongoose.model('User', userSchema);
// 将学生信息集合进行导出
module.exports = User;