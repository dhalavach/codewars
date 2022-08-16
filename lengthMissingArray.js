function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length === 0) return 0;
  let sortedArray = arrayOfArrays.map((e) => e.length).sort((x, y) => x - y);
  sortedArray.forEach((element, i) => {
    if (element[i] !== element[i + 1] + 1) {
      return element[i] + 1;
    } else {
      return 0;
    }
  });
}

console.log(getLengthOfMissingArray([]));
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
