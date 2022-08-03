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

function DFS(v) {
  
}
function BFS(v) {

}