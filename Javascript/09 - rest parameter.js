// Rest parameter adalah penggunaan tiga titik ... untuk menyatukan banyak parameter menjadi 1 array param pada function
// Penggunaan biasanya selalu pada akhir param, tidak bisa diawal param, contoh function abc (param1, ...sisaparam)
// -> untuk menyatukan input yang tidak terbatas menjadi satu array
function abc(param1, ...sisaparam) {
    return `${param1} dengan jumlah sisanya adalah ${sisaparam.reduce((a, b) => a + b)} `;
}
// 1 akan masuk sebagai param1, dana sisanya akan masuk ke sisa param sbg array yang akan dijumlahkan
console.log(abc(1, 3, 2, 4, 5));


// -> array destructuring dengan mengambl sisa array yang tidak memiliki varible kedalam 1 array
const anime = ['naruto', 'one piece', 'bleach', 'inazuma eleven', 'doraemon'];
const [ninja, ...animeBiasa] = anime;
console.log(ninja);
console.log(animeBiasa);

// -> object destructuring dengan mengambil sisa juga
const team = {
    ketua: "dimas",
    wakil: 'rendy',
    anggota: 'sugara',
    manager: 'fulan'
}

const { ketua, ...myTeam } = team;
console.log(ketua);
console.log(myTeam);

// contoh function rest parameter
function filterBy(type, ...values) {
    return values.filter(a => typeof a === type);
}

console.log(filterBy('boolean', 1, 2, 'stringDua', 'StringTiga', false, 2, 'stringEmpat'));