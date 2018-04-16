/**
 * Problem 2:
 * Create a function named greaterpart
 * that accepts float
 * greaterpart(32.43) // should return 43
 * greaterpart(332.43) // should return 332
 */
let greaterpart = num => {
  if (typeof num === "number") {
    let data = num
      .toString()
      .split(".")
      .map(i => parseInt(i));

    return Math.max(...data);
  }
};

console.log(greaterpart(12.2));
