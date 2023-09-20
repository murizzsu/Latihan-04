// Polymorphism
// satu classs bisa punya banyak wujud sub classnya (punya banyak kelas yang terkait satu sama lain lewat inheritance)
class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.profession = this.constructor.name
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}, profession is ${this.profession}`);
    }
    work() {
        console.log(`${this.constructor.name}: Working!`);
    }
}

const PublicServer = Base => class extends Base {
    save() {
        console.log("SFX: Thank You~");
    }
}

const Military = Base => class extends Base {
    shoot() {
        console.log("Door");
    }
}

class Doctor extends PublicServer(Human) {
    constructor(props) {
        super(props.name, props.address); // Pass name and address to Human constructor
    }
    work() {
        super.work(); // from human class
        super.save(); // from public server class
    }
}

class Police extends PublicServer(Military(Human)) {
    constructor(props) {
        super(props.name, props.address); // Pass name and address to Human constructor
        this.rank = props.rank;
        this.workplace = "Police Station";
    }
    work() {
        super.work();
        super.shoot(); // military class
        super.save(); // public server class
    }
}

class Army extends PublicServer(Military(Human)) {
    constructor(props) {
        super(props.name, props.address); // Pass name and address to Human constructor
        this.rank = props.rank;
        this.workplace = "Army Base";
    }
    work() {
        super.work();
        super.shoot();
        super.save();
    }
}

class Writer extends Human {
    constructor(props){
        super(props.name)
    }
    work() {
        console.log("Write Books");
        super.work();
    }
}

// instantiate Military
const Wiranto = new Police({
    name: "Wiranto",
    address: "Unknown",
    rank: "Heneral"
})

const Prabowo = new Army({
    name: "Prabowo",
    address: "Unknown",
    rank: "General"
})

// Intantiate Doctor
const Boyke = new Doctor({
    name: "Boyke",
    address: "Jakarta"
})

// writer
const Dee = new Writer({
    name: "Dee",
    address: "Bandung"
})

// test
Wiranto.introduce();
Wiranto.work();
Wiranto.shoot();
Wiranto.save();

Prabowo.introduce();
Prabowo.work();
Prabowo.shoot();
Prabowo.save();

Boyke.introduce();
Boyke.work();
Boyke.save();

Dee.introduce();
Dee.work();
