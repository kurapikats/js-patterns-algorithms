// use function expression, es2015 fat arrow won't work here
const Person = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  this.printPerson = () => {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`,
    );
  };

  // we don't need to return anything unlike factory-pattern
};

// we need to use 'new' keyword, this behaves like a class constructor
const onin = new Person("Onin", 35, "Makati");
const marebel = new Person("Marebel", 34, "Roxas");
onin.printPerson();
marebel.printPerson();

// the problem with constructor-pattern is that everytime you create a new instance
// it copies all of it's member elements to the new object
