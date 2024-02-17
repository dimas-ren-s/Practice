// Cara membuat object

// 1. Object Liberal, pemanggilan biasa dengan deklarasi variable
let myObject = {
    nama: "saya",
    umur: 23,
    skill: ["Javascript", "Typescript", "Php", "CSS", "TailwindCSS", "HTML"],
    // sayHello: () => "Hallo saya " + nama // error, karena this.nama atau nama tidak dapat dijalankan pada arrow func
    sayHello: function () {
        return "Hallo, saya " + this.nama
    }
}

console.log(myObject.sayHello());

// 2. Function Deklarasi Object
function createObject(nama, umur, skill) {
    let funcObject = {};
    funcObject.nama = nama;
    funcObject.umur = umur;
    funcObject.skill = skill;
    funcObject.sayHello = () => "Hallo, saya " + nama; // Bisa Gunakan arrow function
    // funcObject.sayHello = function () {
    //     return "Hallo, saya " + this.nama;
    // }
    return funcObject;
}

// Contoh penggunaan:
let obj = createObject("John", 25, "Programming");
console.log(obj.sayHello()); // Output: "Hallo, saya John"

let tes = createObject("Dimas", 23, ["Javascript", "Typescript", "Php", "CSS", "TailwindCSS", "HTML"])
console.log(tes);
console.log(tes.sayHello());


// 3. constructor, menggunakan new disaat pemanggilan dan tanpa menggunakan return, upayakan nama function huruf besar
function ConstrObject(nama, umur, skill) {
    this.nama = nama;
    this.umur = umur;
    this.skill = skill;
    this.sayHello = () => "Hallo, saya " + nama; //tidak ramah memori, kalau mau taruh diluar fungsi(object baru)
    // this.sayHello = function () {
    //     return "Hallo, saya " + this.nama;
    // }
}

let constObj = new ConstrObject("dimas", 23, ["Javascript", "Typescript", "Php", "CSS", "TailwindCSS", "HTML"]);
console.log(constObj);
console.log(constObj.sayHello());

// Object.Create(namaVariableMethodObject)
// tahap 1, deklarasikan variable method object
Mahasiswa.prototype.sayHello = function () {
    return "Hallo, saya " + this.nama;
}

// tahap 2, deklarasikan function constructor
function Mahasiswa(nama, umur, skill) {
    this.nama = nama;
    this.umur = umur;
    this.skill = skill;
}

let tesObjectCreateConstructor = new Mahasiswa("dimas", 23, ["js", "ts", "php"]);
console.log(tesObjectCreateConstructor)
console.log(tesObjectCreateConstructor.sayHello());

// CLASS yang dibelakang layar juga dengan prototype function constructor
class ClassMahasiswa {
    constructor(nama, umur, skill) {
        this.nama = nama;
        this.umur = umur;
        this.skill = skill;
    }

    sayHello() {
        return `Hallo, saya ${this.nama}`;
    }
}

let tesClass = new ClassMahasiswa("Dimas", 23, ["js", "ts"]);
console.log(tesClass);
console.log(tesClass.sayHello());