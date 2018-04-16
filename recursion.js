// decompose the problem to small subset
// and repeat calling it
var factorial = function fac(num) {
  if (num === 1) {
    return 1;
  }

  return num * fac(num - 1);
};

var final = factorial(5);
console.log(final);
