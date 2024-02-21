// Pengulangan for, dimana kita dapat menentukan pengulangan yang biasanya dimulai dari 0 dan membuat batas pengulangan
let a = 1;
for (let i = 0; i < 5; i++) {
    a += i;
}
console.log(a); // output 11, karena c dapat dijabarkan seperti : 1 + (1 + 2 + 3 + 4)
// Berhenti ketika i = 5 karena i < 5.

// Pengulangan for each, dimana kita dapat melakukan pengulangan dengan menghitung jumlah array
const myArray = [3, 2, 1, 4];
let b = 1;
for (const item of myArray) {
    b += item;
}
console.log(b); // output 11, karena b ditambah tiap item atau 1 + (3 + 2 + 1 + 4)

// Pengulangan While, dimana perulangan dilakukan disaat while bernilai true
let c = 1;
let d = 1;
while (c < 5) {
    d += c;
    c++;
}
console.log(d); // output 11, dikarenakan d akan terus ditambah, penjabarannya : 1 + (1 + 2 + 3 + 4)

// Pengulangan do While, bedanya apa bang? bedanya dilakukan pada do, dan pengkodisian pada while
let e = 1;
let f = 1;
do {
    f += e;
    e++;
} while (e < 5);
console.log(f); // output 11, dikarenakan d akan terus ditambah, penjabarannya : 1 + (1 + 2 + 3 + 4)

// ada juga infinite loop, jika kita lupa membuat e++ atau c++ pada while. ////

// Pengulangan For ... in, digunakan untuk melakukan iterate pada object
let abc = {
    nama: "dimas",
    nim: "1908107010040",
    skill: "Javascript, Typescript, PHP"
}

for (const num in abc) {
    console.log(num); // akan mengembalikkan key dari properti
    console.log(abc[num]); // akan mengembalikkan value dari properti
}