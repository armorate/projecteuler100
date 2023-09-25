// problem001 - if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

function sum(limit) {
    let i = 1, accumulator = 0;
    while (i < limit) {
        if (i % 3 === 0 || i % 5 === 0) {
            accumulator += i;
        }
        i++;
    }
    return accumulator;
}

console.log(sum(1000));