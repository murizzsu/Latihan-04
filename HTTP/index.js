// aplikasi yang kita tulis untuk melayani request dan memberikan response yang sesuai
// request memiliki informasi wajib tercantum didalamnya, diantaranya
// Request URL (halaman mana yang ingin kita buka, biasanya berupa nama domain)
// Request Method (GET, PUT, POST, DELETE)
// Request Header (informasi tentang pengirim, seperti pesan ditulis dalam format apa?menggunakan bahasa pa? dikirim melalui apa? dll)
// Request Body (isi pesan yang dibaca oleh penerima pesan)
// Response, memiliki atribut yang sama seperti request namun memiliki atribut tambahan yaitu response status
// 200 (OK, request berhasil dan tidak ada perubahan dalam server)
// 201 (Created, penambahan data baru dalam server)
// 401 (Unauthorized, req ditolak karen hak akses tidak valid)
// 403 (Forbidden, req ditolak karena hak akses tidak mencukupi)
//500 (Internal server error, req gagal karena kesalahn server)

/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */

// const http = require("http")
// const fs = require("fs")

// function onRequest(req,res){
//     res.writeHead(200, {"content-type":"text/thml"})
//     res.end("Hello World")
// }

// const server = http.createServer(onRequest)
// server.listen(8000, ()=>{
//     console.log("Server sudah berjalan, silahkan buka http://localhost:%d", 8000)
// })


// const http = require("http")
// const fs = require("fs")
// const {PORT = 8000} = process.env
// const path = require('path')
// const PUBLIC_DIRECTORY = path.join(__dirname, 'public')

// function onRequest(req,res){
//     const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html')
//     const html = fs.readFileSync(htmlFile, 'utf-8')
//     res.setHeader('Content-Type',"text/html")
//     res.writeHeader(200)
//     res.end(html)
// }

// const server = http.createServer(onRequest)
// server.listen(PORT, ()=>{
//     console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT)
// })

// routing ()
const http = require("http")
const fs = require("fs")
const {PORT = 8000} = process.env
const path = require('path')
const PUBLIC_DIRECTORY = path.join(__dirname, 'public')

function getHTML(htmlFileName){
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName)
    return fs.readFileSync(htmlFilePath, 'utf-8')
}
function onRequest(req,res){
    switch(req.url){
        case "/":
            res.writeHead(200)
            res.end(getHTML("index.html"))
            return
        case "/about":
            res.writeHead(200)
            res.end(getHTML("about.html"))
            return
        default:
            res.writeHead(404)
            res.end(getHTML("404.html"))
            return
    }
}

const server = http.createServer(onRequest)
server.listen(PORT, ()=>{
    console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT)
})

// Di dalam proses request-response, ketika kita mengirim request dan response dalam format JSON, ada header bernama Content-Type yang nilainya adalah application/json
