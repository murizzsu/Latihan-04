class Profesi {
    nama = 'rizky'
    umur = 19
    constructor(nama, umur){
        this.name = nama
        this.umur = umur
    }
    perkenalan(){
        return `Halo saya ${this.nama} ${this.umur} tahun`
    }
}

class Programmer extends Profesi{
    constructor(nama, umur, pekerjaan){
        super(nama,umur)
        this.pekerjaan = pekerjaan
    }
    perkenalan(){
        console.log(`${super.perkenalan()} pekerjaan saya ${this.pekerjaan}`)
    }
}

Programmer.prototype.test = function(){
    console.log('test')
}

let profesi = new Programmer('suherlan', 20,'pelukis')
profesi.test()
// prototype adalah properti khusus yang ada di dalam setiap objek fungsi dalam JavaScript, termasuk fungsi konstruktor seperti Programmer dalam contoh Anda. prototype digunakan untuk menambahkan properti dan metode ke dalam objek yang dibuat dari fungsi konstruktor tersebut.
// Dalam contoh Anda, Anda menggunakan prototype untuk menambahkan metode test ke dalam objek Programmer. Artinya, setiap objek yang dibuat dengan menggunakan new Programmer(...) akan memiliki akses ke metode test, dan Anda dapat memanggil metode ini pada objek seperti yang ditunjukkan dalam kode Anda (profesi.test()).
// Jadi, prototype memungkinkan Anda untuk membagikan metode atau properti yang sama di antara semua objek yang dibuat dari fungsi konstruktor tertentu, yang menghemat memori karena metode tersebut hanya ada satu salinan untuk semua objek.