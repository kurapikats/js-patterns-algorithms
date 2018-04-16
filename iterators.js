const numbers = [1, 2, 3, 4];

const iterator = numbers[Symbol.iterator]();

console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());
console.dir(iterator.next());
