// Spread operator itu hampir mirip dengan rest param, yaitu menggunakan ... tiga titik.
// FUngsi :
// -> Menggabungkan array menjadi satu string
let array1 = ["angka", 'satu', 'yaitu', 'one'];
console.log(...array1);

// -> Mengubah string menjadi array dengan penggunaan [...varString] kalau hanya membuat ...varString hanya akan menambah spasi saja antar char
// Kalau object tinggal ganti jadi { ...varString }, otomatis keynya berupa index
let string1 = 'satu dua tiga empat';
let afterString1 = [...string1];
console.log(afterString1);
console.log(...string1);

// -> Menggabungkan 2 array menjadi 1 array, yang bersifat dinamis
let array2 = ["naruto", 'shippuden', 'one piece'];
let array3 = ['tukang bubur naik haji', 'Mancing mania', 'si unyil'];
const afterArray23 = [...array2, "barbie", ...array3]; // dinamis, bisa menambahkan array baru langsung
console.log(afterArray23);

// -> Mengcopy array tanpa mengubah array awal, 
let copyArray2 = array2; // tanpa spread operator
copyArray2[0] = "bleach";
console.log(copyArray2); // indeks awal berubah sesuai baris 22
console.log(array2); // juga ikut berubah
// sedangkan spread operator
let copyArray3 = [...array3]; // dengan spread operator
copyArray3[0] = "family 100";
console.log(copyArray3); // index 0 berubah sesuai baris 27
console.log(array3); // tidak berubah

// -> Bisa mengubah nodelist menjadi array hanya dengan [...nodelist] tanpa method Array.from
// karena itu, kita bisa membuat effect per huruf dengan memanfaatkan spreadoperator dan map
