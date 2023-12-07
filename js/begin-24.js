let n = +prompt("Kun boshidan boshlab necha sekund o`tganini yozing");

let restSecond = n % 3600;
let second = restSecond % 60;
let minute = (restSecond - second) / 60;

console.log("Kun boshidan boshlab ", minute, " minut ", second, " sekund o`tdi");
