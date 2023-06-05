const R = require('ramda');

const greet = R.curry((greeting, name) => `${greeting} ${name}`);

const formalGreeting = greet('I salute you sir, ');

const sarcasticGreeting = greet('hEllO, ');

console.log(formalGreeting('Pepe'));

console.log(sarcasticGreeting('Pepe'));