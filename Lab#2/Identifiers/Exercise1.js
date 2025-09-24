'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greet(name) {
    console.log(`Привіт, ${name}!`);
}

rl.question('Як вас звати? ', (name) => {
    greet(name || "Вадим");
    rl.close();
});
