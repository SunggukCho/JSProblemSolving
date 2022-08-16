// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/2003.txt').toString().split(/\r?\n/)
const [N, M] = input[0].split(" ").map(a => parseInt(a));
const arr = [...input[1].split(" ").map(a => parseInt(a) )]

let answer = 0;
let lt = 0;
let rt = 0;
let sum = 0
// let cnt = 0
while (true) {
  sum = arr.slice(lt, rt).reduce((prev, curr) => prev + curr, 0)
  if (sum === M) {
    answer++
    sum = 0
    lt++
    rt = lt
  }
  if (sum > M) {
    lt++
    rt = lt
    sum = 0
  }
  if (sum < M) {
    if (rt >= N) {
      break
    }
    rt++
  }
}
console.log(answer)