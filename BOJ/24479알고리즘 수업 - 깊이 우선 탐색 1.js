// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = require('fs').readFileSync('./file/1260.txt').toString()

input = `5 5 1
1 4
1 2
2 3
2 4
3 4`

input = input.trim().split('\n')
input = input.map(a => a.split(" ").map(b => parseInt(b)))

console.log(input)

const [N, M, R] = input[0]
const rest = input.slice(1,)
let graph = Array.from({length: N+1}, ()=>[])
graph = graph.map(a => Array.from({ length: N+1}, ()=>0))

for (let i = 0; i < N; i++) {
  const [r, c] = rest[i]
  graph[r][c] = 1
  graph[c][r] = 1
}

for (let i = 1; i < N+1; i++) {
  const row = graph[i]
  const sum = row.reduce((prev, curr) => prev + curr, 0)
  if (sum > 0) {
    console.log(i)
  } else {
    console.log(0)
  }
}
