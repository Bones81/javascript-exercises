const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce( (sum, item) => {
    return sum += item
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product *= item, 1)
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
	let product = 1
  for (let i = num; i > 1; i--) {
    product *= i
  }
  return product
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
