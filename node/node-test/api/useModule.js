const os=require('os')
const men=os.freemem()/os.totalmem()*100
console.log(`内存占用率${men.toFixed(2)}%`)