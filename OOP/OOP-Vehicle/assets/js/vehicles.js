const Dealer = Base =>
  class extends Base {
    static buy() {
      // Metode buy ini mengembalikan sebuah objek baru yang merupakan instance dari class yang sedang dibuat oleh fungsi ini (Base). Dengan kata lain, metode ini membuat instance dari class yang sedang dibuat.
      return new this;
    }
  };

//contoh penggunaan buy()
// class Vehicle {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
//   }

//   const CarDealer = Dealer(Vehicle);

//   const car1 = CarDealer.buy();
//   const car2 = CarDealer.buy();

//   console.log(car1 instanceof Vehicle); // true
//   console.log(car2 instanceof Vehicle); // true
// ===========================================

const NoMoveBackward = Base =>
  class extends Base {
    moveBackward() {
      super.stop();
      showMessage("Tidak bisa Mundur");
    }
  };

const Speedometer = Base =>
  class extends Base {
    mileage = 0;
    info() {
      return `
        ~ Vehicle Detail ~
        Name: ${this.name}
        Max Speed: ${this.speed} kmph
        Milage: ${this.mileage} km
        -----------------
        `;
    }
    moveBackward() {
      super.moveBackward();
      this.mileage += this.speed;
      setDetailText(this.info());
    }
    moveForward() {
      super.moveForward();
      this.mileage += this.speed;
      setDetailText(this.info());
    }
  };

class Car extends Speedometer(Vehicle) {
  constructor(props) {
    super(props);
    if (this.constructor == Vehicle) {
      throw new Error("Cannot create new instance from an abstract class");
    }
  }
}

class Sedan extends Dealer(Car) {
  constructor() {
    super({
      body: "./assets/img/oop-car-sedan.png",
      name: "Mobil Sedan",
      speed: 10,
    });
  }
}

class Van extends Dealer(Car) {
  constructor() {
    super({
      body: "./assets/img/oop-car-van.png",
      name: "Mobil Van",
      speed: 20,
    });
  }
}

class Bus extends Dealer(Car) {
  constructor() {
    super({
      body: "./assets/img/oop-car-bus.png",
      name: "Bus",
      speed: 30,
    });
  }
}

class Truk extends Dealer(Car) {
  constructor() {
    super({
      body: "./assets/img/truck.png",
      name: "Truk",
      speed: 50,
    });
  }
}

class MotorCycle extends Speedometer(Vehicle) {
  constructor(props) {
    super(props);
    if (this.constructor === Vehicle) {
      throw new Error("Cannot create new instance from an abstract class");
    }
  }
}

class MotorChopper extends Dealer(NoMoveBackward(MotorCycle)) {
  constructor() {
    super({
      body: "./assets/img/oop-motorcycle-chopper.png",
      name: "Motor Chopper",
      speed: 100,
    });
  }
}

class MotorCross extends Dealer(NoMoveBackward(MotorCycle)) {
  constructor() {
    super({
      body: "./assets/img/oop-motorcycle-cross.png",
      name: "Motor Cross",
      speed: 100,
    });
  }
}

class MotorSport extends Dealer(NoMoveBackward(MotorCycle)) {
  constructor() {
    super({
      body: "./assets/img/oop-motorcycle-sport.png",
      name: "Motor Sport",
      speed: 100,
    });
  }
}

class Bicycle extends Dealer(NoMoveBackward(MotorCycle)) {
  constructor() {
    super({
      body: "./assets/img/oop-bicycle.png",
      name: "Sepeda",
      speed: 10,
    });
  }

  build(){
    super.build()
    super.startEngine()
  }
}


const vehicles = [Sedan, Van, Bus, MotorChopper, MotorCross, MotorSport, Truk, Bicycle]
for(const array of vehicles){
    Vehicle.add(array.buy())
}