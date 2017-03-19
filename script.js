// literały obiektów i tablic

var car = {

  manufacturer: "Ford",
  model: "Mondeo"
};

var car1 = {
  'Manufacturer origin': "Ford",
  model: 'Mondeo'
};

var car2;

car2.manufacturer = 'Fiat';
car2.model = '500';

// literał tablic

var arr = ['red', 'green', 'blue'];
console.log(arr.[1]);


// literały wyrażeń regularnych

var numbers = /\d+/g;

var numbers2 = new RegExp('\\d+','g')
