function nthFibo(n) {
  if (n == 1) return 0;
  var num = n - 2;

  function fibonacci(num, cache) {
    cache = cache || {};
    if (cache[num]) return cache[num];
    if (num <= 1) return 1;
    return (cache[num] = fibonacci(num - 1, cache) + fibonacci(num - 2, cache));
  }

  return fibonacci(num);
}

console.log(nthFibo(4));
