let x = +prompt("Qizil Olma kilosini kiriting");
let a = +prompt("Qizil Olma narxini kiriting");
let y = +prompt("Yashil Olma kilosini kiriting");
let b = +prompt("Yashil Olma narxini kiriting");

let x1kg = a / x;
let y1kg = b / y;

let xsum = x * x1kg;
let ysum = y * y1kg;

let sum = xsum + ysum;

console.log(sum, " so`m savdo qilingan");