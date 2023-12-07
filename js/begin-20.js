let abc = +prompt("Uch xonali son kiriting");

let c = abc % 10;
let b = ((abc - c) % 100) / 10;
let a = (abc - c - b * 10) / 100;

// console.log(c);
// console.log(b);
// console.log(a);

console.log(a, c, b);
