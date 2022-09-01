// 월간 코드 챌린지 시즌1

// Best 풀이
function solution(arr) {
  if (arr.every(row => row.every(cell => cell === 0))) return [1, 0];
  if (arr.every(row => row.every(cell => cell === 1))) return [0, 1];
  const len = arr.length,
      q1 = arr.splice(0, len/2),
      q2 = q1.map(row => row.splice(len/2, len/2)),
      q3 = arr,
      q4 = q3.map(row => row.splice(len/2, len/2));
  return [q1,q2,q3,q4].reduce((ans, x) => solution(x).map((d, i) => d + ans[i]), [0, 0]);
}
// 내풀이
function solution(arr) {
  const L = arr.length
  let zero = 0;
  let one = 0;
  function quad(array, length) {
    if (length > 2) {
      const half = length / 2
      const UL = Array.from({length: half}, ()=>[])
      const UR = Array.from({length: half}, ()=>[])
      const DL = Array.from({length: half}, ()=>[])
      const DR = Array.from({length: half}, ()=>[])
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (i < half && j < half) {// UL
            UL[i].push(array[i][j])
          }
          if (i < half && j >= half) {// UR
            UR[i].push(array[i][j])
          }
          if (i >= half && j < half) {// DL
            DL[i-half].push(array[i][j])
          }
          if (i >= half && j >= half) {// DR
            DR[i-half].push(array[i][j])
          }
        }
      }
      const SUL = sum(UL)
      const SUR = sum(UR)
      const SDL = sum(DL)
      const SDR = sum(DR)
      SUL < 0 ? quad(UL, half) : (SUL > 0 ? one++ : zero++)
      SUR < 0 ? quad(UR, half) : (SUR > 0 ? one++ : zero++)
      SDL < 0 ? quad(DL, half) : (SDL > 0 ? one++ : zero++)
      SDR < 0 ? quad(DR, half) : (SDR > 0 ? one++ : zero++)
    } else {
      const test = sum(array)
      if (test === 1) {
        one++
      } else if (test === 0) {
        zero++
      } else {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            array[i][j] === 0 ? zero++ : one++
          }
        }
      }
    }
  }
  function sum (array) {
    const arrayLength = array.length;
    let summedNum = 0;
    let isEverZero = 0;
    for (let i = 0; i < arrayLength; i++) {
      for (let j = 0; j < arrayLength; j++) {
        summedNum += array[i][j]
        if (array[i][j] === 0) isEverZero++
      }  
    }
    if (summedNum === 0) {
      return 0
    } else {
      if (isEverZero === 0) {
        return 1
      } else {
        return -1
      }
    }
  }
  quad(arr, L)
  return [zero, one];
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]))
console.log(solution([[0,0],[0,0]])) // [1,0]
console.log(solution([[1,1],[1,1]])) // [0,1]
console.log(solution([[0,1],[1,1]])) // [1,3]
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]))