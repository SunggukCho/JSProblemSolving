function solution(s) {
  var answer = '';
  const arr = s.split(" ").map(a => parseInt(a))
  arr.sort((a, b) => a-b)
  const [min, max] = [arr[0], arr[arr.length-1]]
  answer = String(min) + " " + String(max)
  return answer;
}

console.log(solution("1 2 3 4")) // "1 4"
console.log(solution("4 3 2 1")) // "1 4"
console.log(solution("-1 -2 -3 -4")) // "-4 -1"
console.log(solution("-1 -1")) // "-1 -1"