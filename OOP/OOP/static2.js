//dengan menggunakan static, ketika nilai dirubah maka nilainya akan tetap walopun melakukan inisialisi baru
//apabila tidak menggunakna static maka nilainya akan kembali ke kondisi awal ketika di insialisasi

class Car{
    static jumlahRoda = 4
    speed = 2
    totalRoda(){
        return Car.jumlahRoda
    }

    static info = () => 'hello'
    info2(){
        return 'hello1'
    }
}

console.log(Car.jumlahRoda)
Car.jumlahRoda = 6 //diubah
let car = new Car()
let car2 = new Car()
car2.speed = 4
console.log('jumlah roda ',car.totalRoda(), car2.totalRoda()) // 6,6
console.log('speed :', car.speed, car2.speed)
//memanggil statik harus menggunakan nama kelas
console.log(Car.info())
console.log(car.info()) // error
console.log(car.jumlahRoda()) // error