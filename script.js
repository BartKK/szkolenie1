function keys() {
var arrKeys = []
var key;
for(key in obj) {
  if(obj.hasOwnProperty(key)){
    arrKeys.push(key)
  }
}
return arrKeys;
}

var obj = {
red: 'red',
  green: 'green',
  blue: 'blue'
}

console.log(keys(obj)); //['red', 'green', 'blue']
