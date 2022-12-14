Array.prototype.myReduce = function (callback /*, initialValue*/) {
  'use strict';
  if (this == null) {
    throw new TypeError('Array.prototype.reduce called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let t = Object(this),
    len = t.length,
    k = 0,
    value;
  if (arguments.length >= 2) {
    value = arguments[1];
  } else {
    while (k < len && !(k in t)) {
      k++;
    }
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    value = t[k++];
  }
  for (; k < len; k++) {
    if (k in t) {
      value = callback(value, t[k], k, t);
    }
  }
  return value;
};

let arr = [1, 2, 3];
function sum(a, b) {
  return a + b;
}
console.log(arr.myReduce(sum, 0));
