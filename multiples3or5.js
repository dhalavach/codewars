function solution(number) {
  if (number < 0) return 0;
  i = 0;
  result = 0;
  while (i < number) {
    if (!(i % 3) || !(i % 5)) {
      result += i;
      i++;
    } else {
      i++;
    }
  }
  return result;
}
