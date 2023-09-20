const http = require('http')
const fs = require('fs')
const filename = 'profile.json'
async function createProfile(req,res){
    if(fs.existsSync(filename)){
        res.writeHead(409, {'content-type':'application/json'})
        res.end('{"message" : "data sudah ada"}')
        return
    }

    let payload = await new Promise(resolve =>{
        let chunk = []
        req.on('data',data=>{
            chunk.push(data.toString())
        })
        req.on('end', () =>{
            if(chunk.length === 0){
                resolve('{"message" : "data kosong" }')
            }else{
                resolve(chunk.join(""))
            }
        })
    })

    fs.writeFileSync(filename,payload)
    res.writeHead(200, {'content-type':'application/json'})
    res.end('{"Message" : "Sukses"}')
}

function readProfile(req,res){
    if(!fs.existsSync(filename)){
        res.writeHead(404, {"content-type":"application/json"})
        res.end('{"message":"data tidak ditemukan"}')
        return
    }

    let profile = fs.readFileSync(filename, 'utf-8')
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(profile)
    return
}

async function updateProfile(req,res){
    if(!fs.existsSync(filename)){
        res.writeHead(404,{"content-type" : "application/json"})
        res.end('{"message" : "data tidak ditemukan" }')
        return
    }

    let payload =await new Promise(resolve =>{
        let chunk = []
        req.on('data', data=>{
            chunk.push(data.toString())
        })
        req.on('end', () =>{
            if(chunk.length === 0){
                resolve('{"message" : "data kosong"}')
            }else{
                resolve(chunk.join(""))
            }
        })
    })

    let profile =fs.readFileSync(filename, 'utf-8')
    let jsonPayLoad = JSON.parse(payload)
    let jsonProfile = JSON.parse(profile)
    jsonProfile = Object.assign(jsonProfile, jsonPayLoad)

    let updateProfile = JSON.stringify(jsonProfile)
    fs.writeFileSync(filename,updateProfile)
    res.writeHead(200,{"content-type" : "application/json"})
    res.end('{"message" : "data berhasil diperbarui" }')

}

function deleteProfile(req,res){
    if(!fs.existsSync(filename)){
        res.writeHead(404,{"content-type" : "application/json"})
        res.end('{"message" : "data tidak ditemukan" }')
        return
    }

    fs.unlink(filename, () => console.log('data fisik berhasil dihapus'))
    res.writeHead(200, {"content-type": "application/json"})
    res.end('{"message":"data berhasil dihapus"}')
    
}

const server = http.createServer((req,res)=>{
    console.log(req.method , req.url)
    if(req.url !== '/profile'){
        res.writeHead(404, {"content-type":"application/json"})
        res.end('{"message": "endpoint tidak ditemukan"}')
        return
    }
    switch(req.method){
        case "POST" :
            createProfile(req,res)
            break
        case "GET" :
            readProfile(req,res)
            break
        case "PUT" :
            updateProfile(req,res)
            break
        case "DELETE" :
            deleteProfile(req,res)
            break
        default :
            res.writeHead(404,{"Content-Type" : "application/json"})
            res.end('{"Message" : "Method tidak ditemukan" }')
            break
    }
})


server.listen(9090)



