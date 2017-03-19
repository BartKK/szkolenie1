// Modyfikacja this



function logNameAll(arg) {

  console.log(arg + ": " + this.name);
}

var person1 = {
  name: 'Piter'
};

var person2 = {
  name: 'Michel'
};

var name = 'Michelle';

logNameAll.call(this, 'global');
logNameAll.call(person1, 'person1');
logNameAll.call(person2, 'person2');
