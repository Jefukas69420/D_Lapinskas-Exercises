function CapitalLetter(meow) {
    let res = meow.charAt(0).toUpperCase() + meow.slice(1);
    return res;
}
console.log(CapitalLetter("sv"));