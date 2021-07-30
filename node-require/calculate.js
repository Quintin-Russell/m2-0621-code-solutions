const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === "plus") {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log(num1 + num2);
} else if (process.argv[3] === "minus") {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log(num1 - num2);
} else if (process.argv[3] === "times") {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log(num1 * num2);
} else if (process.argv[3] === "divide") {
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[4]);
  console.log(num1 / num2);
};
