let n = +prompt("Kun boshidan boshlab necha sekund o`tganini yozing");

let restSecond = n % 3600;
let hour = (n - restSecond) / 3600;
let second = restSecond % 60;

console.log(
  "Kun boshidan boshlab ",
  hour,
  " soat ",
  second,
  " sekund o`tdi"
);
