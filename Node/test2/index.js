const persegi = require('./persegi.js')
const fs = require("fs")
const person = require("./person.json")

const baca = fs.readFileSync('test.txt', 'utf-8')
console.log(baca)
console.log(persegi(4))
console.log(person)