/*  problem015 - Starting in the top left corner of a 2 * 2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
image at https://projecteuler.net/resources/images/0015.png?1678992052
How many such routes are there through a 20 * 20 grid?  */

function factorial(num) {
    if (num === 1) {
        return num;
    }
    else {
        return num * factorial(num - 1);
    }
}

function routes(gridSize) {
    let moves = gridSize * 2;
    return (factorial(moves) / (factorial(gridSize) * factorial(moves - gridSize)));
}

console.log(routes(20));