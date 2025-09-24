'use strict';

const results = { all: [], odd: [] };

const start = 10;
const end = 25;

for (let i = start; i <= end; i++) {
    results.all.push(i);
    if (i % 2 !== 0) results.odd.push(i);
}

console.dir(results);
