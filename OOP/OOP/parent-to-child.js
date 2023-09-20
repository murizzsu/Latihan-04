class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }

    work() {
        console.log(`Working...`);
    }

    callChildCode() {
        if (typeof this.childMethod === 'function') {
            this.childMethod();
        }
    }
}

class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        super(name, address);
        this.childMethod = this.code;
        this.programmingLanguage = programmingLanguage.replace(/\[|\]/g, "").split(", ");
    }

    code() {
        console.log(`I can write many programming languages such as ${this.programmingLanguage.join(", ")}`);
    }
}

let developer = new Programmer("Sabrina", "Jakarta", "[Js, Py]");
developer.callChildCode();
console.log(developer.programmingLanguage);
