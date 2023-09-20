class Vehicle{
    #component = document.getElementById("vehicle")
    #stopped = true
    #moveTo = ''
    speed = 10

    static #vehicleList = []
    constructor(props){
        if(this.constructor === Vehicle){
            throw new Error("Cannot create new isntance from an abstract class")
        }
        let {name, speed, body} = props
        this.name =name
        this.body = body
        if(typeof speed === "number"){
            this.speed = speed
        }
    }

    // 1px = 1km
    getPosition(){
        return parseFloat(this.#component.style.left.replace(/px|%/g, "")) // mengganti semua kemunculan teks "px" atau "%" dalam nilai CSS dengan string kosong ("").
    }

    // stop vehicle
    stop(){
        this.#stopped = true
        this.#moveTo = ""
    }

    // move forward
    moveForward(){
        if(this.#moveTo === "backward"){
            this.stop()
            return
        }
        this.#stopped = false
        this.#moveTo = 'forward'
        let position = this.getPosition() + this.speed
        let maxForward = window.innerWidth - this.#component.offsetWidth
        // window.innerWidth: Ini adalah properti dari objek window yang mengembalikan lebar (width) dari jendela (window) peramban (browser) saat ini dalam piksel (pixel).
        // Properti offsetWidth mengembalikan lebar (width) elemen tersebut dalam piksel.
        if(position >= maxForward){
            position = maxForward
            this.stop()
        }
        this.#component.style.left = position + "px"
        setTimeout(()=>{// setTimeout(() => { ... }, 100): Ini adalah pemanggilan fungsi setTimeout dengan dua argumen. Argumen pertama adalah sebuah fungsi yang akan dijalankan setelah waktu tertentu, dan argumen kedua adalah waktu jeda dalam milidetik (dalam contoh ini, 100 milidetik atau 0,1 detik).
            if(!this.#stopped) this.moveForward()
        }, 100) // Jika this.#stopped adalah false, maka this.moveForward() akan dipanggil.
    }
    moveBackward(){
        if(this.#moveTo === "forward"){
            this.stop()
            return // digunakan untuk segera menghentikan eksekusi metode dan keluar dari metode tanpa menjalankan kode apa pun yang mungkin ada di bawahnya.
        }
        this.#stopped = false
        this.#moveTo = "backward"
        let position = this.getPosition() - this.speed
        if(position < 1){
            position = 0
            this.stop()
        }
        this.#component.style.left = position + "px"
        setTimeout(()=>{
            if(!this.#stopped) this.moveBackward() // if (!this.#stopped) adalah pernyataan kondisional yang mengecek apakah objek tersebut sedang tidak dalam kondisi berhenti (this.#stopped adalah false). Jika objek tidak sedang berhenti, maka perintah this.moveBackward() akan dijalankan.
        },100)
    }

    #onEngineStarted = (e) =>{
        console.log(this.name)
        switch(e.keyCode){
            case 39:
                this.moveForward()
                break
            case 37:
                this.moveBackward()
                break
            case 32:
                this.stop()
                break
        }
    }

    startEngine(){
        $(document).off("keydown") // $(document).off("keydown"): Ini adalah cara untuk menghapus semua penanganan peristiwa keydown yang mungkin telah terpasang sebelumnya di elemen dokumen (document). Ini dilakukan untuk memastikan bahwa tidak ada penanganan peristiwa keydown yang konflik atau bertumpukan dengan yang sebelumnya. Dengan kata lain, ini membersihkan semua penanganan peristiwa keydown yang mungkin telah ada sebelumnya.
        showMessage("Engine Started...")
        $(document).on("keydown", this.#onEngineStarted) // ketika pengguna menekan tombol keyboard setelah "mesin" diaktifkan, metode this.#onEngineStarted akan dipanggil untuk menangani input tersebut.
    }

    stopEngine(){
        showMessage("Engine Stopped...")
        $(document).off("keydown") // Ini adalah cara untuk menghapus semua penanganan peristiwa keydown yang mungkin telah terpasang pada elemen dokumen (document). Dengan melakukan ini, Anda memastikan bahwa tidak ada lagi penanganan peristiwa keydown yang akan dijalankan setelah mesin dimatikan. 
    }

    info(){
        return `
        ~ Vehicle Detail ~
        Name : ${this.name}
        Max Speed: ${this.speed} kmph
        -------------------
        ${this.constructor}
        `
    }

    //build engine
    build(){
        this.#component.style.backgroundImage = `url(${this.body})`
        this.#component.style.left = 0
        this.#component.style.display = "block"
        setBannerText(this.name)
        setDetailText(this.info())
        this.stopEngine()
        this.stop()
    }

    static add(vehicle){
        if(vehicle instanceof Vehicle){
            Vehicle.#vehicleList.push(vehicle)
        }else{
            throw new Error(`Vehicle.add() only allow Vehicle as param`)
        }
    }

    static list(){
        return Vehicle.#vehicleList
    }
}
