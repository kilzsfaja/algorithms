// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
function counter(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositives++;
    }
    return countPositives;
  }
}

console.log(counter(numbers));
console.log("there are " + countPositives + " positive values");
