// 项目的中间件
let express = require('express')
let app = express()

// 解决跨域，就这，5行代码
app.all('*', function (req, res, next) {
	// 任何网址都可以访问
	res.header("Access-Control-Allow-Origin", "*");
	// 允许的请求方式
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	// X-Requested-With，是普通请求，还是ajax请求
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.get('/search', (req, res) => {
	let _searchKey = req.query.search_content;
	console.log(_searchKey);

	// 临时商品
	let _tempGoods = [{
		name: '好看的男装',
		price: 99
	}, {
		name: '美丽的女装',
		price: 44
	}, {
		name: '可爱的童装',
		price: 55
	}, {
		name: '干活的工作服',
		price: 66
	}];

	// 过滤出结果
	let _filterGoods = _tempGoods.filter(item => {
		return item.name.indexOf(_searchKey) !== -1;
	});

	// 因为filter只返回结果为true的
	// 这里先写的简单一些，只返回一个结果
	let _resultObj = _filterGoods.length > 0
		? _filterGoods[0]
		: { msg: '没有找到结果' }

	res.send(_resultObj);
})

// header中滑动tab选项卡切换的title数据API
app.get('/get_tabList', (req, res) => {
	let _d = ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运行旅行', '数码家电', '全球特色'];
	// 我server暂时先响应回去一个_d
	res.send(_d)
})

app.listen(3344, () => {
	console.log("3344接口启用中！");
})