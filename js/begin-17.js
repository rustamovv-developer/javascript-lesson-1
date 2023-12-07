let abc = +prompt("Uch xonali son kiriting");

let c = abc % 10;
let b = ((abc - c) % 100) / 10;
let a = (abc - c - b * 10) / 100;

console.log(a + b + c);
