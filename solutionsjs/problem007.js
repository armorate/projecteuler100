// problem007 - By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10001st prime number?

function getPrime(index) {
    let i, j, a, primeCount = 1;
    for (i = 3; i < Number.MAX_SAFE_INTEGER; i += 2) {
        a = 0;
        for (j = 3; j <= Math.ceil(Math.sqrt(i)); j += 2) {
            if (i % j === 0) {
                a++;
                break;
            }
        }
        if (a === 0) {
            primeCount++;
        }
        if (primeCount === index) {
            return i;
        }
    }
}

console.log(getPrime(10001));