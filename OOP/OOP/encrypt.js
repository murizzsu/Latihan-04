class User{
    constructor(props){
        let{email,password} = props
        this.email = email
        this.encryptedPassword = this.#encrypt(password)
    }
    #encrypt = password => btoa(password)
    #decrypt = () =>{
        return atob(this.encryptedPassword)
    }

    authenticate(password){
        return this.#decrypt() == password
    }
}

let bot = new User({email:'bot@email.com', password: "12345678"})
console.log(bot)
console.log(bot.authenticate('12345678'))


// class User{ //encrypt decrypt dengan menambahkan string
//     constructor(props){
//         let {email,password} = props
//         this.email = email
//         this.encryptedPassword = this.#encrypt(password)
//     }
//     #encrypt = password => `salt-${password}`
//     #decrypt = () => {
//         return this.encryptedPassword.split('salt-')[1]
//     }
//     authenticate(password){
//         return this.#decrypt() == password
//     }
// }

// let bot = new User({email:'bot@email.com', password:'1234567'})
// console.log(bot)
// console.log(bot.authenticate('1234567'))