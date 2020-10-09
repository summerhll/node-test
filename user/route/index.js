// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
// 学生信息集合
const User = require('../model/user');
// 引入模板引擎
const template = require('art-template');
// 引入querystring模块
const querystring = require('querystring');

// 呈递学生档案信息页面
router.get('/add', (req, res) => {
	let html = template('index.art', {});
	res.end(html);
})

// 呈递学生档案信息列表页面
router.get('/list', async (req, res) =>{
	// 查询学生信息
	let users = await User.find();
	console.log(users);
	let html = template('list.art', {
		users: users
	})
	res.end(html)
})
// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
	// 接收post请求参数
	let formData = '';
	req.on('data', param => {
		formData += param;
	});
	req.on('end', async () => {
		await User.create(querystring.parse(formData))
		res.writeHead(301, {
			Location: '/list'
		});
		res.end()
	})
});

module.exports = router;