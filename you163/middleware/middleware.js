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

app.get('/aaa', (req, res) => {
    let _n = {
        a: '模拟第一个(number1)接口'
    }
    res.send(_n)
})
app.get('/bbb', (req, res) => {
    res.send('aaa接口')
})

app.listen(3344, () => {
    console.log("3344接口启用中！");
})