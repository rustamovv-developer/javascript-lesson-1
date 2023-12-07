let a = +prompt("a ni kiriting");
let b = +prompt("b ni kiriting");
let c = +prompt("c ni kiriting");

let av = a;
let bv = b;
let cv = c;

a = bv;
b = cv;
c = av;

// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);

console.log(a, b, c);