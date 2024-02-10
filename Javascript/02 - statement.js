// Statement If else, dimana jika bernilai benar, maka akan dijalankan jika tidak akan dilewatkan.

const a = 2;
const b = 3;
let c;

// Cara 1
if (a < b) {
    c = 5;
} else {
    c = 10;
}
console.log(c); // output 5 karena benar jika a < b

// Cara 2 Ternary
if (a < b) c ? 5 : 10;
console.log(c); // output 5, karena a tidak sama dengan b, tapi dibuat dalam bentuk Ternary



// Statement Switch Case, Dimana jika nilai sesuai dengan case tertentu maka perintah didlam case tersebut dijalankan
switch (a) {
    case 2:
        c = 5;
        break;
    case 3:
        c = 10;
        break;
    default:
        c = 1;
}

console.log(c); // output 5, karena case yang pertama yaitu angka 2, dan benar dimana angka 2 sama dngn variable a