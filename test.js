// optionalPow(50, 50);

// function optionalPow(a, b) {
//   // if (!(a >= -50 && a <= 50 && b >= -50 && b <= 50)) {
//   //   return;
//   // }

//   let arguments = Array.prototype.slice.call(arguments);
//   let validated = arguments.filter((arg, i) => {
//     if (arg >= -200000 && arg <= 200000) {
//       return (arg += parseInt(i));
//     }
//   });

//   console.log('go');

//   // if (confirm('optionalPow')) {
//   if (true) {
//     optionalPow = a ** b;
//   } else {
//     optionalPow = b ** a;
//   }
//   return optionalPow;
// }

// let greaterpart = num => {
//   if (num) {
//     let right = parseInt((num % 1).toFixed(2).substring(2));
//     let left = Math.floor(num).toFixed();
//     console.log(left > right ? left : right);
//   }
// };

// console.log(greaterpart(32.45));
