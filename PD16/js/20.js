function longestt(arr) {
    var longest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

let countries = ["Afghanistan", "Luxemburg", "United States of America"];
console.log(longestt(countries));