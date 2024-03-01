// error handling adlah sebuah cara untuk menangkap error agar lebih mudah diatasi dan dimengerti baik user atau developer
// Penggunaan Error Handling
// Promise          : .then(resolve) / .catch(reject)
// Asycn Function   : try(resolve)   / catch(reject + throw Error)

// contoh Error Handling Promise 
function buatJanji() {
    return new Promise((resolve, reject) => {
        const waktu = 10000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('gagal');
        }
    });
}

const janji1 = buatJanji();
janji1
    .then(res => console.log(res))
    .catch(res => console.log(res));

// Contoh Error Handling Async Function
// kita akan memanfaatkan function promise buatJanji
async function getJanji() {
    try {
        const janji = await buatJanji();
        return janji; // berbentuk promise
    } catch (e) {
        return `error ${e}`;
    }
}

const janji2 = getJanji();
janji2
    .then(res => console.log(res))
    .catch(res => console.log(res)); // output error gagal, gabungan dari catch + reject('gagal')