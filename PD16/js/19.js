function bubbleSort(woof){
    for (let i = 0; i < woof.length; i++){
        for (let y = 0; y < woof.length - i - 1; y++){
            if (woof[y] > woof[y + 1]){
                let temp = woof[y];
                woof[y] = woof[y+1];
                woof[y+1] = temp;
            }
        }
    }
    return woof
}
let woof = [5, 4, 6, 2, 1];
console.log(bubbleSort(woof));