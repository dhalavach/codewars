function catMouse(map, moves) {
  if (!(map.includes("C") & map.includes("m"))) {
    return "boring without two animals";
  } else {
    let catLocation = map.indexOf("C");
    let mouseLocation = map.indexOf("m");
    let cy = (map.substring(0, catLocation).match(/\n/g) || []).length;
    let my = (map.substring(0, mouseLocation).match(/\n/g) || []).length;

    let cx = catLocation - map.substring(0, catLocation).lastIndexOf("\n");
    let mx = mouseLocation - map.substring(0, mouseLocation).lastIndexOf("\n");

    //console.log(catLocation - map.substring(0, catLocation).lastIndexOf("\n"));

    //console.log("catlocation: ", catLocation, "mouselocation: ", mouseLocation);
    //console.log("cx: ", cx, "mx: ", mx);
    //console.log("cy: ", cy, "my: ", my);

    let distance = Math.abs(mx - cx) + Math.abs(cy - my);

    if (distance <= moves) {
      return "Caught!";
    } else {
      return "Escaped!";
    }
  }
}

//console.log(s1, s2, s3)

// let catLine = joinedMap.substring((catLocation - css * catLocation), )

//let cx = catLine.indexOf('C');

let map = "mC.....\n....\n.......";
let moves = 4;
console.log(catMouse(map, moves));
