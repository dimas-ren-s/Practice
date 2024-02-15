// let uniqueInOrder = function (iterable) {
//     let a;
//     let b;
//     let c = [];
//     if (typeof iterable !== 'string') {
//         if (typeof iterable === 'number') {
//             a = iterable.toString().split('');
//         } else {
//             a = iterable.toString().split(',');
//         }

//         for (let item of a) {
//             let d;
//             if (!isNaN(parseInt(item))) {
//                 d = parseInt(item);
//             } else {
//                 d = item;
//             }
//             if (b !== d) {
//                 c.push(d);
//                 b = d;
//             }
//         }
//     } else {
//         a = iterable.split("");
//         for (let item of a) {
//             if (b !== item) {
//                 c.push(item);
//                 b = item;
//             }
//         }
//     }
//     return c;
// }

// Master
let uniqueInOrderPro = function (iterable) {
    if (typeof iterable === "number") iterable = String(iterable);
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

let a = "asdasdasdwa";
let b = 'aaaaaASDASSSAssSSsAAa';
let c = ([...b].filter((item, i) => item !== b[i - 1]))
console.log([...a])
console.log(c)

// const a = uniqueInOrder('AAAABBBCCDAaBBB');
// const b = uniqueInOrder(1223123123);
// const c = uniqueInOrder([1, 2, 2, 3, 3]);
// const d = uniqueInOrder(['1', '2', '3'])
// const e = uniqueInOrder(['a', 'a', 'b', 'c'])
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
const aPro = uniqueInOrderPro('AAAABBBCCDAaBBB');
const bPro = uniqueInOrderPro(1223123123);
const cPro = uniqueInOrderPro([1, 2, 2, 3, 3]);
const dPro = uniqueInOrderPro(['1', '2', '3']);
const ePro = uniqueInOrderPro(['a', 'a', 'b', 'c']);
console.log(aPro);
console.log(bPro);
console.log(cPro);
console.log(dPro);
console.log(ePro);