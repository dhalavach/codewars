//TODO fix sparse arrays bug and context handling

Array.prototype.map = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};
