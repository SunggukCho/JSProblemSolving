// 실패
function solution(numbers) {
  const nLength = numbers.length;
  const checked = Array.from({length: nLength}, ()=>0);
  const tmp = Array.from({length: nLength}, ()=>0);
  let maxNum = 0;
  function DFS(v) {
    if (v === nLength) {
      const sum = tmp.reduce((prev, curr) => prev + curr)
      maxNum = Math.max(maxNum, parseInt(sum))
    } else {
      for (let i = 0; i < nLength; i++) {
        if (checked[i] === 0) {
          checked[i] = 1
          tmp[v] = String(numbers[i])
          DFS(v+1)
          checked[i] = 0
        }
      }
    }
  }
  DFS(0)
  return String(maxNum);
}

console.log(solution([6, 10, 2])) // "6210"
console.log(solution([3, 30, 34, 5, 9])) // "9534330"
console.log(solution([979, 97, 978, 81, 818, 817])) // "9799797881881817"
console.log(solution([0,0,0,0])) 
console.log(solution([70,0,0,0,0]))
console.log(solution([232,23]))