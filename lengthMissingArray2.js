function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays) return 0;
  if (arrayOfArrays.length === 0) return 0;

  let sortedArray = arrayOfArrays
    .map((e) => (e === null ? 0 : e))
    .map((e) => e.length)
    .sort((x, y) => x - y);

  if (sortedArray.includes(0)) {
    return 0;
  }

  let i = sortedArray[0];
  let j = 0;
  while (j + i == sortedArray[j]) {
    j++;
  }
  return j + i;
}

console.log(getLengthOfMissingArray([]));
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ])
);
console.log(
  getLengthOfMissingArray([
    [4, 4, 1],
    [3, 2, 3, 1],
    [0, 4, 0, 4, 0],
    [4, 4, 0, 1, 2, 3, 0, 3],
    [4, 1, 4, 4, 1, 2, 4, 4, 2, 4, 2],
    [1, 3, 4, 4, 2, 4, 0],
    [2, 2, 0, 0, 1, 3, 3, 1, 3, 4, 1, 2],
    [1, 1, 4, 2, 4, 0, 0, 2, 0],
    [4, 0, 3, 1, 0, 3, 3, 4, 1, 1],
  ])
);
console.log(
  getLengthOfMissingArray([
    [],
    [4],
    [3, 0, 1, 1, 1, 3],
    [0, 1],
    [0, 0, 2, 3],
    [0, 3, 3, 1, 3],
  ])
);
