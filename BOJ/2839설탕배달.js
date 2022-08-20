// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = `9`

const num = Number(input)
let share = Math.floor(input/5)
let remainder = num-5*share
let answer = 0;

while (share >= 0) {
  if (remainder % 3 === 0) {
    answer += remainder / 3
    break
  } else {
    share--
    remainder = num-5*share
  }
}
answer += share
console.log(answer)