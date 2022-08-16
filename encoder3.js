//final version of Duplicate Encoder kata from Codewars

function duplicateEncode(word) {
  let charArr = word.split("");

  let dublicates = charArr.filter(
    (item, index) => charArr.indexOf(item) !== index
  );

  function check(e) {
    if (dublicates.includes(e)) {
      return ")";
    } else {
      return "(";
    }
  }

  let result = charArr.map(check).join("");

  return result;
}
