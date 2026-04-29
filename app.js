const { multiply, divide } = require('./calculator.js');
const { welcomeMessage } = require('./message.js');

console.log(welcomeMessage());

// Example calculations
console.log("5 * 3 =", multiply(5, 3));
console.log("10 / 2 =", divide(10, 2));
