let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
input = input.map(a => a.split(" ").map(b => parseInt(b)))
const [ rowAndHeight, blocks ] = input;
const length = blocks.length
let answer = 0

for (let i = 1; i < length; i++) {
  let lt = blocks.slice(0, i)
  let rt = blocks.slice(i, length+1)
  let leftMax = Math.max(lt.sort((a, b) => b-a)[0])
  let rightMax = Math.max(rt.sort((a, b) => b-a)[0])
  const current = blocks[i]
  const smaller = Math.min(leftMax, rightMax)
  if (current < smaller) {
    answer += smaller-current
  }
}
console.log(answer)