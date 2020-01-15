const fs=require('fs')
const path=require('path')
const {promisify} =require('util');
// const fsp=require('fs').promises

// const data=fs.readFileSync('./run.js') //代码会在这里阻塞 
// console.log(data)

// fs.readFile('./run.js',(err,data)=>{
// 	if(err) throw err 
// 	console.log(data)
// })
// console.log('其他操作')

// fs.readFile(path.resolve(__dirname,'./run.js'),(err,data)=>{
// 	if(err) throw err 
// 	console.log(data)
// })

// const readFile=promisify(fs.readFile)
// readFile('./run.js').then(data=>{console.log(data)})

// fsp
// 	.readFile('./run.js')
// 	.then(data=>{console.log(data)})
// 	.catch(err=>{console.log(err)})

(async ()=>{
	const fs=require('fs')
	const {promisify}=require('util')
	const readFile=promisify(fs.readFile)
	const data=await readFile('./run.js')
	console.log('data',data)
	Buffer.from(data).toString('utf-8')
})()