let number = []
for(let i = 0; i < 99; i++){
    number[i] = Math.floor(Math.random() * 9999);
}
console.log(number);
number.forEach(even => {
    if(even % 2 == 0){
        console.log(even);
    }
})