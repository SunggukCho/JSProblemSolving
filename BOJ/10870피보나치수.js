// https://www.acmicpc.net/problem/10870

let input = require('fs').readFileSync('/dev/stdin').toString()
let N = parseInt(input);
let memo = [0, 1];
for (let i = 2; i <= N; i++) {
  memo[i] = memo[i-2] + memo[i-1]
}
console.log(memo[N])