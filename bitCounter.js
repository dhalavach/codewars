function bitCounter(n) {
  return n.toString(2).replace(/0/g, "").length;
}

console.log(bitCounter(7)); //3
console.log(bitCounter(6)); //2
console.log(bitCounter(15)); //4
console.log(bitCounter(8)); //1
