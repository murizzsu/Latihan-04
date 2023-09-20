function demo(param){
    console.log(typeof(param))
    if(typeof(param) != 'function'){
        console.log('param not a function')
        return
    }

    param()
}

let callback = function(x){
    console.log(`fungsi callback berhasil dipanggil, dengan isi parameter ${x}`)
}

demo(callback)

// contoh penggunaan callback pada jquery
// $('button').click(function() {
//     console.log('button click')
// })
