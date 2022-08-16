const deepCount = (arr = []) => {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
};

let arr1 = [[[[[[[[[]]]]]]]]];
let arr2 = [1, 2, [3, 4, [5]]];
let arr3 = ["x", "y", ["z"]];

console.log(deepCount(arr1));
console.log(deepCount(arr2));
console.log(deepCount(arr3));
