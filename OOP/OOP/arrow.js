let myFunction = function(){ //anonymous function atau fungsi tanpa nama
    return 'hello world'
}

let myFunction1 = () =>{ //arrow function tanpa parameter
    return 'hello world'
}
//atau
let myFunction2 = () => 'hello'

let myFunction3 = name => `hello ${name}` //arrow function 1 parameter

//arrow 2 parameter atau lebih. Menggunakan {} artinya bisa menggunakan pengkodisian
let myFunction4 = (name,address)=>{
    if (address != ''){
        return `hello ${name} from ${address}`
    }
    return `hello ${name}`
}

let obj = {
    name : 'Sabrina',
    getName : function(){ //menambahkan anonymous function dalam objek, bisa menggunakan this
        return this.name
    }
}

let obj1 = {
    name : "Sabrina",
    getName : function(){
        return this.name
    },
    contoh:function(){
        setTimeout(()=>{
            setTimeout(()=>{
                console.log(this.getName())
            },1000)
        },1000)
    }
}
obj1.contoh()
console.log(myFunction4('rizky',''))