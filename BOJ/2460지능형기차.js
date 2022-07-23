// let input = require('fs').readFileSync('/dev/stdin').toString()
// let N = parseInt(input);

input = 
`0 32
3 13
28 25
17 5
21 20
11 0
12 12
4 2
0 8
21 0`

let arr = []
const a = input.split(" ").map(b => b.split("\n")).map((item) => arr.push(...item))
// a.map((item) => arr.push(...item))
const newArr = arr.map(item => parseInt(item))

let sum = 0;
let maxNum = 0;

for (let i = 0; i < newArr.length; i+=2) {
  const station = newArr[i+1]-newArr[i]
  sum += station
  if (sum > maxNum) maxNum = sum
}
console.log(maxNum)
