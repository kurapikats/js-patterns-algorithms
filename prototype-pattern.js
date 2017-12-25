// use function expression, es2015 fat arrow won't work here
const Person = function () {

}

// we need to initialize default values
Person.prototype.name = 'no name'
Person.prototype.age = 0
Person.prototype.location = 'no location'
Person.prototype.printPerson = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`)
}

// we need to use 'new' keyword, this behaves like a class constructor
const onin = new Person()
onin.name = 'Onin'
onin.age = 35
onin.location = 'Makati'

const marebel = new Person()
marebel.name = 'Marebel'
marebel.age = 34
marebel.location = 'Roxas'

onin.printPerson()
marebel.printPerson()

// disadvantage: need's multiline to instantiate an object
// advantage: shared prototype member elements