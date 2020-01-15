function compose(middlewares){
	return function(){
		// 执行第0个
		return dispatch(0)
		function dispatch(i){
			let fn=middlewares[i]
			if(!fn){
				return Promise.resolve()
			}
			return Promise.resolve(
				fn(function next(){
					// Promise完成后，在执行下一个
					return dispatch(i+1)
				})
			)
		}
	}
}

async function fn1(next){
	console.log('fn1')
	await next()
	console.log('end fn1')
}

async function fn2(next){
	console.log('fn2')
	await next()
	console.log('end fn2')
}

function fn3(next){
	console.log('fn3')
}

function delay(next){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve()
			next()
		},1000)
	})
}

const middlewares=[fn1,fn2,delay,fn3]

const finalFn=compose(middlewares)

finalFn()