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
let order = Array.from({length: N+1}, ()=>0)

function BFS(R) {
  let queue = []
  queue.push(R)
  let index = 1
  order[R] = index
  while(queue.length > 0) {
    const node = queue.shift()
    if (!visited.includes(node)) {
      visited.push(node)
      order[node] = index
      index++
    } 
    graph[node].forEach(a => {
      queue.push(a)
    })
  }
}
BFS(R)
for (let i = 1; i <= N; i++) console.log(order[i])