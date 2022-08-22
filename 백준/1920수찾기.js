// 이분탐색
// let input = require('fs').readFileSync('/dev/stdin').toString()
let input =`5
4 1 5 2 3
5
1 3 7 9 5`

input = input.trim().split('\n')
input = input.map(a => a.split(" ").map(b => parseInt(b)))
const N = input[0]
const M = input[2]
const range = input[1]
const array = input[3]

range.sort((a, b) => a-b)
array.forEach(e => {
  let lt = 0
  let rt = N-1
  // const num = array[i]
  let answer = 0
  while (lt <= rt) {
    let mid = Math.floor((lt + rt)/2)
    if (e === range[mid]) {
      answer = 1
      break
    } else if (e > range[mid]) {
      lt = mid + 1
    } else if (e < range[mid]) {
      rt = mid - 1
    }
  }
  console.log(answer)
})