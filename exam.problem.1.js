/**
 * Problem: create a function sum()
 * param iteration isn't allowed
 * sum(1,2,6) should return 6
 * sum() should return 0
 * allowed param value are from -200000 to 200000
 */
function sum() {
  // spread ...args are better, but the exam requires this
  let args = Array.prototype.slice.call(arguments);

  // this can be removed since .reduce will return 0 on empty args
  // but at least it's faster because it won't process the data below
  if (!args.length) {
    return 0;
  }

  // only include args in this range
  let validated = args.filter((arg, i) => {
    if (arg >= -200000 && arg <= 200000) {
      return (arg += parseInt(i));
    }
  });

  // the total sum, this will return 0 on undefined arguments
  let result = validated.reduce((arg, i) => {
    return (arg += i);
  }, 0);

  return result;
}
