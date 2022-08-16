function explode(s) {
  let result = s
    .split("")
    .map((e) => count(e))
    .join("");

  function count(e) {
    let arr = [];
    let n = Number(e);
    let i = Number(e);

    while (i > 0) {
      arr.push(n);
      i--;
    }
    return arr.join("");
  }

  return result;
}

console.log(explode("312"));
