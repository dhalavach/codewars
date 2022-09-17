function find(object, path) {
  return path.split(".").reduce(function (prev, curr) {
    return prev && prev.hasOwnProperty(curr) ? prev[curr] : undefined;
  }, object);
}
