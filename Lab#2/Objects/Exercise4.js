'use strict';

const constObj = { name: "Вадим" };
let varObj = { name: "Олег" };

constObj.name = "Єгор";
varObj.name = "Олексій";

varObj = { name: "Руслан" };

console.log(constObj, varObj);

function createUser(name, city) {
    return { name, city };
}

console.log(createUser("Вадим", "Київ"));
