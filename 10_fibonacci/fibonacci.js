const fibonacci = function(nPos) {
  nPos = Number(nPos);

  if (nPos < 0) {
    return 'OOPS';
  }

  if (nPos === 0) {
    return 0;
  }

  if (nPos === 1 || nPos === 2) {
    return 1;
  }

  return (fibonacci(nPos - 1) + fibonacci(nPos - 2));
};

// Do not edit below this line
module.exports = fibonacci;
