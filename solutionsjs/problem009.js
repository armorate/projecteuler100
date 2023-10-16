// problem009 - A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

function productOfTriplets() {
    let i, j, k;
    for (i = 998; i >= 1; i--) {
        k = 1;
        for (j = 1000 - i - k; j >= 1; j--) {
            if ((j ** 2 + k ** 2) === i ** 2) {
                return i * j * k;
            }
            k++;
        }
    }
}

console.log(productOfTriplets());