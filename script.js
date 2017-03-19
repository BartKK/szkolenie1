// // Obiekt this
//
// var person = {
//   name: 'Piotr',
//   logName: function () {
//     console.log(person.name)
//   }
// };
//
// person.logName();
//
// //
//
//
// var person = {
//   name: 'Piotr',
//   logName: function () {
//     console.log(this.name)
//   }
// };
//
// person.logName();
//
//
// //

function allSayHello() {
  console.log(this.name)
}

var person1 = {
  name: 'Piter',
  sayHello: allSayHello
};

var person2 = {
  name: 'Karol',
  sayHello: allSayHello
};

var name = 'Kinga';

console.log(person1.sayHello()); // Piter
console.log(person2.sayHello()); // Karol
console.log(allSayHello());
