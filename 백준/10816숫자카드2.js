// 이분탐색

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
input = input.trim().split('\n')
input = input.map(a => a.split(" ").map(b => parseInt(b)))
const N = input[0][0]
const M = input[2][0]
const range = input[1]
const sang = input[3]

range.sort();
const hashmap = new Map();

for (let i = 0; i < N; i++) {
  const target = range[i]
  if (hashmap.get(target)) {
    hashmap.set(target, hashmap.get(target)+1)
  } else {
    hashmap.set(target, 1)
  }
}
let answer = ""
for (let i = 0; i < M; i++) {
  if (hashmap.get(sang[i])) {
    answer += hashmap.get(sang[i]) + " "
  } else {
    answer += "0 "
  }
}
console.log(answer.slice(0, answer.length-1))
