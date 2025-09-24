'use strict';

const phoneBook = {};
for (const c of [
    { name: "Вадим", phone: "+380962210347" },
    { name: "Олег", phone: "+380631112233" },
    { name: "Алексій", phone: "+380661112233" }
]) {
    phoneBook[c.name] = c.phone;
}

function findPhone(name) {
    return phoneBook[name] || "Контакт не знайдено";
}

console.log(findPhone("Вадим"));
console.log(findPhone("Алексій"));
