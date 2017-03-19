// obiekty - wykrywanie właściwości

/* NIE TAK
var person = {
  number: 0
};

if (person.number) {
  console.log('true');

} else {
  console.log('false');
}
*/

/* TO JEST OKEJ
var person1 = {
  name: 'asdasd',
  age: 34
};

var person2 = {
  name: 'Jduasdas',
  age: 654
};

console.log('name' in person1); //true
console.log('age' in person2); //true
console.log('height' in person2); // false

*/

var person1 = {
  name: 'asdasd',
  logName: function () {
    console.log(this.name);
  }
};

console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));
console.log('toString' in person1);
console.log(person1.hasOwnProperty('toString'));
