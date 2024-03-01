// Fetch adalah sebuah function bawaan javascript yang digunakan untuk melakukan request API
// dimana fetch menghasilkan output berupa PROMISE yang fullfilled dan bersifat asynchronous

// Penggunaan fetch sederhana
function getMovie(movieName) {
    return fetch('http://www.omdbapi.com/?apikey=492d9308&s=' + movieName)
        .then(response => response.json()) // response.json untuk mengembalikan bentuk promise ke object json
        .then(response => response.Search) // mengambil object json berupa promise ke bentuk object sebenarnya
}

async function listMovie(name) {
    let a = await getMovie(name);
    return a;
}

let a = listMovie('Avengers');
console.log(a);

// Mungkin hasilnya hanya pending karena menggunakan async function, tapi intinya fetch ini untuk request API
// Untuk lebih paham silakhkan cek folder ../contoh implementasi/fetch