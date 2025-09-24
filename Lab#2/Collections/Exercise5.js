'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contacts = [
    { name: "Вадим", phone: "+380972210347" },
    { name: "Олег", phone: "+380631112293" },
    { name: "Олексій", phone: "+380961112283" }
    { name: "Руслан", phone: "+380661112273" }
    { name: "Єгор", phone: "+380951112263" }
];

function findPhoneByName(name) {
    for (const c of contacts) {
        if (c.name === name) return c.phone;
    }
    return "Контакт не знайдено";
}

rl.question('Введіть ім’я для пошуку телефону: ', (name) => {
    console.log(findPhoneByName(name || "Вадим"));
    rl.close();
});
