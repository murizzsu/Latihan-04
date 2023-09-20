class Human {
    constructor(props){
        let {name, address} = props
        this.name = name
        this.address = address
    }
    introduce(){
        if(this.constructor === Human){ //dengan abstract, akan menjadikan kelas parent sebagai blueprint, dan tidak dapat dieksekusi terkecuali menggunakan kelas turunannya. 
            throw new Error('cannot instantiate class from abstract class')
        }
    }
}

class Police extends Human {
    constructor(props){
        super(props)
    }
}

let person = new Human({name: "rizky", address: "jakarta"})
let person1 = new Police({name: "rizky", address: "jakarta"})
// person.introduce() error
console.log(person)
person1.introduce()