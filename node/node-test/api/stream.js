const fs=require('fs')
// const rs=fs.createReadStream('./index.js')
// const ws=fs.createWriteStream('./index-copy.js')

// rs.pipe(ws)

const rs2=fs.createReadStream('./index.js')
const ws2=fs.createWriteStream('./index-copy.js')
rs2.pipe(ws2)