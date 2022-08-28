// 2021 Dev-Matching: 웹 백엔드 개발

function solution(rows, columns, queries) {
  let answer = [];
  let cnt = 0
  const matrix = Array.from({ length: rows }, ()=>Array.from({ length: columns}, ()=> cnt += 1));
  queries.forEach((query) => {
    const [R1, C1, R2, C2] = query
    let prev = matrix[R1][C1-1];
    const arr = [];
    let dir = 0;
    let rIndex = R1-1;
    let cIndex = C1-1;
    while (dir < 4) {
      const current = matrix[rIndex][cIndex]
      arr.push(current)
      matrix[rIndex][cIndex] = prev
      prev = current
      if (dir === 0) { // 우
        if (cIndex === C2-1) {
          dir++
        } else {
          cIndex++;
        }
      }
      if (dir === 1) { // 하
        if (rIndex === R2-1) {
          dir++
        } else {
          rIndex++;
        }
      }
      if (dir === 2) { // 좌
        if (cIndex === C1-1) {
          dir++
        } else {
          cIndex--;
        }
      }
      if (dir === 3) { // 상
        if (rIndex === R1-1) {
          dir++
        } else {
          rIndex--;
        }
      }
    }
    answer.push(Math.min.apply(null, arr))
  })
  return answer;
}

console.log(solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]))
console.log(solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]))
console.log(solution(100, 97, [[1,1,100,97]]))
