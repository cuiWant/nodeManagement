const Koa = require('koa');
const router = require('./router/index')
const app = new Koa();
const cors = require('koa-cors');
app.use(cors()) //处理跨域
router.get( '/get_code', (ctx, next) => {
    let id = ctx.request.query.id
    ctx.response.body = {
         id,
         code: 200
    }
});
router.get('/',(ctx)=>{
    ctx.response.body = {a:1}
    // ctx.body={a:'11'}
})
app
.use(router.routes())
.use(router.allowedMethods());
let port = 3000;
// app.use(async ctx => {
//     ctx.body = "响应";
//   });   

app.listen(port,function(error){
    if(!error)console.log('项目启动成功，端口号'+port)
})