let input = require('fs').readFileSync('/dev/stdin')
input = input.toString().split('\n')
const [N, stringArr] = input;
const arr = stringArr.split(" ").map(item => parseInt(item)).sort((a, b) => a-b)
console.log(`${arr[0]} ${arr[N-1]}`)