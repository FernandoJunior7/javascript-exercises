const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
	return numbers.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  if (number === 1) {
    return number * 1;
  }

  return number * factorial(number - 1);
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
