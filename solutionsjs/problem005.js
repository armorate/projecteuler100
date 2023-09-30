// problem005 - 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

function smallestDivisibleNumber(num) {
    let i, j, newFactor, len, factors = [2];
    for (i = 3; i <= num; i++) {
        newFactor = i;
        len = factors.length - 1;
        for (j = 0; j <= len; j++) {
            if (newFactor % factors[j] === 0 && newFactor / factors[j] >= 1) {
                newFactor /= factors[j];
            }
        }
        if (newFactor > 1) {
            factors.push(newFactor);
        }
    }
    return factors.reduce((accumulator, current) => accumulator * current);
}
console.time('dd');
console.log(smallestDivisibleNumber(20));
console.timeEnd('dd');