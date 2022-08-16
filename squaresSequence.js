function squares(x, n) {
  let result = [];
  for (i = 0; i < n; i++) {
    result.push(Math.pow(x, Math.pow(2, i)));
  }
  return result;
}

console.log(squares(2, 5));
