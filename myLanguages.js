function myLanguages(results) {
  let arrToSort = [];

  for (var e in results) {
    arrToSort.push([e, results[e]]);
  }

  let arrSorted = arrToSort.sort((x, y) => y[1] - x[1]);
  function cutOff(n) {
    if (n[1] >= 60) {
      return true;
    } else {
      return false;
    }
  }

  let result = arrSorted.filter(cutOff).map((e) => e[0]);

  return result;
}

let test = { Java: 10, Ruby: 80, Python: 65 };
console.log(myLanguages(test));
