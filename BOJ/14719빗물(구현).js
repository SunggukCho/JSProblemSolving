
// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = `4 8
3 1 2 3 4 1 1 2`
input = input.toString().split(/\r?\n/).map(a => a.split(" ").map(b => parseInt(b)))
const [ rowAndHeight, blocks] = input;
const length = blocks.length

let left = blocks[0]
let right = 0;
let min = Number.MAX_SAFE_INTEGER
let answer = 0;

for (let i = 1; i <length; i++) {
  if (blocks[i] <= min) {
    min = blocks[i]
  } else {
    right = blocks[i]
  }
  console.log(min, right)
  if (blocks[i] < left) {

    answer += left - blocks[i]
    // console.log(i, left, blocks[i], answer)
  } else {
    left = blocks[i]
    min = Number.MAX_SAFE_INTEGER
  }
}
console.log(answer)