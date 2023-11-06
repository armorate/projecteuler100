/*  problem014 - The following iterative sequence is tempefinetemp for the set of positive integers:
        n => n/2 (n is even)
        n => 3n + 1 (n is odd)
    Using the rule above and starting with 13, we generate the following sequence:
        13 => 40 => 20 => 10 => 5 => 16 => 8 => 4 => 2 => 1.
    It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
    Which starting number, under one million, produces the longest chain?
    NOTE: Once the chain starts the terms are allowed to go above one million.  */

function largestCollatzChain(limit) {
    let i, currentChainLength, currentLargestChain = 0, temp, numberWithLargestChain;
    for (i = 2; i <= limit; i++) {
        temp = i;
        currentChainLength = 1;
        while (temp !== 1) {
            if (temp % 2 === 0 && temp !== 1) {
                temp /= 2;
                currentChainLength++;
            }
            if (temp % 2 !== 0 && temp !== 1) {
                temp = (3 * temp) + 1;
                currentChainLength++;
            }
        }
        if (currentChainLength > currentLargestChain) {
            currentLargestChain = currentChainLength;
            numberWithLargestChain = i;
        }
    }
    return numberWithLargestChain;
}

console.log(largestCollatzChain(1000000));
