// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = `2
6
12`
let [N, ...numbers] = input.toString().split("\n");
numbers = numbers.map(i => Number(i))
// F[N] = F[N - 1] + F[N - 5]
const baseArray = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9]
for (let i = 10; i <= 100; i++) {
  baseArray[i] = baseArray[i-2] + baseArray[i-3]
}
for (let num of numbers) {
  console.log(baseArray[num])
}