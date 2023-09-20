// polymorphism dapat melakukan 2 extends sekaligus

class Human{
    constructor(name, address){
        this.name = name
        this.address = address
    }

    introduce(){
        console.log(`hi my name is ${this.name}`)
    }

    work(){
        console.log('working...')
    }
}

const PublibServer = Base => class extends Base{
    save(){
        console.log(`saving`)
    }
}

const Military = Base => class extends Base{
    shoot(){
        console.log(`Door!`)
    }
}

const Parent = Base => class extends Base{
    haveChild(){
        console.log(`i have childs`)
    }
}

class Doctor extends PublibServer(Human){

}

class Police extends Parent(Military(PublibServer(Human))){

}

class Army extends Parent(Military(PublibServer(Human))){

}

class Writer extends Human{

}

let doctor = new Doctor("SIA", "Jakarta")
let police = new Police("SIB", "Jakarta")
let army = new Army("Sic", "Jakarta")
let writer = new Writer("Sid", 'Jakarta')

console.log(doctor instanceof Human)
console.log(police instanceof Human)
console.log(army instanceof Human)
console.log(writer instanceof Human)
// writer.shoot() //eror
police.shoot()