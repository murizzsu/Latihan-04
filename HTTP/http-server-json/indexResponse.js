const http = require("http")
const {PORT = 8000} = process.env

function toJSON(value){
    return JSON.stringify(value) // mengubah object js ke string json
}

function onRequest(req,res){
    const responseJSON = toJSON({
        id: "0aa3e62a-9a27-45a2-9e7a-0d4f1d7f02dd",
        username: "sabrina",
        email: "sabrina@binar.co.id",
        encrypted_password: "ldfgkj78%^&appdKO039*" 
    })

    res.setHeader("content-type","application/json")
    res.writeHead(200)
    res.end(responseJSON, () =>{
        console.log(responseJSON)
    })
}
const server = http.createServer(onRequest)
server.listen(PORT, ()=>{
    console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT)
})