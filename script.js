// obiekty - działania modyfikacje

var person1 = {
  name: 'Paweł'
};

var person2 = new Object();

// dodanie [[Put]]
person2.name = 'Beata';
person1.age = 22;
person2.age = 33;

// modyfikacji
person1.name = 'Grześ';
person2.name = 'Rafał';
