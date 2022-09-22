/**
 * 점화식 DP[n] = DP[n-1] + DP[n-2]
 */
function solution(n) {
  const memo = [0, 1, 2]
  if (n >= 2) {
    for (let i = 3; i <= n; i++) {
      memo[i] = (memo[i-1]+memo[i-2]) % 1234567
    }
  }
  return memo[n] ;
}


console.log(solution(3)) // 3
console.log(solution(4)) // 5
console.log(solution(5)) // 3
console.log(solution(6)) // 3
console.log(solution(7)) // 3