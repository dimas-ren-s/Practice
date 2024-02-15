function printerError(iterable) {
    return [...iterable].filter((item, i) => item > 'm').length + '/' + iterable.length;
}

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
let a = printerError(s);
console.log(a);