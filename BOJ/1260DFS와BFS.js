
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let input = require('fs').readFileSync('./file/1260.txt').toString()
// let input = `4 5 1
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4`
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
let visited = []
let dfs = ""
let bfs = ""
function DFS(v, visited) {
  visited.push(v)
  dfs+= `${v} `
  for (let i = 0; i < N+1; i++) {
    if (G[v][i] === 1 && !visited.includes(i)) {
      DFS(i, visited)
    }
  }
}
let queue = []
let visitedBFS = []
function BFS(start, queue, visitedBFS) {
  queue.push(start)
  visitedBFS.push(start)
  while (queue.length) {
    let v = queue.shift()
    bfs+= `${v} `
    if (v === undefined) break
    for (let i = 0; i < N+1; i++) {
      if (G[v][i] === 1 && !visitedBFS.includes(i)) {
        console.log(v, i, queue, visitedBFS)
        queue.push(i)
        visitedBFS.push(i)
      }
    }
  }
}


DFS(V, visited)
BFS(V, queue, visitedBFS)
const dfsLen = dfs.length
const bfsLen = bfs.length
console.log(dfs.slice(0, dfsLen-1))
console.log(bfs.slice(0, bfsLen-1))