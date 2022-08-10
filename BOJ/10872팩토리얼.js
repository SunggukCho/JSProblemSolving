let input = require('fs').readFileSync('/dev/stdin').toString()
// let input = require('fs').readFileSync('./file/10872.txt').toString()
const N = parseInt(input)

let memo = [1, 1]
function F(N) {
  if (memo[N] === undefined) {
    for (let i = 1; i < N; i++) {
      memo[i+1] = memo[i]*(i+1)
    }
    return memo[N]
  } else {
    return memo[N]
  }
}
let answer = F(N)
console.log(answer)
