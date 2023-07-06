var numbers = [3,56,2,48,5]

//First Example

const square = numbers.map( x => x * x)

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

const double = numbers.map( x => x * 2)

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const lessTen = numbers.filter(num => num < 10)

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

const accumulate = numbers.reduce((accumulator, currentNumber) => accumulator+currentNumber)

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const greaterTen = numbers.find(num => num > 10)

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const indexGreaterTen = numbers.findIndex(num => num > 10)