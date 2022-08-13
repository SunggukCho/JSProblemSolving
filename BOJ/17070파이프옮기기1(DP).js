// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/17070.txt').toString().split(/\r?\n/)
const [N, ...rest] = input
const array = rest.map(v => v.split(" ").map(a => parseInt(a)))
const dp = Array.from({length: 3}, ()=>Array.from({length: N}, ()=> Array.from({length: N}, ()=>0)))
// 0: RIGHT
// 1: DOWN
// 2: CROSS
dp[0][0][1] = 1 // 초기값 설정 (d, x, y)
let directions = {0: [0, 2], 1: [1, 2], 2: [0, 1, 2] }

for (let i = 2; i < N; i++) {
  if (array[0][i] === 0){
    dp[0][0][i] = dp[0][0][i-1]
  }
}

for (let r = 1; r < N; r++) {
  for (let c = 1; c < N; c++) {
    if (array[r][c] === 0 && array[r][c - 1] === 0 && array[r - 1][c] === 0) {
      // 대각
      dp[2][r][c] = dp[0][r - 1][c - 1] + dp[1][r - 1][c - 1] + dp[2][r - 1][c - 1]
    }
    if (array[r][c] === 0){
      // 가로
      dp[0][r][c] = dp[0][r][c - 1] + dp[2][r][c - 1]
      // 세로
      dp[1][r][c] = dp[1][r - 1][c] + dp[2][r - 1][c]
    }
  }
}
let answer = dp[0][N-1][N-1] + dp[1][N-1][N-1] + dp[2][N-1][N-1]
console.log(answer)