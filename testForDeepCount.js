function getNumberOfAllElementsReducer(a) {
  let fa = a.reduce(
    (acc, curr) =>
      acc.concat(Array.isArray(curr) ? getNumberOfAllElements(curr) : curr),
    []
  );
  return fa.length;
}

function* getNumberOfAllElementsGen(a) {
  for (const val of a) {
    Array.isArray(val) ? yield* getNumberOfAllElements(val) : yield val;
  }
}
let elementCount = [...getNumberOfAllElementsGen(a)].length;

function deepCount(a) {
  return a.flat(Infinity).length;
}

function getArrayDepth(a) {
  return Array.isArray(a) ? 1 + Math.max(0, ...a.map(getArrayDepth)) : 0;
}

let arr1 = [[[[[[[[[]]]]]]]]]; //8
let arr2 = [1, 2, [3, 4, [5]]]; //7
let arr3 = ["x", "y", ["z"]]; //4

console.log(getNumberOfAllElements(arr3));
console.log(deepCount(arr3));
