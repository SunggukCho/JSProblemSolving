// https://www.acmicpc.net/problem/1978

let input = require('fs').readFileSync('./file/1978.txt').toString().split(/\r?\n/);
// let input = require('fs').readFileSync('/dev/stdin').toString();

const [T, ...rest] = input
const array = rest[0].split(" ").map(a => parseInt(a))
const primes = []
array.forEach(v => {
  let count = 0;
  for (let i = 2; i < v; i++) {
    if (v % i === 0) count++
  }
  if (v >= 2 && count === 0) primes.push(v)
})
console.log(primes.length)