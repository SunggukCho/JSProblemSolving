// 2019 카카오 개발자 겨울 인턴십
// 크레인 인형뽑기 게임

function solution(board, moves) {
  const columnLen = board.length
  let answer = 0
  const length = moves.length
  const stack = []
  for (let i = 0; i < length; i++) {
    const column = moves[i]-1
    let getItem;
    for (let j = 0; j < columnLen; j++) {
      if (board[j][column] !== 0) {
        getItem = board[j][column]
        board[j][column] = 0
        break
      }
    }
    if (getItem === undefined) {
      continue
    }

    if (stack.length > 0) {
      const top = stack[stack.length-1]
      if (top === getItem) {
        answer += 2
        stack.pop()
      } else {
        stack.push(getItem)
      }
    } else {
      stack.push(getItem);
    }
  }
  return answer;
}

const boardTest = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
]
const movesTest = [1,5,3,5,1,2,1,4]
console.log(solution(boardTest, movesTest))
