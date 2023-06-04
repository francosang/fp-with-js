const R = require('ramda');
const { expect } = require('expect');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const countDigits = R.count(R.compose(Number.isInteger, parseInt));

const digits = countDigits(sentence);

console.log(digits);

expect(digits).toBe(7); 
