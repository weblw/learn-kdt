const Koa=require('koa')
const static=require('koa-static')
const Router=require('koa-router')

const app=new Koa()
const router=new Router()

app.use(static(__dirname+'/public'))

app.use((ctx,next)=>{
	ctx.body=[
		{
			name:'tom'
		}
	]
	next()
})

app.use((ctx,next)=>{
	ctx.body && ctx.body.push({
		name:'jerry'
	})
	console.log('url'+ctx.url)
	if(ctx.url==='/html'){
		ctx.type='text/html;charset=utf-8'
		ctx.body=`<b>我的名字是${ctx.body[1].name}</b>`
	}
	next()
})

// const router={}
// router['/router']=ctx=>{
// 	ctx.type='text/html;charset=uft-8'
// 	ctx.body=`<h1>router test</h1>`
// }

// app.use(ctx=>{
// 	if(ctx.url!=='/favicon.ico'){
// 		router[ctx.url](ctx)
// 	}	
// })

router.get('/string',async (ctx,next)=>{
	ctx.body='Koa2 string'
})
router.get('/json',async (ctx,next)=>{
	ctx.body={
		title:'Koa2 json'
	}
})

app.use(router.routes())

app.use(async (ctx,next)=>{
	const start=new Date().getTime()
	console.log('strat:${ctx.url}')
	await next()
	const end=new Date().getTime()
	console.log(`请求${ctx.url}，耗时${parseInt(end-start)}`)
})

app.listen(3000)