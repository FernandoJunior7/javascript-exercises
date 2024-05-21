const palindromes = function (string) {
  const stringWithoutPunctuation = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
  const stringWithoutSpaces = stringWithoutPunctuation.split(' ').join('');
  const charArray = stringWithoutSpaces.split('');
  const reversedArray = charArray.toReversed();
  const reversedString = reversedArray.join('');
  return stringWithoutSpaces === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
