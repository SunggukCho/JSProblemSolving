// https://www.acmicpc.net/problem/9461
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
[N, ...numbers] = input;
N = Number(N)
numbers = numbers.map(i => Number(i))

// P(N) = P(N-1) + P(N-2)
const baseArray = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9]

function dp(number) {
  if (baseArray[number]) {
    return baseArray[number]
  }
  return baseArray[number-1] + baseArray[number-5]
}

for (let i = 0; i < N; i++) {
  console.log(dp(numbers[i]))
}