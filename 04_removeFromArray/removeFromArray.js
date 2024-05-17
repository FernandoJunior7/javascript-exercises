const removeFromArray = function(array, ...numbersToBeRemoved) {

  let otherArray = array.filter(number => !numbersToBeRemoved.includes(number));

  return otherArray;
};

// Do not edit below this line
module.exports = removeFromArray;
