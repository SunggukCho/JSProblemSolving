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

const [N, M, R] = input[0]
const rest = input.slice(1,)
let graph = Array.from({length: N+1}, ()=>[])
for (let i = 0; i < N; i++) {
  const [r, c] = rest[i]
  graph[r].push(c)
}
for (let i = 0; i <= N; i++) {
  graph[i].sort()
}

let visited = []
let order = Array.from({length: N+1}, () => 0)
let index = 1;
function DFS(v) {
  const row = graph[v]
  if (visited.includes(v)) {
    return
  } else {
    visited.push(v)
    order[v] = index
    index ++
    row.forEach(node => {
      if (!visited.includes(node)) DFS(node)
    })      
  }
}
DFS(R)
for (let i = 1; i <= N; i++) console.log(order[i])