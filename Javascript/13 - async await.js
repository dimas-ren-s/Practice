// async await adalah sebuah singkatan dari asynchronous function. dimana sebuah function yang bersifat asynchronous tapi
// memiliki struktur seperti sycnchronous function agar developer mudah memahaminya selain itu hasil yang dikembalikan
// adalah promise(implisit)

// async digunakan pada awal deklarasi function contoh
/*
    async function getDataMovieAPI(){
        ....
    }

    atau sebelum sebuah function yang digunakan sebagai argumen

    searchButton.addEventListener('click', async function{
        ...
    })
*/

// await -> adalah keyword yang menandakan bahwa di line tersebut ada function yang bersifat asynchronous yang harus ditunggu hingga selesai
// Penggunaan async function memerlukan try and catch untuk menangkap data resolve dan data rejected,

// Contoh
function buatJanji() {
    return new Promise(resolve => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('gagal')
        }
    });
}

const janji1 = buatJanji();
// console.log(janji1); // output hanya promise <pending> karena output async adalah promise
janji1.then(res => console.log(res));

// try and catch akan masuk ke sub error handling