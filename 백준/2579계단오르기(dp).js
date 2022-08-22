// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = `6
10
20
15
25
10
20`
steps = input.split("\n").map(a => parseInt(a))
const N = steps[0]
const dp =[];
dp[0]=0;
dp[1]=Math.max(0+steps[1],steps[1]);
dp[2]=Math.max(0+steps[2],steps[1]+steps[2]);
const visited = Array.from({length: N+1}, ()=>0);
for (let i = 3; i<=N; i++) {
  dp[i] = Math.max(dp[i-2]+steps[i], dp[i-3]+steps[i-1]+steps[i])
}

console.log(dp[N])