function solution(n) {
  var answer = 0;
  const memo = [0, 1]
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i-2]+memo[i-1]) % 1234567
  }
  answer = memo[n] 
  return answer;
}

console.log(solution(2)) 
console.log(solution(3)) // 2
console.log(solution(4)) // 3
console.log(solution(5)) // 5