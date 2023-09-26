// problem003 - The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

function largestPrimeFactor(number) {
    let i = 2, primeFactor = 0;
    while (i <= number && number > 1) {
        if (number % i === 0) {
            number /= i;
            primeFactor = i;
            i--;
        }
        i++;
    }
    return primeFactor;
}

console.log(largestPrimeFactor(600851475143));