console.time ('ch3');
const fs = require ('fs');
const inputs = fs.readFileSync('./d3-input.txt').toString().replace('\n', '').split('');

let coordinates = new Set().add(`0 x 0`);

inputs.reduce((position, direction) => {

  let newPosition = {};

  switch (direction) {
    case '^': 
      newPosition = { x: position.x,     y: position.y + 1 };
      break;
    case 'v':
      newPosition = { x: position.x,     y: position.y - 1 };
      break;
    case '>':
      newPosition = { x: position.x + 1, y: position.y };
      break;
    case '<':
      newPosition = { x: position.x - 1, y: position.y };
      break;
  }

  coordinates.add (`${newPosition.x} x ${newPosition.y}`);

  return newPosition;
}, { x: 0, y: 0 });

console.log (coordinates.size);
console.timeEnd ('ch3');
