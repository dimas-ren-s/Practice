// Closure, sebuah nilai yang diambil dari local hingga nilai global (lexical scope) digunakan pada 2 function turunan
// seperti punya private variable
// Function Factory, sebuah function yang dijalankan dengan function lain didalamnya
// Harus disimpan ke dalam sebuah variable terlebih dahulu, contoh baris 12, dan 22 ada cara lain juga di baris 42

function createMahasiswa() {
    return function (nama) {
        return `halo ${nama}`
    }
}

let a = createMahasiswa();
console.log(a("dimas"));

// contoh masing-masing ada input
function createStudent(nama) {
    return function (jam) {
        return `Halo, ${nama}. Selamat ${jam}`;
    }
}

let b = createStudent("dimas");
console.log(b("Siang"));

// Contoh paling masuk akal, study kasus
// Kita ingin membuat angka bertambah setiap di panggil tanpa mengganggu nilai didalamnya seakan dia privat
let clickNumber = function () {
    let contohClosure = 0;
    return function () {
        return ++contohClosure;
    }
}

contohClosure = 100; // tidak mempengaruhi hasil closure

// harus disimpan dalam variable terlebih dahulu
let contohClick = clickNumber();
console.log(contohClick()); // contohClosure akan bernilai 1
console.log(contohClick()); // karena contohClosure sebelumnya 1, skrg menjadi 2
console.log(contohClick()); // dan seterusnya, tanpa terganggu meski contoh closure adalah 0 di function pertama

// cara lain
let clickNumber2 = (function () {
    let contohClosure = 0;
    return function () {
        return ++contohClosure;
    }
})();

console.log(clickNumber2());
console.log(clickNumber2());
console.log(clickNumber2());