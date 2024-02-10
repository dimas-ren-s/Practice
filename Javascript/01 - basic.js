// Expression
5;
5 + 2;
// Statement
let a;
a = 10;

const b = 20;
let result = a + b;
result;
console.log(result);

/* comments */
// comments

// Tipe data ada 7
console.log(typeof 10);
console.log(typeof "string");
console.log(typeof undefined);
console.log(typeof 5n);
console.log(typeof true);
console.log(typeof null);
console.log(typeof Symbol("id"));

// Operator pada tipe data Number
console.log(10 + 10); // penjumlahan
console.log(10 - 10); // pengurangan
console.log(10 / 10); // pembagian
console.log(10 * 10); // perkalian
console.log(10 % 10); // sisa pembagian atau modulus
console.log(10 ** 2); // perpangkatan
// let c = 10++; // digunakan pada looping
// console.log(c); outputnya 11 // penjumlahan pada saat pemanggilan berikutnya
// let d = 10--; // digunakan pada looping
// console.log(d); outputnya 9 // pengurangan pada saat pemangggilan selanjutnya

// Operator pada tipe data bigInt
console.log(10n + 10n);
console.log(10n - 10n);
console.log(10n / 10n);
console.log(10n * 10n);
console.log(10n % 10n);
console.log(10n ** 2n);

// Operator pada tipe data String
console.log('string a' + ' string b'); // penggabungan atau concatination

// Interpolation dengan tanda ` string ${nama}`
const c = "NamaKuhh"
console.log(` String ${c} `);

// Bolean 
const d = true;
// if (d) return `Hello`;

// Assignment Operator yaitu operator = untuk memberikan nilai
let e = 20;
let f = e;

// Assignment operator collab sama operator numbering
e += f; // artinya e = e + f
console.log(e);
e -= f; // artinya e = e - f
console.log(e);
e /= f; // artinya e = e / f
console.log(e);
e *= f; // artinya e = e * f
console.log(e);
e %= f; // artinya e = e % f
console.log(e);
e = 2;
f = 2;
e **= f; // artinya e = e ** f
console.log(e);

// Comparison Operator yaitu untuk melakukan perbandingan menggunakan simbol =, <, >, ! atau kombinasi dari simbol tsb
a = 10;
console.log(b); // 20
console.log(a == b); // false
console.log(a != b); // true
console.log(a <= b); // true
console.log(a >= b); // false
console.log(a < b); //true
console.log(a > b); // false
console.log(a === b); //false, perbedaannya ada pada tidak hanya nilainhya, tetapi type dan sebagainya
console.log(a !== b); // true

// Logical Operator yaitu untuk melakukan pengecekan apakah 2 kondisi atau lebih bernilai true atau false
console.log(a == b && a < b); //false, dimana 2 kondisi harus bernilai true, agar output logika bernilai true
console.log(a < b || a == b); // true, jika salah 1 dari 2 kondisi bernilai true, maka output akan bernilai true
console.log(!(a > b)); // true, menggunakan pengecekan apakah false, kalau iya hasilkan true