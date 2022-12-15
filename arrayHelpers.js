Array.prototype.square = function () {
  return this.map((e) => e * e);
};

Array.prototype.cube = function () {
  return this.map((e) => Math.pow(e, 3));
};

Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  return this.reduce((prev, curr) => prev + curr, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((prev, curr) => prev + curr, 0);
};

Array.prototype.even = function () {
  return this.filter((e) => e % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((e) => e % 2 !== 0);
};

// let arr = [1, 2, 3, 4];

// console.log(arr.square());
// console.log(arr.cube());
// console.log(arr.average());
// console.log(arr.odd());
