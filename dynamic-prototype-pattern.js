// use function expression, es2015 fat arrow won't work here
const Person = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  if (typeof this.printPerson !== "function") {
    Person.prototype.printPerson = () => {
      console.log(
        `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`,
      );
    };
  }
};

// we need to use 'new' keyword, this behaves like a class constructor
const onin = new Person("Onin", 35, "Makati");
const marebel = new Person("Marebel", 34, "Roxas");
onin.printPerson();
marebel.printPerson();
