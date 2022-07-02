// https://www.acmicpc.net/problem/17425
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(A) {
  let ans = 0;
  for (let i = 1; i <= A; i++) {
    ans += getAnswer(i)
  }
  return ans
}

function getAnswer(A) {
  let index = 1
  let sum = 0;
  while (index <= A/2) {
    if (A % index === 0) {
      sum += index;
    }
    index += 1
  }
  return sum+A
}

console.log(solution(70))