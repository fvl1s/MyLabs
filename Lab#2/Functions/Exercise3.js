'use strict';

const output = [];

function average(a, b) { return (a + b) / 2; }
function square(x) { return x * x; }
function cube(x) { return x * x * x; }

for (let i = 0; i <= 9; i++) {
    output.push({ i, square: square(i), cube: cube(i), average: average(square(i), cube(i)) });
}

console.dir(output);
