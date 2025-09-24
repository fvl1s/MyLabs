'use strict';

console.log("Exercise #4");

const array = [
  true, false, "hello", "world", 10, -5, 3.14, 0, null, undefined,
  {}, {name: "Alice"}, [], [1,2,3], () => {}, function test(){}, 50n, 999n, "JS", false, true
];

const counts = {};

for (let item of array) {
  counts[typeof item] = counts[typeof item] ? counts[typeof item] + 1 : 1;
}

console.log(counts);
