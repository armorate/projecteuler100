/*  problem016 - 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
    What is the sum of the digits of the number 2^1000?   */

function powerDigitSum(exponent) {
    let num = BigInt(2 ** exponent);
    return Array.from(num.toString(), Number).reduce((a, b) => a + b);
}

console.log(powerDigitSum(1000));