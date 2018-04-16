// currying - example #1
let avg = (...n) => {
  let total = n.reduce((total, num) => {
    return total + num;
  });
  return total / n.length;
};

let spiceUp = (fn, ...n) => {
  return (...m) => {
    return fn.apply(this, n.concat(m));
  };
};

let doAvg = spiceUp(avg, 1, 2, 3)(4, 5, 6);

console.log(doAvg);

////

// currying - example #2
let sayWhat = a => {
  return b => {
    return c => {
      console.log(`Saying ${a} to ${b} using ${c}`);
    };
  };
};

sayWhat("Hello")("Onin")("Javascript");
