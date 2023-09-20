class Human {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    introduce() {
        console.log(`hello my name is ${this.name}`)
    }

    work() {
        console.log(`work`)
    }
}

class Teacher extends Human {

}

class Programmer extends Human {
    nama = ""
    constructor(name, address, programmingLanguages) {
        super(name, address)

        this.nama = name
        this.programmingLanguages = programmingLanguages
    }

    introduce() {
        super.introduce()

        console.log(`i can write ${this.programmingLanguages}`)
    }

    code() {
        let randomIndex = Math.floor(Math.random() * this.programmingLanguages.length)
        console.log(`code some`, this.programmingLanguages[randomIndex])
    }
}

class Developer extends Programmer {
    constructor(name, address, programmingLanguages) {
        super(name, address, programmingLanguages)
    }
}

let programmer = new Programmer("Sabrina", "Jakarta", ["JavaScript", "Java", "PHP"])
programmer.introduce()
console.log(programmer instanceof Human)
console.log(programmer instanceof Programmer)
programmer.code()