let a = 11;
let temp = [];

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
    temp.push(i);
  }
}

if (temp.length > 2) {
  console.log(`${a} nera pirminis skaicius.`);
}
else {
  console.log(`${a} yra pirminis skaicius.`);
}