function solution(citations) {
  let answer = 0;
  const sortedCitations = citations.sort((a, b) => b-a)
  const length = sortedCitations.length
  
  for (let i = 0; i < length; i++) {
    const h = sortedCitations[i]
    if (i < h) {
      answer++
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5])) // 3
console.log(solution([6,5,5,5,4,3,1])) // 4
console.log(solution([3,3,1,1,1])) // 2