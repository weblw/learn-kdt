const buf1=Buffer.alloc(10)
// console.log(buf1)

const buf2=Buffer.from('a')
// console.log(buf2,buf2.toString())

const buf3=Buffer.from('Buffer创建方法')
// console.log(buf3)

buf1.write('hello')
// console.log(buf1)
// console.log(buf3.toString())

const buf4=Buffer.concat([buf1,buf3])
console.log(buf4.toString())