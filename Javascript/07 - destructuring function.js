// Destructuring function adalah memanfaatkan destructuring array dan object didalam parameter atau return pada function
// function return berupa array :
function calculate(a, b) {
    return [a + b, a - b, a * b, a / b]; // pakai [ ] agar return dalam bentuk array
}

// deklarasi destructuring array dari sebuah function dengan return array yang tersusun rapi
const [tambah, kurang, kali, bagi] = calculate(2, 4);
console.log(tambah, kurang, kali, bagi);

// function return berupa object :
function calculateObj(a, b) {
    return {
        add: a + b,
        less: a - b,
        multiply: a * b,
        divide: a / b
    }; // pakai { } dan key properti agar return dalam bentuk object
}

// deklarasi destructuring object tanpa perlu mengatur deret, karena ada key propertinya
const { add, less, multiply, divide, modulus = "Tidak ada" } = calculateObj(2, 4);
console.log(add, less, multiply, divide, modulus);

// destructuring function dimana parameter berupa object
const mahasiswa = {
    id: 1908107010040,
    nama: "dimas rendy",
    nilai: {
        uts: 90,
        uas: 67,
        latihan: 95
    }
}

function cekNilai({ id, nama, nilai: { uts, uas, latihan } }) { // jangan lupa { }, kalau ada object didalam object, pecah dengan : { childObjectProperti, ... }
    return `
        Mahasiswa dengan NIM ${id} Nama ${nama}, memiliki nilai UAS ${uas}
    `
}

console.log(cekNilai(mahasiswa));

// destructuring function dimana parameter berupa array, function for of disini maksudnya looping
const namaAnime = ["Attack on Titan", "Naruto", "One Piece"];
// karena hasil namaAnime.entries adalah berupa array -> [[0, "Attack of Titan"], [1, "Naruto"], [2, "One Piece"]] kita bisa destructuring array tersebut untuk setiap perulangan
for (const [index, nama] of namaAnime.entries()) { // namaArray.entries, disini .entries adalah sebuah method bawaan untuk mencari index
    console.log(`Anime ${nama} berada pada nomor ${index + 1}`);
}