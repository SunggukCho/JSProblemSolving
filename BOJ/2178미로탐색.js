// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/2178.txt').toString().split(/\r?\n/)
const [N, M] = input.shift().split(" ").map(a => parseInt(a))
const newInput = input.map(i => i.split("").map(b => parseInt(b)))

let visited = Array.from({length: M}, ()=>Array(N).fill(0))
console.log(newInput)
console.log(visited)
function BFS (startX, startY, visited) {

}
BFS(0, 0, visited)