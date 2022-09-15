// 2022 KAKAO BLIND RECRUITMENT
function solution(n, info) {
  let answer = [];
  const arr = Array.from({length: 10}, ()=>0)
  let bin = []
  function DFS(v, arr) {
    if (v === 10) {
      bin.push(arr.slice())
      return
    } else {
      arr[v] = 1
      DFS(v+1, arr)
      arr[v] = 0
      DFS(v+1, arr)
    }
  }
  DFS(0, arr)
  let maxNum = 0;
  bin.forEach((c, idx) => {
    let localScore = 0
    let arrowUseNum = 0
    let eachCase = Array.from({length: 11}, ()=>0)
    for (let i = 0; i < 10; i++) {
      const apeachNum = info[i]
      if (c[i] === 1) {
        // i점에서 라이언이 이기는 경우 -> 어피치보다 1개 더 함.
        eachCase[i] = apeachNum+1
        arrowUseNum+=apeachNum+1
        localScore += (10-i)
      } else {
        // i점에서 라이언이 지는 경우 -> 0
        eachCase[i] = 0
        if (apeachNum !== 0) {
          localScore -= (10-i)
        }
      }
    }
    if (arrowUseNum <= n && localScore > 0) {
      eachCase[10] = n-arrowUseNum
      if (maxNum <= localScore) {
        maxNum = Math.max(maxNum, localScore)
        answer =eachCase
        // console.log(`${idx+1} :`, c, maxNum, eachCase)
      }
    }
  })
  if (answer.length === 0) answer = [-1]
  return answer;
}

console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0]))
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0]))
console.log(solution(9, [0,0,1,2,0,1,1,1,1,1,1]))
console.log(solution(10, [0,0,0,0,0,0,0,0,3,4,3]))