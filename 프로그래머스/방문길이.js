function solution(dirs) {
  var answer = 0;
  const board = Array.from({ length: 11}, ()=> Array.from({length: 11}, ()=>0))
  const queue = [5, 5]

  for (let i = 0; i < dirs.length; i++) {
    const [currX, currY] = queue.shift()
    move(dirs[i], [currX, currY])
  }

  return answer;
}

function move(dir, curr) {
  const direction = {
    "L": [0, -1],
    "R": [0, 1],
    "U": [-1, 0],
    "D": [1, 0],
  }
  const [x, y] = curr;
  const nx = x+direction[dir][0];
  const ny = y+direction[dir][1];
  const obj = {
    x: [x, nx].sort((a, b) => a-b),
    y: [y, ny].sort((a, b) => a-b)
  }

  return obj
}

console.log(solution("ULURRDLLU")) // 7
console.log(solution("LULLLLLLU")) // 7