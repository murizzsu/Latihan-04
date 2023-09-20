// overload (manipulasi parameter pada fungsi param)
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  info() {
    console.log(`brand: ${this.brand}, year: ${this.year}`);
  }
}

class HondaJazz extends Car {
  constructor() {
    super("Honda", 2005);
  }
}

let hj = new HondaJazz();
hj.info();

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`hello my name is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, address, programmingLanguages) {
    super(name, address);
    this.programmingLanguages = programmingLanguages;
  }
  introduce(withDetail) {
    //overloading
    super.introduce();
    if (withDetail) {
      console.log(`i can write ${this.programmingLanguages}`);
    } else {
      console.log(`i can write many programming languages`);
    }
  }
}

let programmer = new Programmer("Sabrina", "Jakarta", ["Javascript", "PHP"])
programmer.introduce(true)

class Calculator{
    add(x,y = 0){
        return x + y
    }
}

const calc = new Calculator()
console.log(calc.add(5)) //5
console.log(calc.add(5,3)) // 8)


//overide manipulasi fungsi pada extends
class Animal{
    speak(){
        console.log("animal makes a sound")
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks")
    }
}

const myDog = new Dog()
myDog.speak() // Dog barks