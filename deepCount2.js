function deepCount(a) {
  function getNumberOfAllElements(a) {
    return a.flat(Infinity).length;
  }

  function getArrayDepth(a) {
    return Array.isArray(a) ? 1 + Math.max(0, ...a.map(getArrayDepth)) : 0;
  }
  return getArrayDepth(a) + getNumberOfAllElements(a) - 1;
}

let arr1 = [[[[[[[[[]]]]]]]]];
let arr2 = [1, 2, [3, 4, [5]]];
let arr3 = ["x", "y", ["z"]];

console.log(deepCount(arr1));
console.log(deepCount(arr2));
console.log(deepCount(arr3));
