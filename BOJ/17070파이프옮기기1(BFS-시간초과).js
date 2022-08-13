// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/17070.txt').toString().split(/\r?\n/)
const [N, ...rest] = input
const array = rest.map(v => v.split(" ").map(a => parseInt(a)))
const visited = Array.from({length: N}, ()=> Array.from({length: N}, ()=>0))
visited[0][0] = 1
visited[0][1] = 1
let currDIR = "RIGHT" // "DOWN" | "CROSS"
const goRight = (x, y) => [x, y+1, "RIGHT"]
const goDown = (x, y) => [x+1, y, "DOWN"]
const goCross = (x, y) => [x+1, y+1, "CROSS"]
const possible = {
  RIGHT: [goRight, goCross],
  DOWN: [goDown, goCross],
  CROSS: [goRight, goCross, goDown],
}
function DP(startX, startY, startDir) {
  let queue = [];
  queue.push([startX, startY, startDir]);
  while (queue.length > 0) {
    const [x, y, dir] = queue.shift();
    const possibleDir = possible[dir]
    possibleDir.forEach((pDir) => {
      const [nx, ny, ndir] = pDir(x, y)
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && array[nx][ny] === 0) {
        if (ndir === "CROSS") {
          if (array[x][ny]===0 && array[nx][y] === 0) {
            visited[nx][ny] = visited[nx][ny]+1
            queue.push([nx, ny, ndir])
          }
        } else {
          visited[nx][ny] = visited[nx][ny]+1
          queue.push([nx, ny, ndir])
        }
      }
    })
  }
}
DP(0, 1, currDIR)
console.log(visited[N-1][N-1])
