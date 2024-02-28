/* promise adalah sebuah object yang merepresentasikan keberhasilan / kegagalan
sebuah event yang asynchronous di masa yang akan datang */
// promise biasanya digunakan untuk melakukan request api

// pada promise terdapat berberapa singkatan yang perlu diketahui
// (Keadaan)          Indo     >> janji    : (terpenuhi  / ingkar)
// (Keadaan)          Promise  >> states   : (fullfilled / rejected / pending) --- pending adalah waktu tunggu
// (Function Ketika)  Callback >> callback : (resolve    / reject   / finally) --- finally adalah waktu selesai yang sering digunakan untuk menghentikan proses loading
// (aksi pas selesai) Action   >> ketika   : (then       / catch)              --- then untuk mendapatkan hasil resolve, catch untuk mendapatkan hasil reject(error)

// Contoh Promise
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve(`janji ditepati`);
    } else {
        reject(`janji tidak ditepati`);
    }
});

janji1
    .then(response => console.log(response)) // output --- janji ditepati jika let ditepati = true
    .catch(response => console.log(response)); // output --- janji tidak ditepati jika let ditepati = false


// contoh Promise (asynchronous) dengan bantuan setTimeOut
let waktuDitepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (waktuDitepati) {
        setTimeout(() => { // harus pake arrow function
            resolve([{
                nama: "Naruto",
                episode: 1002
            },
            {
                nama: "One Piece",
                episode: 1002
            }]);
        }, 3000);
    } else {
        setTimeout(() => {
            reject(`Tidak ada`)
        }, 500);
    }
});


console.log('dimulai');
console.log(janji2
    .then((response) => console.log(response))
    .catch((response) => console.log(response))
);
console.log('selesai');

// output dari keseluruhan :
/* 
    dimulai
    Promise(pending)  ---> janji2
    selesai
    janji tidak ditepati ---> janji1, kenapa dibawah console log, padahal dia duluan dan tidak ada set time out? karena promise itu asynchronous, jadi hoisting nya harus tunggu event loop ksoong dulu
    [{ ---> janji 2
        nama: "Naruto",
        episode: 1002
    },
    {
        nama: "One Piece",
        episode: 1002
    }]
*/