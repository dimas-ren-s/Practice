// parameter adalah sebuah nilai yang dimasukkan ke dalam tanda kurung function(param), dapat berupa apapun
function a(param1, param2) {
    return `Pertama adalah ${param1}, dan kedua adalah ${param2}`
}

console.log(a("jamal", "Fulan"));

// Cntoh object
let obJ = {
    myParam1: "dimas",
    myParam2: "Rendy"
}

// Nama param harus sesuai dengan nama object yang diambil
function b({ myParam1, myParam2 }) {
    return `Halo ${myParam1}, dan ${myParam2}`;
}

console.log(b(obJ));

// Default Param, jadi kalau datanya tidak ada, maka kita akan masukkan default
function a(param1, param2 = "Member Default") {
    return `Pertama adalah ${param1}, dan kedua adalah ${param2}`
}
// Hanya 1 value yaitu param1
console.log(a("jamal"));
// 2 value
console.log(a("dimas", "Rendy"));

// Rest Param, adalah menggunakan spread operator untuk menggabungkan banyak value param menjadi satu buah array
function c(...restParam) {
    // Karena telah berubah menjadi array maka bisa menggunakan function array
    console.log(restParam);
    return restParam.filter((a, b) => a !== restParam[b - 1]);
}

// value lebih dari 1
console.log(c(1, 3, 5, 6, 6, 7));