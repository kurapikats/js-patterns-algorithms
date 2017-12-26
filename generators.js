// generator - a function that pauses
// it remembers it's state

// generator example #1
function *generator() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}

let iterator = generator()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

////////////////////////////////////////////////////////////////////////////////

// generator example #2
// it stops on 'return'
function *generator2() {
  yield 1
  yield 2
  yield 3
  return 'Hello World'
  yield 4
}

let iterator2 = generator2()

console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())