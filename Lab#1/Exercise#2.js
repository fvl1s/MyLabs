'use strict';

console.log("Exercise #2");

const obj = { n: 13 };

const incObj = obj => {
    obj.n += 5;
};

incObj(obj);

console.dir(obj);
