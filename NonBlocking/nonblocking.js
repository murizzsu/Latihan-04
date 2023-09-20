const fs = require('fs')
console.log('start')

fs.readFile('data.txt', function(error, data){
    if (error) console.log(error)
    console.log(data.toString())
})

console.log('end')
/*
function readfile digunakna untuk membaca metode async.
dikarenakan proses readfile lama maka proses console.log(end) 
dijalankan terlebih dahulu. 
*/