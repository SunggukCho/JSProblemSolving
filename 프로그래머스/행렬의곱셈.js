function solution(arr1, arr2) {
  // 행렬의 크기 arr1.length x arr2[0].length - arr1 예) 2 x 4 , 4 x 2 행렬을 곱하면  -> 2 x 2 행렬이 나옴
  const x = arr1.length
  const y = arr2[0].length
  const answer = Array.from({ length: x}, ()=>Array.from({ length: y}, ()=>0))
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      answer[i][j] = arr1[i].reduce((sum, arr1Value, rowIndex) => sum + arr1Value * arr2[rowIndex][j], 0)
    }
  }
  return answer
}

console.log(solution([[1, 4], [3, 2], [4, 1]], 	[[3, 3], [3, 3]])) 
// [[15, 15], [15, 15], [15, 15]]
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])) 
// [[22, 22, 11], [36, 28, 18], [29, 20, 14]]