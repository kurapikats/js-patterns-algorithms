// closure - a function with preserved data
// note: javascript uses lexical scoping
// basic example of a closure
const add = (num) => {
  return (inner) => {
    return num + inner
  }
}

const addToFive = add(5) // 5 will be preserved
const total = addToFive(4)
console.log(total)