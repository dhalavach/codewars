const sum = (...args) => {
  return args.reduce((a, b) => a + b);
};

const decorator = (fn) => {
  return function (...args) {
    const valid = args.every((arg) => arg >= 0);
    if (!valid) {
      throw new TypeError("negative argument!");
    }
    return fn(...args);
  };
};

validSum = decorator(sum);
console.log(validSum(2, 3));
