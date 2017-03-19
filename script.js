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


// literały wyrażeń regularnych

var numbers = /\d+/g;

var numbers2 = new RegExp('\\d+', 'g')


// dostęp do klucze

var arry = [];

array.push(234234);

var method = 'push';
array[method](13513);


//identyfikowanie typów referencyjnych

function add() {

    return a + b;

}

console.log(typeof add);


var item = [];
var obj = {};

console.log(item instanceof Array); //True
console.log(item instanceof Object); // True
console.log(obj instanceof Object); // True
console.log(obj instanceof Array); // False
console.log(add instanceof Function); // True
console.log(add instanceof Object); // True

console.log(Array.isArray(item));

//Typy opakowujące (primitive wrapper types)

// String, Number, boolean

var name = 'Bartek';
var firstCharacter = name.charAt(0);
console.log(firstCharacter);

// to co się dzieje w tle

var name1 = 'Marcin';
var temporary = new String(name1);
var firstCharacter1 = temporary.charAt(0);
temporary = null;
console.log(firstCharacter1);


//

var name = 'Grzesiek';
name.last = 'Kowalski';
console.log(name.last); // undefined

//

var name2 = 'Zosia';
var temp = new String(name2);
temp.last = 'Kowalska';
temp = null;
var temp = new String(name2);
console.log(temp.last); //undefined
temp = null;

//

var name3 = 'Genowefa';
var count = 10;
var found = false;

console.log(name3 instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

//

var name4 = new String('Genowefa');
var count1 = new Number(10);
var found1 = new Boolean(false);

console.log(typeof name4); //
console.log(typeof count1)
console.log(typeof found1)

//

var founded = new Boolean(false);

if(founded) {
  console.log('I found a variable!'); // to zostanie wyświetlone, bo sprawdza czy obiekt istnieje
} else{
console.log("I haven't found a variable!");

}



//



//Funkcje

// Właściwości typu Function - [[Call]]

// deklaracja funkcji
function add(3, 4) {
  return a + b;
  console.log(sum); //7
}


// wyrażenie funkcji
var result = add(3, 4);
console.log(result); //

var add = function(a, b) {
  return a + b;
}
