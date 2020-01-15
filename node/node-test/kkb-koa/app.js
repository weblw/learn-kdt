// const http=require('http')
// const server=http.createServer((req,res)=>{
// 	res.writeHead(200)
// 	res.end('hi kaikeba')
// })

// server.listen(3000,()=>{
// 	console.log('3000')
// })

// const Kkb=require('./kkb')
// const app=new Kkb()

// const delay = () => Promise.resolve(resolve => setTimeout(() => resolve() ,1000000));

// app.use((req,res)=>{
// 	res.writeHead(200)
// 	res.end('hi kaikeba')
// })

// app.use(async (ctx,next)=>{
// 	ctx.body="1"
// 	console.log(1)
// 	await next()
// 	ctx.body+="5"
// 	console.log(11)
// })

// app.use(async (ctx,next)=>{
// 	ctx.body+="2"
// 	console.log(2)
// 	await delay().then(()=>{
// 		console.log(5)
// 	})
// 	await next()
// 	console.log(22)
// 	ctx.body+="4"	
// })

// app.use(async (ctx,next)=>{
// 	ctx.body+="3"
// 	console.log(3)
// })

// app.listen(3000,()=>{
// 	console.log('3000...')
// })

const Koa=require('koa')
const Router=require('koa-router')
const static=require('koa-static')
const fs=require('fs')

const app=new Koa()
const router=new Router()

app.use(static(__dirname+'/public'))

router.get('/index',async ctx=>{
	fs.readFile('./public/index.html',(err,data)=>{
		ctx.body='data'
	})	
})
router.get('/post',async ctx=>{
	ctx.body='post pase'
})
router.post('/index',async ctx=>{
	ctx.body='post page'
})

app.use(router.routes())
app.listen(3000,()=>{
	console.log('runing 3000')
})