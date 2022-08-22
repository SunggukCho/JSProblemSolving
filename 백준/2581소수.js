// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = `60
100`

input = input.split(/\r?\n/).map(a => parseInt(a))
const [start, end] = input

let minimum = Number.MAX_SAFE_INTEGER;
let sum = 0

for (let i = start; i <= end; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    if (i < minimum) minimum = i
    sum += i
  }
}
sum === 0 ? console.log(-1) : console.log(sum);
sum !== 0 && console.log(minimum)