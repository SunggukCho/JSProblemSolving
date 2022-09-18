// 2021 KAKAO BLIND RECRUITMENT

function solution(n, s, a, b, fares) {
  var answer = 0;
  const matrix = Array.from({length: n+1}, ()=> Array.from({length: n+1}, ()=>0))
  fares.forEach(fare => {
    const [start, end, score] = fare
    matrix[start][end] = score
    matrix[end][start] = score
  })
  const visited = Array.from({length: n+1}, ()=>0)
  const sum = (args) => args.reduce((prev,curr) => prev+curr, 0)
  let minNum = Number.MAX_SAFE_INTEGER;
  const paths = [s]
  
  // console.log(matrix)
  function DFS(v, visited, paths){
    if (v === a || v === b) {
      if (visited[a] !== 0 && visited[b] !== 0) {
        if (minNum > sum(visited)) {
          minNum = sum(visited)
          console.log('!?!?',paths, visited)
        }
        return
      } else {
        paths.pop()
        return
        // DFS(v, visited, paths)
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (matrix[v][i] !== 0 && visited[i] === 0) {
          visited[v] = matrix[v][i]
          paths.push(i)
          console.log(v, i, paths)
          DFS(i, visited, paths)
          // if (visited[a] !== 0 && visited[b] !== 0) {
          //   minNum = Math.min(minNum, sum(visited))
          //   console.log("!!!", minNum, sum(visited))
          //   return
          // } else {
        }
      }
    }
  }
  DFS(s, visited, paths)
  console.log('min num: ', minNum)
  console.log('paths: ', paths)
  return answer;
}


console.log(solution(6,4,6,2,[[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]))
// console.log(solution(7,3,4,1,[[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]))
// console.log(solution(6,4,5,6,[[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]))
