function diskon(x) {
  let musimPandemik = (x * 30) / 100;
  return musimPandemik;
}
let sale = diskon(20000);
console.log(sale);

function sayHiTo(name) {
  let halo = `Hai ${name.toUpperCase()} !`;
  return halo;
}

let test = sayHiTo("everything");
console.log(test); // Hai EVERYTHING
// console.log(sayHiTo(100)) // TypeError name.touUpperCase is not a function

// anonymous function
const volTabung = function (r, t) {
  return 3.14 * r ** 2 * t;
};

console.log(volTabung(10, 4));

// arrow function
const volTabung1 = (r, t) => 3.14 * r ** 2 * t;
console.log(volTabung1(10, 4));

// High Order Function
const strArray = ["Jvascrit", "Java", "C"];
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
const lenArray = forEach(strArray, (item) => item.length);
console.log(lenArray);

// foreach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (item, index, array) {
  console.log(`ForEcah Index ${index}: ${item}`);
});

// class
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

//another example
class Human {
  // add static property
  static isLivingOnEarth = true;

  // add constructor method
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // add instance method signature
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

console.log(Human.isLivingOnEarth); // output static property: true

// add prototype/instanceof
Human.prototype.greet = function (name) {
  console.log(`Hi, ${name}`, `i'm ${this.name}`);
};

// add static method
Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};
// instantiation of human class, we create a new object
let mj = new Human("Michael Jackson", "Isekai");
console.log(mj);

// output : Human {name: "Michael Jackson", address:"isekai"}
//checking instance of class
console.log(mj instanceof Human); // true
mj.introduce();
mj.greet("Donal Trump");
Human.destroy("Amazon Forest");
