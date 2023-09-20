class Human{
    constructor(name, address){
        this.name = name
        this.address = address
    }
    introduce(){
        console.log(`Hi, my name is ${this.name}`)
    }

    work(){
        console.log("Work!")
    }
}

class Programmer extends Human {
    constructor(name, address, programmingLanguage){
        super(name, address) // call the parent class contructor in this case Human.constructor
        this.programmingLanguage = programmingLanguage
    }
    introduce(withDetail){
        super.introduce() // overidding
        Array.isArray(withDetail) ? console.log(`I can write ${this.programmingLanguage}`) : console.log("wrong input")
    }
    code(){
        console.log(`Code some, ${this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]}`)
    }
}

let Obama = new Human("Barrack Obama", "Washington Dc")
Obama.introduce()

let isyana = new Programmer("Isyana", "Jakarta", ["Javascript", "Kotlin"])
isyana.introduce()
isyana.code()
isyana.work()

try{
    Obama.code() // Error : undefined method "code"
}catch(err){
    console.log(err.message)
}

console.log(isyana instanceof Human)
console.log(isyana instanceof Programmer)
isyana.introduce(["Javascript"])
