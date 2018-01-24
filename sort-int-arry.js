// sort array

let myArray = ['7', 8, '3', 4, '1', 2, 5, 6];

myArray.sort((a, b) => {
  return a - b;
});

myArray.sort();

console.log(myArray);
// [ '1', 2, '3', 4, 5, 6, '7', 8 ]
