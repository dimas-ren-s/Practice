function maskify(cc) {
    if (cc.length < 5) return cc;
    let c = cc.length - 4;
    let text = cc.slice(c, cc.length);
    let a = '#'.repeat(c);
    return a + text;
}

// Master
function maskifyPro(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

const a = maskify('4556364607935616');
const b = maskifyPro('4556364607935616');
console.log(a);
console.log(b);