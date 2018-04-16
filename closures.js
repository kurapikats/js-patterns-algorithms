// closure - a function with preserved data
// note: javascript uses lexical scoping
// basic example of a closure
const add = num => inner => num + inner;

const hello = 'abc';

const addToFive = add(5); // 5 will be preserved
const total = addToFive(4);
console.log('total');
