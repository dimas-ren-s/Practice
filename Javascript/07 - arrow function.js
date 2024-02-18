// arrow function adlah function expression yang lebih ringkas
// function expression : diawali dengan deklarasi variable const/let lalu expressionnya berupa function
const a = function (nama) {
    return `halo ${nama}, selamat datang`;
}

console.log(a("dimas"));

// diubah menjadi arrow function, return sudah secara implisit(tidak langsung), dan kalau 1 baris tidak perlu { }
// Penggunaan const/let namaVariable = (nama) *kalau cuman satu bisa nama langsung* atau *nama* lalu => dan { logika}.
const b = nama => `halo, ${nama}, selamat datang`;
console.log(b("dimas"));

// dua param/argumen,perlu ( )
const c = (nama, jam) => `halo, ${nama}, selamat ${jam}`;
console.log(c("jamal", "siang"));

// Tanpa param/argumen wajib menggunakan ( )
const d = () => `halo, Selamat Datang`;
console.log(d());

// contoh lain
let Mahasiswa = ["dimas", "rendy", "sugara"];
const hitungNama = Mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(hitungNama);

// arrow function
const e = (mahasiswa) => mahasiswa.map(item => item.length);

// cara lain dari UNPAS
const f = Mahasiswa.map(nama => nama.length);
console.log(e(Mahasiswa));
console.log(f);

// Contoh jika ingin hasil yang dikembalikan berupa object, harus membungkus ({ hasil : hasil })
const g = Mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
const h = Mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length })); // nama = nama, ga usah buat nama: nama
console.log(g); // didalam array ada object
console.log(h); // sama aja kayak g


// ***konsep this tidak ada pada arrow function, termasuk yang dibuat dengan function constructor
// tidak bisa menerapkan arrow function pada function constructor
// hanya bisa menerapkan pada function expression yang ada didalam constructor

// Error Undifined output
// const createObj = () => {
//     this.nama = "dimas";
//     this.umur = 23;
//     sayHello = () => console.log(`Halo, saya ${this.nama}, umur saya ${this.umur}`);
// }

const createObj = function () {
    this.nama = "dimas";
    this.umur = 23;
    this.sayHello = () => `Halo, saya ${this.nama}, umur saya ${this.umur}`; // pakai this
}

let contohCreateObj = new createObj();
console.log(contohCreateObj);
console.log(contohCreateObj.sayHello());


// Karena this tidak diterapkan dalam arrow function, kita bisa menggunakannya pada saat membutuhkan lexical scope
// yang diakibatkan oleh hoisting saat function declaration dijalankan
// function constructor
const profileSaya = function () {
    this.nama = "dimas";
    this.umur = 23;
    this.sayHello = () => `Halo, saya ${this.nama}, umur saya ${this.umur}`;

    // setInterval digunakan untuk menjalankan function didalamnya sesuai waktu yang ditetapkan,
    // Penggunaa setInterval((function(){ }), waktu);

    //function declaration
    // setInterval((function () {
    //     console.log(this.umur++); // menghasilkan NaN karena hoisting dan this berupa window
    // }), 500);

    // arrow function, mengambil this pada lexical scope atau parent nya dan tidak menjalankan hoisting
    // setInterval((() => console.log(this.umur++)), 500); //sesuai, tidak hoisting karena tidak ada konsep this pada arrow func
}

let contohProfileSaya = new profileSaya();
console.log(contohProfileSaya);

// Penggunaan setInterval atau setTimeout akan dinaikkan pada saat hoisting, makanya this menjadi window bukan parent
// Oleh karena itu perlu penggunaan arrow function agar hoisting tidak dilakukan sehingga this dapat berisi parent function
// Video UNPAS menit 20, menjelaskan prinsip ini sekaligus transisi dengan penggunaan [a, b] = [b, a]