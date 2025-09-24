'use strict';

const exercises = [
    { name: 'Exercise1.js', path: './Identifiers/Exercise1.js' },
    { name: 'Exercise2.js', path: './Loops/Exercise2.js' },
    { name: 'Exercise3.js', path: './Functions/Exercise3.js' },
    { name: 'Exercise4.js', path: './Objects/Exercise4.js' },
    { name: 'Exercise5.js', path: './Collections/Exercise5.js' },
    { name: 'Exercise6.js', path: './Collections/Exercise6.js' }
];

for (const ex of exercises) {
    console.log(`=== ${ex.name} ===`);
    try {
        require(ex.path);
    } catch (err) {
        console.error(`Помилка при підключенні ${ex.name}:`, err.message);
    }
}
