const Koa=require('koa')
const app=new Koa()
const compose=require('koa-compose')

const logger=(ctx,next)=>{
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  next()
}
const main=(ctx,next)=>{
  ctx.response.body='hello world'
  next()
}
const middleWares=compose([logger,main])

app.use(middleWares)

app.listen(3000,()=>{
  console.log('Server in runing at 3000')
})