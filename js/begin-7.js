let r1 = +prompt("Birinchi aylana radiusini ko`rsating! ");
let r2 = +prompt("Ikkinchi aylana radiusini ko`rsating! ");

const pi = 3.14;

let s1 = pi * r1;
let s2 = pi * r2;
let s = pi * (r1 ** 2 - r2 ** 2);

console.log("Birinchi aylananing yuzasi = ", s1);
console.log("Ikkinchi aylananing yuzasi = ", s2);
console.log("Yuzalarning ayirmasi = ", s);