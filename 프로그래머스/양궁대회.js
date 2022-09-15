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
  let maxDiff = 0;
  bin.forEach((c) => {
    let ryan = 0
    let apeach = 0
    let arrowUseNum = 0
    let eachCase = Array.from({length: 11}, ()=>0)
    for (let i = 0; i < 10; i++) {
      const apeachNum = info[i]
      if (c[i] === 1) {
        // i점에서 라이언이 이기는 경우 -> 어피치보다 1개 더 함.
        eachCase[i] = apeachNum+1
        arrowUseNum += apeachNum+1
        ryan += (10-i)
      } else {
        // i점에서 라이언이 지는 경우 -> 0
        eachCase[i] = 0
        if (apeachNum !== 0) {
          apeach += (10-i)
        }
      }
    }
    if (arrowUseNum <= n) {
      eachCase[10] = n-arrowUseNum
      if ((ryan - apeach) > maxDiff) {
        maxDiff = ryan - apeach
        answer = eachCase.slice()
      }
      else if ((ryan - apeach) === maxDiff) {
        for (let i = 0; i < 11; i++) {
          if (eachCase[10-i] > answer[10-i]) {
            maxDiff = ryan - apeach
            answer = eachCase.slice()
            break
          } else if (eachCase[10-i] === answer[10-i]) {
            continue
          } else {
            break
          }
        }
      }
     
    }
  })
  if (maxDiff === 0) answer = [-1]
  // console.log(answer)
  return answer;
}  

console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0]))
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0]))
console.log(solution(9, [0,0,1,2,0,1,1,1,1,1,1]))
console.log(solution(10, [0,0,0,0,0,0,0,0,3,4,3]))