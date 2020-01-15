const express=require('express')

const app=express()
const router=express.Router()

app.use(async (req,res,next)=>{
	console.log('I am the first middleware')
	next()
	console.log('first middleware end calling')
})
app.use(async (req,res,next)=>{
	console.log('I am the second middleware')
	next()
	console.log('second middleware end calling')
})

router.get('/api/test1',async (req,res,next)=>{
	console.log('I am the router middleware=>api/test1')
	res.status(200).send('hello')
	next()
})
router.get('/api/testerror',async (req,res,next)=>{
	console.log('I am the router middleware=>api/testerror')
	// throw new Error('I am error.')
	next()
})

app.use('/',router)

app.use(async (err,req,res,next)=>{
	if(err){
		console.log('last moddleware catch error',err)
		res,status(500).send('server error')
		return
	}
	console.log('i am last middleware')
	next()
	console.log('lase middleware end calling')
})

app.listen(3000)

console.log('server is listening at 3000')