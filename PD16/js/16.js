function perfectNumber(number){
    let sum = 0;
    for(let i = 1; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }
    if(sum == number){
        return true;
    }else{
        return false;
    }
}
console.log(perfectNumber(6));