// https://www.codewars.com/kata/62eb800ba29959001c07dfee/javascript

function brightest(colors) {
  let brightestColorComponentsArray = colors.map((e) =>
    Math.max(
      parseInt(e.slice(1, 3), 16),
      parseInt(e.slice(3, 5), 16),
      parseInt(e.slice(5, 7), 16)
    )
  );

  let indexOfBrightestColor = brightestColorComponentsArray.indexOf(
    Math.max(...brightestColorComponentsArray)
  );

  return colors[indexOfBrightestColor];
}

//console.log(brightest(["#001000", "#000000"]));
//console.log(brightest(["#FFFFFF", "#123456", "#000000"]));
//console.log(brightest(["#00FF00", "#FFFF00"]));
