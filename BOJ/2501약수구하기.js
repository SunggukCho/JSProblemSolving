// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// input = input.map((item) => parseInt(item));
const [ N, K ] = input;
let divisorList = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisorList.push(i)
  }
}
divisorList[K-1] !== undefined? console.log(divisorList[K-1]) : console.log(0)