// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/15961.txt').toString().split(/\r?\n/)
const [ first, ...rest] = input
const [N, d, k, c] = first.split(" ").map(a => parseInt(a));
const arr = rest.map(a => parseInt(a))

let [lp, rp] = [0, 0]
let answer = 0

while (lp !== N) {
  rp = lp + k
  const comb = new Set();
  let addable = true
  for (let i = lp; i < rp; i++) {
    const remainder = i % N
    comb.add(arr[remainder])
    if (arr[remainder] === c) {
      addable = false
    }
  }
  let cnt = comb.size
  if (addable) cnt += 1
  answer = Math.max(answer, cnt)
  lp += 1
}
console.log(answer)