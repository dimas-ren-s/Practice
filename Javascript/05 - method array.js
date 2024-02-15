let arr = ["satu", 2, "Tiga", true];
// length, untuk menghitung total data/elemen/indeks suatu array
console.log(arr.length);

// join, untuk merubah array menjadi string, dengan penggunaan array.join("optional");
console.log(arr.join());
console.log(arr.join("-"));

// push, untuk menambahkan data baru sebagai indeks terakhir seterusnya, penggunaan array.push("wajib", "opsional", ... n);
arr.push("jamal")
console.log(arr);

// pop, untuk menghapus indeks array paling akhir, penggunaan array.pop();
arr.pop()
console.log(arr);

// unshift, untuk menambahkan data baru sebagai indeks pertama seterusnya, penggunaan array.unshift("wajib", "opsional", ...n);
arr.unshift("Jamal", "Kamal");
console.log(arr);

// shift, untuk menghapus indeks pertama, pengguna array.shift();
arr.shift();
console.log(arr);

// splice, untuk menentukan apakah suatu data pada indeks yang ditentukan dihapus atau ditambah.
// Penggunaan array.slice(indexAwal, mauDihapusBerapa, "elemen baru 1 opsional", "elemen baru seterusnya")
arr.splice(2, 0, "tambah baru"); // masukkan "tambah baru" sebagai indeks ke 2
console.log(arr);
arr.splice(1, 1); // hapus data yang berada pada index 1 dan sebanyak 1 data yaitu "satu"
console.log(arr);

// slice (berlaku untuk array baru), untuk memilih data tertentu yang diambil ke array baru
// Penggunaan let arrayBaru = arr.slice(indeksAwal, batasIndeksDiluarArray);
let arrBaru = arr.slice(1, 3);
console.log(arrBaru); // hanya indeks 1 dan 2 yang masuk dari arr sebelumnya tanpa indeks ke-3

// forEach, melakukan perulangan dengan callback function dimana nilai param e akan dianggap sebagai tiap data
// penggunaan arr.forEach(function(elemen, indexOpsional){});
arr.forEach(function (e) {
    console.log(e);
});

// map, melakukan perulangan namun lebih kompleks. selain sama dengan fungsi forEach. dia juga dapat return nilai array
// Penggunaan sama seperti forEach, cara lain : function expression
let arrMap = arrBaru.map(function (e, i) {
    return "Element ke " + (i + 1) + " -> " + e;
});
console.log(arrMap);

// sort, melakukan pengurutan angka secara value, namun harus dilakukan penyesuaian untuk angka 10 keatas
let angka = [2, 4, 6, 1, 2, 3, 8, 10, 9, 13, 7];
console.log(angka.sort());
// penyesuaian untuk angka > 10
// angka.sort(function (a, b) {
//     return a - b;
// });
// Penyesuaian lebih ringkas
angka.sort((a, b) => a - b);
console.log(angka);

// find, untuk mencari hanya SATU data apakah ada di dalam array atau tidak (yang pertama kali ditemukan sesuai indeks)
// Penggunaan seperti map
// let angkaBaru = angka.find(function (e) {
//     return e > 4;
// });
// One Line?
let angkaBaru = angka.find((e) => e > 4);
console.log(angkaBaru);

// filter, untuk mencari apakah banyak data yang sesuai didalam suatu array, dan dapat dikembalikan seperti array
// Penggunaan sama seperti map
// let angkaFilter = angka.filter(function (e) {
//     return e > 4;
// });
// One Line?
let angkaFilter = angka.filter((e) => e > 4);
console.log(angkaFilter);