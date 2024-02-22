function reverse(n) {
    return (
        parseFloat(
            n
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(n)
    )
}
console.log(reverse(12345));