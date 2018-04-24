
// https://github.com/ghaiklor/advent-of-code-2015/blob/master/day-03/part-2/solution.js

console.time ('ch3');
const fs = require ('fs');
const inputs = fs.readFileSync('./d3-input.txt').toString().replace('\n','').split('');

const santaInputs = inputs.filter((val, i) => i % 2 === 0);
const robotInputs = inputs.filter((val, i) => i % 2 === 1);

const traverse = directions => {
  let visitedCoord = [ `0 x 0` ];
  let curPosition = { x: 0, y: 0 };
  
  directions.forEach (direction => {
    if (direction === '^')
      curPosition.y++;
    if (direction === 'v')
      curPosition.y--;
    if (direction === '>')
      curPosition.x++;
    if (direction === '<')
      curPosition.x--;

    visitedCoord.push (`${curPosition.x} x ${curPosition.y}`);
  });

  return visitedCoord;
};

const result = new Set (traverse (santaInputs).concat (traverse (robotInputs))).size;

console.log (result);
console.timeEnd ('ch3');
