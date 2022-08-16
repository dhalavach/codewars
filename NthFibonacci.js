function nthFibo(n) {
  if (n == 1) return 0;
  var num = n - 2;
  function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fibonacci(num);
}

console.log(nthFibo(2));
