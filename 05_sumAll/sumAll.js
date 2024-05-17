const sumAll = function(min, max) {
  let sum = 0;

  if (min < 0 || max < 0 ) return "ERROR";

  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

  if (min > max) {
    const tmp = max;
    max = min;
    min = tmp;
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }


  return sum;
};

// Do not edit below this line
module.exports = sumAll;
