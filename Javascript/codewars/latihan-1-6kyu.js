function solution(number) {
    if (number < 0) return 0;
    let a = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            a += i;
        }
    }
    return a;
}

// Master but not best practice
function solutionArr(number) {
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

const a = solution(-10);
const b = solution(10);
const c = solutionArr(10);

console.log(a);
console.log(b);
console.log(c);