function calculate(a, b) {
  let x = Array.from(arguments).reduce((x, y) => x + y, 0);

  return function (...b) {
    return x + b.reduce((x, y) => x + y, 0);
  };
}

console.log(calculate(1, 2)(2, 3, 4)); //12
console.log(calculate(2, 4)(3, 7, 1)); //17
console.log(calculate(1, 1)(1, -1)); //2
console.log(calculate(1)(3)); //4
