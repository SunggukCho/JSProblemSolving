// let input = require('fs').readFileSync('/dev/stdin').toString()
// let N = parseInt(input);

let input = require('fs').readFileSync('/dev/stdin').toString()

let arr = []
const a = input.split(" ").map(b => b.split("\n")).map((item) => arr.push(...item))
const newArr = arr.map(item => parseInt(item))

let sum = 0;
let maxNum = 0;

for (let i = 0; i < newArr.length; i+=2) {
  const station = newArr[i+1]-newArr[i]
  sum += station
  if (sum > maxNum) maxNum = sum
}
console.log(maxNum)
