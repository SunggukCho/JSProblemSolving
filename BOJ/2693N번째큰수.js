// https://www.acmicpc.net/problem/2693

let input = require('fs').readFileSync('./file/2693.txt').toString();
// let input = require('fs').readFileSync('/dev/stdin').toString();

input = input.split(/\r?\n/)

const [T, ...rest] = input
const array = rest.map(v => v.split(" ").map(a => parseInt(a)))
array.forEach(arr => {
  const sortedArr = arr.sort((a, b) => a-b);
  console.log(sortedArr[7])
})