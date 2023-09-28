// problem004 - A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99. Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(num) {
    let array = Array.from(String(num), Number);
    let i = 0, j = array.length - 1;
    while (i <= j) {
        if (array[i] !== array[j - i]) {
            return false;
        }
        i++;
    }
    return true;
}

function getPalindrome(digits) {
    let minDivisor = 10 ** (digits - 1), maxDivisor = ((10 ** digits) - 1);
    for (let i = maxDivisor ** 2; i > maxDivisor; i--) {
        if (checkPalindrome(i)) {
            for (let j = maxDivisor; j >= minDivisor; j--) {
                if (i % j === 0) {
                    if (i / j >= minDivisor && i / j <= maxDivisor) {
                        return i;
                    }
                }
            }
        }
    }
}

console.log(getPalindrome(3));