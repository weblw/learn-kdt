const http=require('http')

const context=require('./context')
const request=require('./request')
const response=require('./response')

class Kkb {
	// 初始化中间函数
	constructor() {
		this.middlewares=[]
	}
	listen(...args){
		const server=http.createServer(async (req,res)=>{
			// 创建上下文
			let ctx=this.createContext(req,res)
			// 中间件合成
			const fn=this.compose(this.middlewares)
			// 执行合成函数并传入上下文
			await fn(ctx)
			// 响应
			res.end(ctx.body)
		})
		server.listen(...args)
	}
	// 构建上下文，把res和req都挂载到ctx之上，并且在ctx.req和ctx.request.req同时保存
	createContext(req,res){
		const ctx=Object.create(context)
		ctx.request=Object.create(request)
		ctx.response=Object.create(response)
		
		ctx.req=ctx.request.req=req
		ctx.res=ctx.response.res=res
		return ctx
	}	
	use(middleware){
		// 将中间件加到函数数组中
		this.middlewares.push(middleware)
	}
	// 合成函数
	compose(middlewares){
		return function(ctx){// 传入上下文
			return dispatch(0)
			function dispatch(i){
				let fn=middlewares[i]
				if(!fn){
					return Promise.resolve()
				}
				return Promise.resolve(
					fn(ctx,function next(){
						// 将上下文传入中间件，mid(ctx,next)
						return dispatch(i+1)
					})
				)
			}
		}
	}
}

module.exports=Kkb