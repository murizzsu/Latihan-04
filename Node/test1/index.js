    // script pada package.json digunakan untuk mempersingkat dan mendefiniskan perintah yang berhubungan dengan project
    console.log("Hello Node.js") //buka terminal, ketikan yarn start test

    // third party module (memberitahu package manager, module yang dipake dalam project)
    //menginstall dependencies (digunakan sampai tahap production, dan diinstall ke server)
    // npm install chalk --save
    // yarn add chalk --save
    // menginstall dev dependencies (digunakan saat development, tidak akan diinstal ke server)
    // npm install nodemon --save-dev
    // yarn add nodemon --save-dev

    // Saat menginstall 2 module tadi, selain update di package.json, secara otomatis akan di tambah juga directory bernama “node_modules”. Nah, di dalam folder ini lah third party module disimpan. 

    //bermain dengan module
    // cek memory dalam system untuk mengetahui berapa memory yang tersedia ketika menjalankan aplikasi ini

const os = require("os")
console.log('free memory', os.freemem())

// import module
const luasSegitiga = require("./luasSegitiga.js")
console.log("luas Segitiga",luasSegitiga(3,4))

// read and write file
//Read (membaca isi file), misal dari text.txt
const fs = require("fs") //import module fs
const isi = fs.readFileSync('./text.txt', 'utf-8') // path, text encoding
console.log("isi ", isi )
//write
fs.writeFileSync("./test.txt", "i love ...")


//selanjutnya membuat data dan menyimpannya dalam bentuk json
const sabrina = require("./person.json")
console.log(sabrina)