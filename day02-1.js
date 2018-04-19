console.time ('ch2');
const fs = require ('fs');
const file = fs.readFileSync ('./d2-input.txt');
let inputs = file.toString ();

inputs = inputs.split('x');
inputs = inputs.toString().split("\n");

let arr1 = [];
for (let i = 0; i < inputs.length; i++) {
  arr1[i] = inputs[i].split (",");
}

let arr2 = new Array (arr1.length);
for (let i = 0; i < arr1.length; i++) {
  arr2[i] = new Array (arr1[i].length);
}

const compare = (a, b) => {
  return a - b;
}
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < 3; j++) {
    arr2[i][j] = Number (arr1[i][j]);
  }
  arr2[i].sort (compare);
}

const squareFeet = (e) => {
  return (2 * (e[0] * e[1] + e[0] * e[2] + e[1] * e[2])) + (e[0] * e[1]);
}

let sum = 0;
for (let i = 0; i < arr2.length-1; i++) {
  sum += squareFeet (arr2[i]);
}

console.log ('Total square feet of wrapping paper:', sum);
console.timeEnd ('ch2');
