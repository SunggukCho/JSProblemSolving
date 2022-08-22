// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = require('fs').readFileSync('./file/1759.txt').toString().split(/\r?\n/).map(a => a.split(" "))
const [nums, arr] = input
const L = parseInt(nums[0])
const C = parseInt(nums[1])

// L개의 조합
// 1. 순서 정렬
// 2. 모음 (a, e, i, o, u) 최소 1개
// 3. 자음 최소 2개

arr.sort()
let vowels = [] // 모음
let consonants = [] // 자음
arr.forEach(a => {
  if (["a", "e", "i", "o", "u",].includes(a)) vowels.push(a)
  else consonants.push(a)
})
let visit = Array.from({length: C}, ()=>0)
function DFS(v, visited) {
  const sum = visited.reduce((prev , curr) => prev + curr, 0)
  if (v === C) {
    if (sum === L) {
      let answer = ""
      let vowelCnt = 0;
      let consonantCnt = 0;
      for (let i = 0; i < C; i++) {
        if (visited[i] === 1) {
          const tmp = arr[i]
          if (vowels.includes(tmp)) {
            vowelCnt++
          } else {
            consonantCnt++
          }
          answer += tmp
        } 
      }
      if (vowelCnt > 0 && consonantCnt > 1) {
        console.log(answer)
      }
    }
    return
  } else {
    visited[v] = 1
    DFS(v+1, visited)
    visited[v] = 0
    DFS(v+1, visited)
  }
}
DFS(0, visit)