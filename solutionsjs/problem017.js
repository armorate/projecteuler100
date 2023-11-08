/*  problem017 - If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
    If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? 
    NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.   */


function numberToWords(num) {
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensDigints = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const doubleDigits = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const manyDigits = ['hundred', 'thousand'];
    let numInWords = [];
    if (num > 0) {
        if (num % 100 > 0) {
            let i = num % 100;
            if (i < 10) {
                numInWords[4] = singleDigits[i];
            }
            else if (i % 10 === 0) {
                numInWords[4] = doubleDigits[(i / 10) - 1];
            }
            else if (i > 10 && i < 20) {
                numInWords[4] = tensDigints[i - 11];
            }
            else {
                numInWords[4] = doubleDigits[Math.floor(i / 10) - 1] + '-' + singleDigits[i % 10];
            }
        }
        if (1000 > num && num >= 100) {
            numInWords[1] = singleDigits[Math.floor(num / 100)] + ' ';
            numInWords[2] = manyDigits[0];
        }
        if (num > 100 && num % 100 > 0) {

            numInWords[3] = ' and ';
        }
        if (num === 1000) {
            numInWords[2] = manyDigits[1];
            numInWords[1] = 'one ';
        }
        else if (num > 1000 || num < 1) {
            numInWords = ['Enter a number between 1 to ', '1000', '.', '', ''];
        }
    }
    return numInWords.reduce((a, b) => a + b);
}


function countLetters(number) {
    let lettersCount = 0;
    for (let j = 1; j <= number; j++) {
        lettersCount = lettersCount + numberToWords(j).replace(/ /g, '').replace(/-/g, '').length;
    }
    return lettersCount;
}

console.log(countLetters(1000));