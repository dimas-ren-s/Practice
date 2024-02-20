// object, selain menyimpan data dengan key, juga dapat menyimpan sebuah object, array, atau function
const a = {
    key1: 2024,
    keyOne: 'Dua Ribu Dua Empat',
    "Key One": 2024,
    keyObject: {
        keySatu: "satu",
        keyDua: "dua"
    }
}

console.log(a);
console.log(a.key1);
console.log(a["Key One"]);
console.log(`cara mengambil data object ${a.key1} seperti itu`);
console.log(a.keyObject["keySatu"]);
console.log(a.keyObject.keyDua);
console.log(a["keyObject"]["keySatu"]);

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
    },
    {
        kunci1: 2025,
        kunci2: 2024,
        kunci3: 2026
    }
]

// Destructuring object yang belum pernah dideklarasi dengan menggunakan let { keyHarusSamaDenganProperti } = namaObject
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

// rest param atau spread operator, sisanya akan masuk kedala variable baru berupa object
let { kunci1, ...sisaKey } = dObject[2];
console.log(key1, sisaKey);

// destructuring assignment tanpa harus deklarasi object terlebih dahulu, 
// penggunaan ( { namaProperti1, namaProperti2 } = { namaProperti1: "contoh1", namaProperti2: "contoh2" } );
({ namaProperti1, namaProperti2 } = { namaProperti1: "contoh1", namaProperti2: "contoh2" });
console.log(namaProperti1, namaProperti2);

// destructing diatas juga dapat di implementasikan pada function
// jika sebelumnya parameter function berupa object function(dObject) maka kali ini kita akan memanfaatkan { } untuk 
// destructuring object
// jika function object
function cariKey(dObject) {
    return dObject.key1;
}
console.log(cariKey(dObject[1]));

// jika function destructuring
function cariKey({ key1 }) { // jangan lupa { namaPropertiHarusSama }
    return key1;
}
console.log(cariKey(dObject[1]));


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

// rest param, atau spread operator. dapat menampung banyak data ke dalam 1 array
let [thn1, ...sisaThn] = b;
console.log(thn1, sisaThn)