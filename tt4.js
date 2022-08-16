function catMouse(map, moves) {
  let joinedMap = map.replace(/\n/g, "");

  if (!(joinedMap.includes("C") & joinedMap.includes("m"))) {
    return "boring without two animals";
  } else {
    let s1 = joinedMap.substring(0, 8);
    let s2 = joinedMap.substring(9, 17);
    let s3 = joinedMap.substring(18, 26);
    //console.log(s1, s2, s3)

    let cx = 0;
    let cy = 0;
    let mx = 0;
    let my = 0;

    if (s1.includes("C")) {
      cx = s1.indexOf("C");
      cy = 3;
    } else if (s2.includes("C")) {
      cx = s2.indexOf("C");
      cy = 2;
    } else {
      cx = s3.indexOf("C");
      cy = 1;
    }

    if (s1.includes("m")) {
      mx = s1.indexOf("m");
      my = 3;
    } else if (s2.includes("m")) {
      mx = s2.indexOf("m");
      my = 2;
    } else {
      mx = s3.indexOf("m");
      my = 1;
    }

    //console.log(cx, cy, mx, my)

    let distance = Math.abs(mx - cx) + Math.abs(cy - my);

    if (distance <= moves) {
      return "Caught!";
    } else {
      return "Escaped!";
    }
  }
}

let map = "..C...................m....";
let moves = 3;
console.log(catMouse(map, moves));
