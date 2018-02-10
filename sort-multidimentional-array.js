// sort multidimentional array

let multiDArray = [[7, 8], [3, 4], [1, 2], [5, 6]];

multiDArray.sort((a, b) => {
  return a[0] - b[0];
});

console.log(multiDArray);
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
