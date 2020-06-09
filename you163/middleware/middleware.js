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

// 轮播图的图片数据
app.get('/get_swiperImg', (req, res) => {
	let _n = [
		'https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
		'https://yanxuan.nosdn.127.net/195499737e4c86964fc5ba16a3af484c.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
		'https://yanxuan.nosdn.127.net/43545a96cf86a70c72037094982fa51d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
		'https://yanxuan.nosdn.127.net/6bde94bfe94e65253e7bc636c225d23e.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
	]
	// let _n = [
	// 	{ "src": '../assets/images/lun1.webp' },
	// 	{ "src": '../assets/images/lun2.webp' },
	// 	{ "src": '../assets/images/lun3.webp' },
	// 	{ "src": '../assets/images/lun4.webp' },
	// ]
	// 接口返回值
	res.send(_n)
})

// 分类页商品列表点击请求
app.get('/category_list_0', (req, res) => {
	let _d = [{
		goods_img: 'https://yanxuan-item.nosdn.127.net/0afcd9dd065aa207e56d34dd85aa136e.png',
		goods_name: '睡出丝滑娇肤，100%桑蚕丝防螨提花被 薄被',
		goods_price: 679
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/c552b8bf17d88aa9bba6972f1d449483.png',
		goods_name: '自带清凉，黑科技持久冷感垫 三件套',
		goods_price: 159
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/55793ff7a0b3eb47b4b562cabd1670d9.png',
		goods_name: '可折叠爽滑冰丝席 三件套',
		goods_price: 189
	}];

	res.send(_d);
});

app.get('/category_list_1', (req, res) => {
	let _d = [{
		goods_img: 'https://yanxuan-item.nosdn.127.net/aa8d1a3f633f954474e421ef627c075a.png',
		goods_name: '法国原产条纹圆领短袖T恤情侣款',
		goods_price: 578
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/8563f498cec5b5f9474c8daadce4ca9f.png',
		goods_name: '男式舒适丝棉条纹短袖衬衫',
		goods_price: 209
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/16e78d60046c37375f8161e947258a70.png',
		goods_name: '女式方扣中跟乐福鞋',
		goods_price: 349
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/e3b6d3274397cdc5c1632ebf63059897.png',
		goods_name: '男式无缝休闲运动T恤',
		goods_price: 49.9
	}];

	res.send(_d);
});

app.get('/category_list_2', (req, res) => {
	let _d = [{
		goods_img: 'https://yanxuan-item.nosdn.127.net/ab5de9e34349e85581487446ea44b3e9.png',
		goods_name: '夏季宵食吮指好味，盱眙小龙虾4-6钱 3斤装',
		goods_price: 109
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/926865f19bd4b3dc10285cb8307144e6.png',
		goods_name: '逛吃逛吃的青春季，想见你 情侣零食礼袋',
		goods_price: 99
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/9e3ec5ff3fc254c30583ad9b65d39a9a.png',
		goods_name: '山药脆片 烧烤味 70克*3袋',
		goods_price: 19
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/23a9fba86c3942f1a574731792854bc2.png',
		goods_name: '女式无缝运动T恤',
		goods_price: 49.9
	}, {
		goods_img: 'https://yanxuan-item.nosdn.127.net/927f79fa2979260fa8e87fdb2187f701.png',
		goods_name: '女式低强度无缝运动文胸',
		goods_price: 49.9
	}];

	res.send(_d);
});

app.listen(3344, () => {
	console.log("3344接口启用中！");
})