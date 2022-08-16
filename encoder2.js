function duplicateEncode(word) {
  let charString = word
    .split("")
    .map((e) => e.charCodeAt(0))
    .join("");

  function check(e) {
    let char = e.charCodeAt(0);
    let re = new RegExp(char, "g");
    //console.log(re);
    let matchCount = charString.match(re) || 0;
    if (matchCount.length == 1) {
      return "(";
    } else {
      return ")";
    }
  }

  let result = word
    .toLowerCase()
    .split("")
    .map((e) => check(e))
    .join("");
  return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("(( @"));
