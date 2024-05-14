const reverseString = function(string) {
    const chars = string.split('');

    chars.reverse();

    return chars.join('');
};

// Do not edit below this line
module.exports = reverseString;
