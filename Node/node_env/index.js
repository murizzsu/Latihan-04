// const {createServer} = require('http')
const {PORT = 9000} = process.env
// const server = createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1> Hello World </h1>')
//     return res.end()
// })
// server.listen(PORT)
// console.log(PORT)

//Json File
const {createServer} = require('http')
const server = createServer((req,res) =>{
    res.writeHead(200, {'content-type':'application/json'})
    res.write(JSON.stringify({a:1, b:2}))
    return res.end()
})
server.listen(PORT)