Array.prototype.filter = function (callback, context) {
  const result = [];
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(context, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};
