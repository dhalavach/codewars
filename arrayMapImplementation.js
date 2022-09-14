Array.prototype.map = function (callback, context) {
  let result = new Array(this.length);
  for (let index = 0; index < this.length; index++) {
    if (!(index in this)) {
      result[index] = undefined;
    } else if (!(index === void 0)) {
      result[index] = callback.call(context, this[index], index, this);
    }
  }
  return result;
};
