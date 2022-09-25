function solution(maps) {
  var answer = -1;
  const [n, m] = [maps.length, maps[0].length] // 종착점 좌표 (n-1, m-1)
  const queue = [[0, 0, 1]];
  const newMaps = Object.assign(maps)

  BFS(n, m, queue, maps, newMaps)
  if (newMaps[n-1][m-1] !== 1) answer = newMaps[n-1][m-1]

  return answer;
}

function BFS(n, m, queue, maps, newMaps) {
  const dir = [[-1,0], [0, 1], [1, 0], [0, -1]]
  let flag = true
  while (flag && queue.length > 0) {
    const [x, y, z] = queue.shift();
    newMaps[x][y] = z
    // console.log('x y', x, y, newMaps)
    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0]
      const ny = y + dir[i][1]
      // console.log('nx ny origin',nx, ny, maps[x][y])
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && newMaps[nx][ny] === 1) {
        if (nx === n-1 && ny === m-1) {
          newMaps[nx][ny] = z+1
          flag = false
          break
        } else {
          queue.push([nx, ny, z+1])
        }
      }
    }
  }
}


console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])) // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])) // -1