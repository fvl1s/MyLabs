'use strict';

console.log("Exercise #3");

const array = [
  true, false, "birthday", "hello", 17, 18, 2.5, -3, null, undefined,
  {}, [], {name: "John"}, [1, 2, 3], () => {}, function test(){}, 100n, 0n, -50, "word", "JS", true, false
];

const counter = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  function: 0,
  object: 0,
  bigint: 0
};

for (let item of array) counter[typeof item]++;

console.log(counter);
