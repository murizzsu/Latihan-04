const fs = require("fs")
function createPerson(person){
    fs.writeFileSync('person.json', JSON.stringify(person))
    return person
}


const rizky = createPerson({
    name : "rizky",
    age : 21
})