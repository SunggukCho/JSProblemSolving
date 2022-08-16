// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/2003.txt').toString().split(/\r?\n/)
const [N, M] = input[0].split(" ").map(a => parseInt(a));
const arr = [...input[1].split(" ").map(a => parseInt(a) )]

let answer = 0;
for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = 0; j < M; j++) {
    sum += arr[i+j]
    if (sum === M) {
      answer ++
      break
    }
    if (sum > M) break
  } 
}
console.log(answer)