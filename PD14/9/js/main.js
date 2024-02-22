function pol(time) {
  let sum = 1;
  for (let i = 0; i <= time; i++) {
    if (i % 3 === 0 && i !== 0) {
      sum *= 2;
      console.log(`Po ${i} valandų bus ${sum} lasteliu.`);
    }
  }
}
pol(24);
