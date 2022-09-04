function solution(input, markers) {
  let result = input.replace(/`${markers[0]}`/g, "");
  return result;
}

console.log(solution("asdf !", ["!"]));
