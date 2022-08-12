// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/2178.txt').toString().split(/\r?\n/)
const [N, M] = input.shift().split(" ").map(a => parseInt(a))
const newInput = input.map(i => i.split("").map(b => parseInt(b)))

let visited = Array.from({length: N}, ()=>Array(M).fill(0))

const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]
function BFS (startX, startY) {
  let queue = []
  let level = 1;
  queue.push([startX, startY, level])
  while (queue.length > 0) {
    const [x, y, l] = queue.shift()
    visited[x][y] = l
    if (x === N-1 && y === M-1) {
      console.log(visited[N-1][M-1])
      break
    }
    for (let i = 0; i < 4; i ++) {
      // 4방 탐색
      const nx = x+dx[i]
      const ny = y+dy[i]
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; 
      if (newInput[nx][ny] === 1 && visited[nx][ny] === 0) {
        // true
        queue.push([nx, ny, l+1])
      }
    }
  }
}
BFS(0, 0)