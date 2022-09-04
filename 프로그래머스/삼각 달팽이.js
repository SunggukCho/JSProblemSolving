// 월간 코드 챌린지 시즌1
function solution(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    const tmp = Array.from({length:i}, ()=>0)
    arr.push(tmp)
  }
  let dir = 0;
  let current = 1
  let x = -1;
  let y = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
      if (dir % 3 === 0) {// 하
        x++
      } else if (dir % 3 === 1) {// 우
        y++
      } else {// 상
        x--
        y--
      }
      arr[x][y]=current
      current++
    }
    dir++
  }
  const answer = arr.reduce((prev, curr) => [...prev, ...curr])
  return answer;
}

console.log(solution(4))
console.log(solution(5))
console.log(solution(6))