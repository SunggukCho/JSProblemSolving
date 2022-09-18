function solution(key, lock) {
  var answer = true;
  const [N, M] = [key.length, lock.length]
  const board = Array.from({ length: M*3 }, ()=>Array.from({ length: M*3 }, ()=>0))
  for (let i = M; i < M*2; i++) {
    for (let j = M; j < M*2; j++) {
      board[i][j] = lock[i-M][j-M]
    }  
  }
  function rotate(key, dir) {
    let newKey = []
    if (dir === 0) {
      return key
    }
    if (dir > 0) {
      for (let i = 0; i < M; i++) {
        let tmp = []
        for (let j = 0; j < M; j++) {
          tmp.push(key[j][i])
        }
        newKey.push(tmp)
      }
      return newKey
    }
  }
  function sum(M, board) {
    let sum = 0
    for (let i = M; i < M*2; i++) {
      for (let j = M; j < M*2; j++) {
        sum += board[i][j]
      }
    }
    if (sum === M**2) {
      return true
    } else {
      return false
    }
  }

  let dir = 0
  let rotateKey = Object.assign(key)
  while (dir < 4) {
    let newboard = Object.assign(board)
    rotateKey = rotate(rotateKey, dir)
    for (let i = M; i < M*2; i++) {
      for (let j = M; j < M*2; j++) {
        // console.log(`${dir+1}: `, i-M, j-M, rotateKey[i-M][j-M], typeof rotateKey[i-M][j-M])
        if (newboard[i][j] === 0 && rotateKey[i-M][j-M] === 1) {
          newboard[i][j] = 1
        }
      }
    }
    const checkSum = sum(M, board)
    if (checkSum) {
      answer = true
      break
    } else {
      dir++
    }
  }
  return answer;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))