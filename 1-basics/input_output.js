const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is Your Name? ', (name) => {
    console.log('Hello ' + name + '!');
    rl.close(); 
});