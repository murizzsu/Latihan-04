class Car{
    #privateProperty = true
    constructor(brand, year){
        this.brand = brand
        this.year = year
    }
    callPrivate(){
        return this.#privateProperty
    }
}

class HondaJazz extends Car{
    constructor(){
        super('honda', 2005)
    }
    callPrivatePropertyParentClass(){
        console.log(this.callPrivate())
    }
}

let honda = new HondaJazz()
honda.callPrivatePropertyParentClass()
console.log(honda)