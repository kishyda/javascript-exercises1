const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum1 = 0;
  for (let nums in array) {
    sum1 += nums;
  }
  return sum1;
};

const multiply = function (array) {
  let product = 1;
  for (let nums in array) {
    product *= nums;
  }
  return product;
};

const power = function (base, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result += base;
  }
  return result;
};

const factorial = function (index) {
  let result = 1;
  for (let i = 1; i <= index; i++) {
    result *= i;
  }
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
