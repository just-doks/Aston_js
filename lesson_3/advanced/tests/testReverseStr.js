const reverseStr = require('../reverseStr.js');
const fs = require('fs');
const path = require('path');

const tower = fs.readFileSync(path.resolve(__dirname, 'tower.txt')).toString();

console.log("The Tower Upright:")
console.log(tower);
console.log("\nThe Tower Reversed:")
console.log(reverseStr(tower));