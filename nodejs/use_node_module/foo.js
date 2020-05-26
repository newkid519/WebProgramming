const circle = require('./circle.js');
console.log(`The area of a circle of radius 1 is ${circle.exp(1)}`);

const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
