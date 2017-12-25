var Person = function (name, age, location) {
	var data = {}
  data.name = name
  data.age = age
  data.location = location

  data.printPerson = function () {
  	console.log('Name: ' + data.name + ', Age: ' + data.age + ', Location: ' +  data.location)
  }

  return data
}

var person1 = Person('Onin', 35, 'Makati')
var person2 = Person('Marebel', 34, 'Roxas')
person1.printPerson()
person2.printPerson()