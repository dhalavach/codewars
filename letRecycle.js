function recycle(array) {
  let paper = [];
  let glass = [];
  let organic = [];
  let plastic = [];

  for (let e of array) {
    switch (e.material) {
      case "paper":
        paper.push(e.type);
        break;
      case "glass":
        glass.push(e.type);
        break;
      case "organic":
        organic.push(e.type);
        break;
      case "plastic":
        plastic.push(e.type);
        break;
    }
    switch (e.secondMaterial) {
      case "paper":
        paper.push(e.type);
        break;
      case "glass":
        glass.push(e.type);
        break;
      case "organic":
        organic.push(e.type);
        break;
      case "plastic":
        plastic.push(e.type);
        break;
    }
  }

  return [paper, glass, organic, plastic];
}

let x = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(recycle(x));

/*
best solution from codewars - for reference

const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}
*/
