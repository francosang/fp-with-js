const R = require('ramda');

const sentence = "Abandon all hope";

const split = R.split;

const count = R.length;

const splitBySpace = split(' ');

const countWords = R.compose(count, splitBySpace);

console.log(countWords(sentence));