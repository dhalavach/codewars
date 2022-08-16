function calc(x) {
  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    if (x.charCodeAt(i).toString().includes("7")) {
      counter += x.charCodeAt(i).toString().match(/7/g).length;
    }
  }

  return counter * 6;
}

console.log(calc("A"));
