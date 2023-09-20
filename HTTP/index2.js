const {createServer} = require('http')
const server = createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Hello<h1/>')
    res.end()
})

server.listen(8000)