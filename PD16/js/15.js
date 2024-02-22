function minmax(meow) {
    meow.sort(function (a, b) { return a - b });
    console.log(meow[1], meow[meow.length - 2]);
}
minmax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);