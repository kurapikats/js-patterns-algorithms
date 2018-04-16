console.log(mostFrequent());

function mostFrequent() {
  let myArray = [1, 3, 1, 3, 2, 1];
  let result = myArray.map((num, idx) => {
    return idx;
  });
  console.log(result);
}
