// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/17136.txt').toString().split(/\r?\n/)
input = input.map(a => a.split(" ").map(b => parseInt(b)))

let cards = {
  1: 5,
  2: 5,
  3: 5,
  4: 5,
  5: 5,
}

function isSquare (x, y) {
  let answer = 0
  let isSquareTrue = true;
  let row = 0
  let col = 0
  for (let i = 0; i < 5; i++) {
    if (input[x+i][y] === 1) {
      row++
    } else {
      break
    }
  }
  for (let j = 0; j < 5; j++) {
    if (input[x][y+j] === 1) {
      col++
    } else {
      break
    }
  }
  const min = Math.min(row, col)
  for (let i = 0; i < min; i++) {
    for (let j = 0; j < min; j++) {
      if (input[x+i][y+j] === 0) {
        isSquareTrue = false
        break
      }
    }  
  }

  if (isSquareTrue) {
    answer = min
  }
  return answer
}
function getAnswer () {
  let result = 0; // 최종답
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      if (input[r][c] === 1) {
        let currSize = isSquare(r, c)
        // 1. size 구하고 input에서 0으로 바꿔줌 (중복 체크 방지)
        // 2. 색종이 카드에서 해당 사이즈 하나 뺌
        // 3. 만약 해당 색종이 카드에서 그 사이즈 없으면 답은 -1
        for (let i = 0; i < currSize; i++) {
          for (let j = 0; j < currSize; j++) {
            input[r+i][c+j] = 0
          }
        }
        const rest = cards[currSize]
        if (rest < 0) {
          result = -1
          return result
        }
        cards[currSize]--
        result++
      }
    }
  }
  return result
}
console.log(getAnswer())
