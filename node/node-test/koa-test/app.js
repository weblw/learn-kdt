const Koa=require('koa')
const Router =require('koa-router')

const app=new Koa()
const router=new Router()

app.use(async (ctx,next)=>{
	console.log('first')
	await next()
	console.log('first callback')
})
app.use(async (ctx,next)=>{
	console.log('second')
	await next()
	console.log('second callback')
})

router.get('/test1',(ctx,next)=>{
	console.log('test1')
	ctx.body='hello'
})
router.get('/error',(ctx,next)=>{
	console.log('error')
	throw new Error('error...')
})

app.use(router.routes())

app.listen(3000)
console.log('runing at 3000....')