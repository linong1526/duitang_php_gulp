//数据接口
const path=require('path')
const express=require('express')
const router=require('./router')
const ssrRouter=require('./router/ssr')
const app=express();
app.use('/api',router)

// app.use(express.static('./public'))
//为了更加模块化 放在index.js中
// const goodsRouter=require('./router/goods')
// const userRouter=require('./router/user')
// app.use('/goods',goodsRouter)
// app.use('/user',userRouter)
// app.ssrRouter(express.static('./public'))
// app.ssrRouter('./api',router)
// // SSR
// // 设置模板引擎
// app.set('views',path.join(__dirname,'./views'))
// app.set('view engine','ejs');
// app.use('/views',ssrRouter)
app.listen(21053, () => {
    console.log('server is running at port 2105')
})