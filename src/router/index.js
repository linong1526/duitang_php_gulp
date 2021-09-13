const express=require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');

//npm install -g http-proxy-middleware
const router=express.Router()
module.exports=router

//每个请求都是需要处理数据，太麻烦，所以需要使用app.use(),可以让数据处理的中间件进入所有的接口
//添加请求体格式化中间件，让后面所有的接口都实现参数格式化
router.use(
    express.urlencoded({extended:true}),
    express.json()
    )
//利用中间件实现复杂跨域处理
// npm i -g http-server   安装服务
//需要另起一个服务  http-server -p XXXX
const whiteList = ['http://localhost:8080', 'http://localhost:3000']
router.use(function(req, res, next) {
    const origin = req.get('Origin');console.log('origin=',origin);
    const current = whiteList.find(item => item === origin);
    if (current) {
        res.header('Access-Control-Allow-Origin', origin)
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With, Token");
    }

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        // res.header("Access-Control-Allow-Methods","PUT")
        // res.header("Access-Control-Allow-Headers", "Token");
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

//  api/dt_hot -> /dt_hot
router.use('/dt_hot')

//上传
router.use('/upload',uploadRouter)

const offerMiddleware = createProxyMiddleware({ 
    // 目标服务器
    target: 'https://www.duitang.com', 

    // 修改请求源
    changeOrigin: true,

    // 路径重写
    pathRewrite:{
        '^/api/dt_hot':'/hot',
    }
})
// /api/proxy
router.use('/proxy',offerMiddleware)