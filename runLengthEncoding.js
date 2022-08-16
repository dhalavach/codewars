var runLengthEncoding = function (str) {
  let result = [];

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      let counter = 1;
      while (str.charAt(i) === str.charAt(i + 1)) {
        counter++;
        i++;
      }

      result.push([counter, str.charAt(i)]);
    } else {
      result.push([1, str.charAt(i)]);
    }
  }
  return result;
};

console.log(runLengthEncoding("aaaz"));
