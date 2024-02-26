// Asynchronous adalah suatu kemampuan compiler dalam melewati task yang sedang berlangsung dan menjalankan task yang berikutnya
// Dalam javascript, sebutan untuk asynchronous dengan single-threaded adalah = concurrency
// Asynchronous pada javascript ada 4, yaitu Callback, Promise, Ajax atau Fetch, dan async await

// Callback adalah sebuah parameter berupa function, yang biasanya digunakan setelah function lain telah berjalan
// Sering menggunakan arrow function
// Singkatnya callback biasanya digunakan untuk status success / failed

// Contoh callback
function welcome(nama) {
    console.log(`Welcome ${nama}`);
}

function tampilkanPesan(nama, callback) {
    callback(nama);
}

tampilkanPesan("dimas", welcome); // welcome dimas

// harus hati hati jika tidak ingin terjebak di dalam callback hell, yaitu piramida yang sangat rumit karena terlalu banyak callback
// ganti menggunakan callback + ajax, kita akan menggunakan fetch untuk mengakses data dari API