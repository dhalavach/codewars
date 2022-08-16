function catMouse(map, moves) {
  let lines = map.match(/\n/g).length + 1;
  console.log(lines);

  // let joinedMap = map.replace(/\n/g, '');

  //    let catLocation = joinedMap.indexOf('C');
  //  let mouseLocation = joinedMap.indexOf('m');

  // let css = Math.floor(catLocation / oneLine);
  //let mss = Math.floor(mouseLocation / oneLine);
  function checkLine(e) {
    if (e.includes("C") & e.includes("m")) {
      let trimmedLine = map.replace(/^\.+|\.+$/g, "");
      let linearDistance = trimmedLine.match(/\./g).length;
      if (linearDistance <= moves) {
        return "Caught!";
      } else {
        return "Escaped!";
      }
    }
  }

  if (!(map.includes("C") & map.includes("m"))) {
    return "boring without two animals";
  } else {
    return map.split("\n").map((e) => checkLine(e));
  }

  let catLocation = map.indexOf("C");
  let mouseLocation = map.indexOf("m");
  let cy = map.substring(0, catLocation).match(/\n/g).length; //NB
  let my = map.substring(0, mouseLocation).match(/\n/g).length;

  //console.log(s1, s2, s3)

  // let catLine = joinedMap.substring((catLocation - css * catLocation), )

  //let cx = catLine.indexOf('C');

  let distance = Math.abs(mx - cx) + Math.abs(cy - my);

  if (distance <= moves) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

let map = "C....m..\n........\n........";
let moves = 4;
console.log(catMouse(map, moves));
