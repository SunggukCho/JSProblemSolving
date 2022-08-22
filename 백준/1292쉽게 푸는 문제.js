// https://www.acmicpc.net/problem/1292

// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = "3 7"
input = input.split(" ")
const [start, end] = input
const array = []

for (let i = 1; i <= end; i++) {
  for (let j = 0; j < i; j++) {
    array.push(i)
  }
}
let sum = 0
for (let i = start-1; i < end; i++) {
  sum+=array[i]
}
console.log(sum)