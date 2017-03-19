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
/*
car2.manufacturer = 'Fiat';
car2.model = '500';
*/
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
