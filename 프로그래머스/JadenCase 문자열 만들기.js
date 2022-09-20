function solution(s) {
  let answer = s.split(" ").map(a => a.toLowerCase()).map(b => b.replace(/^[a-z]/, char => char.toUpperCase())).reduce((prev, curr) => prev+" "+curr)
  return answer;
}

console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))