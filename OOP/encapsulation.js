class Human {
    constructor(name, address){
        this.name = name
        this.address = address
    }

    introduce(){ 
        console.log(`Hello, my name is ${this.name}`)
    }

    // this is public static method
    static isEating(food){ // bisa dipanggil di luar deklarasi kelas.
        let foods = ["plant", "animal"]
        return foods.includes(food.toLowerCase())
    }

    // private
    // Suatu method /property yang nggak bisa diakses di luar deklarasi class dan juga  nggak bisa berjalan di dalam class yang mewarisi class tersebut 
    #doGossip = () => console.log(`my address will become viral ${this.address}`) 

    talk(){
        this.#doGossip()
    }
    static #isHidingArea = true

    // protected 
    //Protected visibility ini bisa kita akses di dalam sub class
    _call(){
        console.log(`Call me as a ${this.name}`)
    }
}

class Programmer extends Human{
    constructor(name,addres, task, salary){
        super(name,addres)
        this.task = task
        this.salary = salary
    }
    doCall = () => super._call() // will run
}
let mj = new Human("Michael", "Isekai")
console.log(mj)

mj.introduce();
console.log(Human.isEating("Plant"))
// console.log(Human.introduce()) error
console.log(Human.isEating("Human"))

// private test
mj.talk()
try{
    // Human.#isHidingArea // return error
    // mj.#doGossip //error
}catch(err){
    console.log(err.message)
}

// protected test
let job = new Programmer("Developer", "$1000")
job.doCall()


// encapsulation ecrypt decrypt
class User {
    constructor(props){
        let {email, password} = props
        this.email = email
        this.encryptedPassword = this.#encrypt(password) 
    }
    #encrypt = (password) => {return `encrypted-version-of-${password}`}
    #decrypt = () => {return this.encryptedPassword.split(`encrypted-version-of-`)[1]}
    
    authenitcate(password){
        return this.#decrypt() === password // return true || false
    }
}

let Bot = new User({
    email : "bot@mail.com",
    password: "123456"
})

const isAuthenticated = Bot.authenitcate("123456")
console.log("Authenticated :",isAuthenticated)

