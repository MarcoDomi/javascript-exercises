const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, curr) =>{return total + curr;},0);
};

const multiply = function (arr) {
  return arr.reduce((total, curr) => {return total * curr;}, 1);
};

const power = function (base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++)
    result *= base;

  return result;
};

const factorial = function (fact) {
  let result = 1;
  for (let i = fact; i > 1; i--)
    result *= i;

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
