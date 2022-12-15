class Cube {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return 6 * this.length ** 2;
  }
  get volume() {
    return this.length ** 3;
  }
  set surfaceArea(area) {
    this.length = Math.sqrt(area / 6);
  }
  set volume(vol) {
    this.length = Math.cbrt(vol);
  }
}
