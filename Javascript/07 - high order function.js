// High order function adalah suatu function yang memiliki param/arugumen berupa function
// atau return nya merupakan function

// high order function karena argumen berupa function
// setInterval((function () {
//     console.log(`halo, ini adalah ccontoh template literal embedded string yaitu ${1 + 2}`);
// }), 500);

// high order function karena argumen, contohnya juga ada pada closure
const a = function () {
    let b = 10;
    return function () {
        return b * 2;
    }
}
let aTes = a();
console.log(aTes());


let c = [2, 8, -4, 9, 2, 1, 5, 3, 8, -9];
// High order function, contohnya array.filter, penggunaan array.filter((elemen) => logika) bisa juga function biasa
// digunakan untuk mengambil nilai array yang sesuai berdasarkan logika yang diterapkan
// const d = c.filter(function (e) {
//     return e > 2;
// })
// dapat diubah ke bentuk arrow function :
const d = c.filter(e => e > 2);
console.log(d);

// High order function, array.map, pengunaan array.map((elemen)=>logika)
// digunakan untuk melakukan kondisi yang diterapkan pada setiap elemen sesuai logika
const e = c.map(e => e * 2);
console.log(e);

// High order function, array.reduce, 
// penggunaan array.reduce((prevElemen/accumulator, currentElemen) => logika) 
// default ada array.reduce((prevElemen/accumulator, currentElemen) => logika, 0); nilai prevElemen pertama 0 bisa diganti
// digunakan untuk melakukan aksi yang berhubungan dengan pengecekan nilai array yang sekarang dengan sebelumnya
const f = c.reduce((prev, cur) => prev + cur); // dijabarkan begini, 2 + 8, prev jadi 10 dan cur jadi -4, hingga output 25
console.log(f);

// Contoh high order function + arrow function + method chaining(berantai)
let myArray = [2, 8, -4, 9, 2, 1, 5, 3, 8, -9];
const g = myArray.filter(e => e > 2).map(e => e + 1).reduce((acc, prev) => acc + prev);
console.log(g);