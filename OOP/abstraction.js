// Abstraction
// First of all, apa yang kamu bayangin pas dengar kata “orang”?
// Mungkin dari sebagian jawaban, orang itu bisa dibayangkan sebagai polisi, 
// hakim, tentara, dosen, atau bahkan yang jawaban lainnya. 
// Itulah yang bisa kita sebut sebagai abstraksi. 
// Kata “orang” sendiri masih bersifat abstrak, tapi kita bisa bayangin konsep “orang” itu gimana. Kata 
// “polisi, hakim, tentara, dan dosen” lebih konkrit atau nyata kalau dibandingin sama “orang” yang masih 
// abstrak banget.

// Kita sengaja bikin kondisi buat abstract di class Human, 
// biar ngasih pesan error kalo kita nggak sengaja 
// menginstansiasi class Human.

class Human{
    constructor(props){
        if(this.constructor === Human){
            throw new Error("Cannot instantiate for Abstract Class")
        }
        let {name, address} = props
        this.name = name
        this.address = address
        this.profession = this.constructor.name // every human has profession, and let the child class to define it

    }
    work(){
        console.log("Working...")
    }
    introduce(){
        console.log(`Hello, my name is ${name}`)

    }
}

class Police extends Human {
    constructor(props){
        super(props)
        this.rank = props.rank
    }
    work(){
        console.log("Go to the police station")
        super.work()
    }
}

const Wiranto = new Police({
    name: "Wiranto",
    address: "unkown",
    rank: "General"
})

console.log(Wiranto.profession)

try{
    let Abstract = new Human({
        name: "Abstract",
        address: "Unkown"
    })
}catch(err){
    console.log(err.message) // cannot instantiate from abrtact class
}