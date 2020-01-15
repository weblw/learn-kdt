const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
	// console.log('there is request')
	// res.end('response from server')
	const {url,method}=req
	if(url==='/' && method==='GET'){
		fs.readFile('index.html',(err,data)=>{
			if(err){
				res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
				res.end('500,，服务器错误')
				return
			}
			res.statusCode=200
			res.setHeader('Content-Type','text/html')
			res.end(data)
		})
	}else if(url==='/user' && method==='GET'){
		res.writeHead(200,{'Content-Type':'application/json'})
		res.end(JSON.stringify([{name:'tom',age:20}]))
	}else{
		res.statusCode=404
		res.setHeader('Content-Type','text/plain;charset=utf-8')
		res.end('404，页面没有找到')
	}
})

server.listen(5000)

function getPrototypeChain(obj){
	var protoChain=[]
	// 返回给定对象的原型，如果没有继承属性则返回null
	while(obj=Object.getPrototypeOf(obj)){
		protoChain.push(obj)		
	}
	protoChain.push(null)
	return protoChain
}