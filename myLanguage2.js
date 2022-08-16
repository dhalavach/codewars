function myLanguages(results) {
  let arrToSort = [];

  for (let [key, value] of Object.entries(results)) {
    if (value >= 60) {
      arrToSort.push(key, value);
    }
  }

  console.log(arrToSort);

  arrToSort.sort((x, y) => y - x);

  function cutOff(n) {
    if (n >= 60) {
      return true;
    } else {
      return false;
    }
  }

  let result = arrToSort.filter(cutOff);

  return result;
}

let test = { Java: 10, Ruby: 80, Python: 65 };
console.log(myLanguages(test));
