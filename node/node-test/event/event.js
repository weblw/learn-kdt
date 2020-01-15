let event={}
event.list=[]
event.listener=function(key,fn){
	this.list[key]=(this.list[key]||[])
	this.list[key].push(fn)
	// if(!this.list[key]){
	// 	this.list[key]=[]
	// }
	// this.list[key].push(fn)
}
event.trigger=function(){
	let key=[].shift.call(arguments)
	let fns=this.list[key]
	if(!fns || fns.length===0) {
		return false
	}
	fns.forEach(fn=>{
		fn.apply(this,arguments)
	})
}
event.remove=function(key,fn){
	let fns=this.list[key]
	if(!fns) return false
	if(!fn){
		fns && (fns.length=0)
	}else{
		fns.forEach((item,i)=>{
			if(item===fn){
				fns.splice(i,1)
			}
		})
	}
}

event.listener('big',function(size){
	console.log('小红要买'+size+'平米的房子')
})
event.listener('small',function(size){
	console.log('小绿要买'+size+'平米的房子')
})

event.remove('big')

event.trigger('big',100)
event.trigger('small',50)