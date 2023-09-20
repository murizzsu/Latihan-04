class Mobil{
    bensin = 0
    berjalan = false;
    constructor(bensin){
        this.bensin = bensin
    }

    jalan(){
        if(this.bensin < 1){
            console.log("bensin habis")
            this.berhenti()
            return
        }
        console.log("mobil sedang berjalan")
        this.bensin--
        this.berjalan = true
        console.log(`bensin saat ini tersisa ${this.bensin}`)
        setTimeout(()=>{
            if(this.berjalan) this.jalan()
        }, 300)
    }
    berhenti(){
        this.berjalan = false
        console.log("mobil berhenti")
    }
}

let sedan = new Mobil(3)
sedan.jalan()
// sedan.berhenti()