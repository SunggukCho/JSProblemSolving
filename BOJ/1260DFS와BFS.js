const { getEnabledCategories } = require("trace_events");

// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = `4 5 1
1 2
1 3
1 4
2 4
3 4`
input = input.split(/\r?\n/).map(a => a.split(" "))
const [firstrow, ...graph] = input;
const [N, M, V] = firstrow.map(a => parseInt(a))
const nodes = graph.map(edge => edge.map(e => parseInt(e)))

let G = Array.from(Array(N+1), ()=> new Array(N+1).fill(0))
nodes.forEach(node => {
  const [a, b] = node
  G[a][b] = 1
  G[b][a] = 1
})
console.log(G)
let visited = []
function DFS(v, visited) {
  visited.push(v)
  console.log(v)
  for (let i = 0; i < N+1; i++) {
    if (G[v][i] === 1 && !visited.includes(i)) {
      DFS(i, visited)
    }
  }
}
DFS(V, visited)