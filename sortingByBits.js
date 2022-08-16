function sortByBit(arr) {
  function bitCounter(n) {
    return n.toString(2).replace(/0/g, "").length;
  }

  function comparator(a, b) {
    return bitCounter(a) - bitCounter(b) == 0
      ? a - b
      : bitCounter(a) - bitCounter(b);
  }

  return arr.sort(comparator);
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a));
