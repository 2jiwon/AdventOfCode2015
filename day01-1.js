console.time ('ch1');
const fs = require ('fs');
const file = fs.readFileSync ('./d1-input.txt');
const inputs = file.toString ();
let floor = 0;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === '(') {
    floor++;
  } else if (inputs[i] === ')') {
    floor--;
  }
}

console.log ('current floor', floor);
console.timeEnd ('ch1');
