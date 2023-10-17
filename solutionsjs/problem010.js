// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.

function sumOfPrimes(limit) {
    let i, j, isDivisible, sum = 2;
    for (i = 3; i < limit; i += 2) {
        j = 3, isDivisible = 0;
        while (j <= Math.sqrt(i)) {
            if (i % j === 0) {
                isDivisible++;
                break;
            }
            j += 2;
        }
        if (isDivisible === 0) { sum += i; }
    }
    return sum;
}

console.log(sumOfPrimes(2000000));