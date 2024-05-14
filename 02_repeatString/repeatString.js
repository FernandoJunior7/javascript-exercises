const repeatString = function(string, numberOfTimes) {
    let phrase = string;

    if (numberOfTimes === 0) {
      return '';
    }

    if (numberOfTimes < 0) {
      return 'ERROR';
    }

    for (let i = 1; i < numberOfTimes; i++) {
      phrase += string;
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
