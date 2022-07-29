// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = `2
5 6
0 0 1 0`

const [T, numbers, operators] = input.split(/\r?\n/)

function calc (operator, prev, curr) {
  if (operator === 0) {
    return prev+curr
  }
  if (operator === 1) {
    return prev-curr
  }
  if (operator === 2) {
    return prev*curr
  }
  if (operator === 3) {
    if (prev*curr < 0) {
      return Math.floor(prev/curr*(-1))
    } else {
      return Math.floor(prev/curr)
    }
  }
}

const length = numbers.length
let index = 0
let curr = 0
let answer = 0

for (let i = 0; i < length; i++) {
  curr = numbers[i]
  
}
