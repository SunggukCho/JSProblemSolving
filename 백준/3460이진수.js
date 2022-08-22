// https://www.acmicpc.net/problem/3460
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(item => parseInt(item));
let [T, ...testCases] = input;

for (let i = 0; i < T; i++) {
  let number = testCases[i]
  const binary = number.toString(2)
  const binaryArray = binary.split("").map(b => parseInt(b)).reverse()
  let answer = [];
  binaryArray.forEach((bin, index) => {
    if (bin === 1) answer.push(index)
  })
  const ans = answer.join(" ")
  console.log(ans)
}