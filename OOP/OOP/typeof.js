class Car{
    color = 'blue'
    capacity = 2
    constructor(color,capacity){
        if(typeof color != 'string'){
            throw new Error('color input harus dalam bentuk string')
        }
        if(typeof capacity != 'number'){
            throw new Error('capacity input harus dalam bentuk number/angka')

        }
        this.color = color
        this.capacity = capacity
    }
    sample(){
        console.log(this.color)
    }
}

let myCar = new Car('blue',2)
console.log(myCar)