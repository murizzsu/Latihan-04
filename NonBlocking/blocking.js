const fs = require('fs')
console.log('start')
const dataFromFile = fs.readFileSync('data.txt')
console.log(dataFromFile.toString())
console.log('end')
/*
jika proses readFileSync belum selesai maka console.log('end')tidak akan 
dijalankan sampai proses readfilesync selesai.
*/