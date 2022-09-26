// BFS에서 큐에 넣을때 바로 방문처리를 해야 다시 그 노드를 큐에 추가하지 않는다. 이게 효율성을 잡아준다.
// https://school.programmers.co.kr/questions/23794

function solution(maps) {
  var answer = -1;
  const [n, m] = [maps.length, maps[0].length] // 종착점 좌표 (n-1, m-1)
  const queue = [[0, 0, 1]];

  const dir = [[-1,0], [0, 1], [1, 0], [0, -1]]
  while (queue.length > 0) {
    const [x, y, z] = queue.shift();
    maps[x][y] = z
    if (x === n-1 && y === m-1) {
      maps[x][y] = z
      answer = z
      break
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0]
      const ny = y + dir[i][1]
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0
        queue.push([nx, ny, z+1])
      }
    }
  }
  return answer;
}


console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])) // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])) // -1