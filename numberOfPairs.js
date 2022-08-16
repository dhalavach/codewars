function numberOfPairs(gloves) {
  let sortedGloves = gloves.slice(0).sort();
  let pairs = 0;
  for (let i = 0; i < sortedGloves.length; i++) {
    if (sortedGloves[i] === sortedGloves[i + 1]) {
      pairs++;
      i++;
    }
  }

  console.log(gloves);
  return pairs;
}

console.log(numberOfPairs(["red", "red", "red", "red"])); //2
console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
); //3
console.log(numberOfPairs(["red", "green", "blue"])); //0
