const Person = (name, age, location) => {
  const data = {
    name,
    age,
    location,
  };

  data.printPerson = () => {
    console.log(
      `Name: ${data.name}, Age: ${data.age}, Location: ${data.location}`,
    );
  };

  return data;
};

// factory pattern doesn't use 'new' keyword
const onin = Person("Onin", 35, "Makati");
const marebel = Person("Marebel", 34, "Roxas");
onin.printPerson();
marebel.printPerson();
