// Template Literal/template string ada 3 jenis, yaitu ' ', " ", dan ` `. yang digunakan untuk membuat string
// Keuntungan :

// -> Expression Interpolation, tidak perlu menambahkan tanda +, jadi lebih mudah
let laki = 1;
let perempuan = 2;
let expressionInterpolation = `terdapat ${laki + perempuan} anak, diantaranya ${laki} laki-laki dan ${perempuan} perempuan`;
console.log(expressionInterpolation);

// -> Multi line string, walau pun kita enter, tetap akan dianggap sebagai string dan dianggap juga sbg baris baru
let multiLineString = ` line pertama
line kedua
line ke tiga`;
console.log(multiLineString);

// -> Embedded expression, kita dapat memasukkan function dan sebagainya kedalam expression bahkan ternary
// let b = `halo, ${alert(multiLineString)}, Wahh`;
// console.log(b);
const angka = 10;
let c = `angka ${angka}, adalah ${(angka % 2 == 0) ? 'genap' : 'ganjil'}`;
console.log(c);

// HTML fragments, sering digunakan pada framework frontend seperti react, nextjs. contoh : 
// 1. misal ada data berupa object
let mahasiswa = {
    nama: "dimas rendy",
    nim: 1908107010040,
    mata_kuliah: [
        "pemrograman web",
        "pemrograman berbasis mobile",
        "basis data lanjut"
    ]
}

// 2. buat function untuk menampung looping mata kuliah, return berupa html fragments + arrow function
function cetakMataKuliah(mata_kuliah) {
    return `
        <ol class="mata_kuliah">
            ${mata_kuliah.map(mk => `<li>${mk}</li>`)}
        </ol>
    `
}

// 3. buat ada sebuah variabl yang menampung sebuah html fragment
const dMahasiswa = `
        <div div div class="mhs" >
            <h2>${mahasiswa.nama}</h2>
            <span class="nim">${mahasiswa.nim}</span>
            <h4>Mata Kuliah :</h4>
            ${cetakMataKuliah(mahasiswa.mata_kuliah)}
        </div >    
    `

// -> Tagged Template, membaca template literal melalui sebuah function
// fungsi khusus -> memberikan highlight, meningkatkan keamanan suatu string(purify), mengubah bahasa dengan library i18n
// penggunaan : const eTag = namaFunction `string text ${expression} string text`;
// `string text ${expression} string text` akan dianggap sebagai param/argumen

function highlight(strings, ...values) {
    return strings.reduce((prev, cur, i) => `
        ${prev}${cur}${values[i] || ''}
    `, '');
}

let nama = "dimas Rendy";
let skill = "Javascript";
const eTag = highlight`nama saya ${nama}, saya belajar ${skill}`;
console.log(eTag);