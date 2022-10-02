function solution(n) {
  var answer = 0;
  var dp = Array(n).fill(0)
  dp[0] = 1
  dp[1] = 2
  for(var i=2; i<n; i++){
      var a = dp[i-1] + dp[i-2]
      dp[i] = a %  1000000007
  }
  return dp[n-1];
}
console.log(solution(4))
console.log(solution(5))
console.log(solution(6))
console.log(solution(7))
console.log(solution(8))
console.log(solution(9))
console.log(solution(10))