// Obiekty - usuwanie wartości

var person = {
  name: 'asas'
};

console.log(person.name);

delete person.name;

console.log('name' in person);
console.log(person.name);
