function duplicateEncode(word) {
  //let arr = word.split("").map((e) => e.charCodeAt(0));
  function check(e) {
    // let char = e.charCodeAt(0);
    let re = new RegExp(e, "g");
    if (word.match(re).length == 1) {
      return "(";
    } else {
      return ")";
    }
  }

  function escapeSpecialChars(c) {
    if (c == "(") {
      return "(";
    } else {
      return c;
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
//console.log(duplicateEncode("(( @"));
