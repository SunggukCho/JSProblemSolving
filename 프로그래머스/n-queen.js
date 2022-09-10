// N-QUEEN 
/* 
  1. nQueen 함수 
  2. promising 함수
*/
var answer = 0;
function solution(n) {
  let col = Array.from({length: n+1}, ()=>0)
  nQueen(n, 0, col)
  console.log(answer)
  return answer;
}
function nQueen(n, v, col) {
  // console.log(v, col, promising(v, col))
  if (promising(v, col)) {
    if (v === n) {
      answer++
    } else {
      for (let i =1; i <= n; i++) {
        col[v+1] = i
        nQueen(n, v+1, col)
      }
    }
  } else {
    return
  }
}
function promising(v, col) {
  let flag = true;
  let k = 1
  while (k < v && flag === true) {
    // console.log(k, v, col, col[v] === col[k], Math.abs(col[v]-col[k]))
    if (col[v] === col[k] || (Math.abs(col[v]-col[k]) === v-k)) {
      flag = false
    }
    k++
  }
  return flag
}

console.log(solution(4))