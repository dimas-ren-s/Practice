// object, 
const a = {
    key1: 2024,
    keyOne: 'Dua Ribu Dua Empat',
    "Key One": 2024
}

console.log(a);
console.log(a.key1);
console.log(a["Key One"]);
console.log(`cara mengambil data object ${a.key1} seperti itu`);

// Array, dihitung dari index 0
const b = [2024, "dua ribu dua empat", 2024];

console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(`cara mengambil data array ${b[0]} seperti itu`);



console.log(a);

// Destructuring Object
let dObject = [
    {
        key1: 2024,
        keyTwo: 2024,
        "key three": "dua ribu dua empat"
    },
    {
        key1: 2025,
        keyTwo: 2025,
        "key three": "dua ribu dua lima"
    }
]

// Destructuring object yang belum pernah dideklarasi dengan menggunakan let { key } = namaObject
let { key1, keyTwo, "key three": keyThree } = dObject[0];
console.log(key1, keyTwo, keyThree);

// Destructuring assignment -> sudah pernah dideklarasi dengan menggunakan ({ key } = namaobject) tanpa deklarasi type var
// Pada baris ke 41 sudah di deklarasi pada destructuring pertama
({ key1, keyTwo, "key three": keyThree } = dObject[1]);
console.log(key1, keyTwo, keyThree);

// Destructuring assignment + default value
({ key1, keyTwo, keyThree = "Default " } = dObject[1]);
console.log(key1, keyTwo, keyThree);

// Sebenarnya udah digunakan pada "key three", yakni menamai variable berbeda menggunakan tanda " : "
({ key1: keySatu, keyTwo: keyDua, "key three": keyTiga } = dObject[1]);
console.log(keySatu, keyDua, keyTiga);


console.log(b);

// Destructuring Array yang belum di deklarasi dapat menggunakan simbol let/const [ ] = namaArrray;
let [tahun1, tahunSatu] = b;
console.log(tahun1, tahunSatu);

// Destructuring array dengan nilai default
let [year1, yearOne, yearSatu, yearDef = "Tahun Default"] = b;
console.log(year1, yearOne, yearSatu, yearDef);

// Destructuring array pada array tertentu dengan mengosongkan pada index yang dilewati
let [, , thnSatu] = b;
console.log(thnSatu);

// [a,b] = [b,a]
[year1, yearOne] = [yearOne, year1]
console.log(year1, yearOne);