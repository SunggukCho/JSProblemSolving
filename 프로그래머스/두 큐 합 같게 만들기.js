// 2022 KAKAO INTERNSHIP

function solution(queue1, queue2) {
  var answer = -1;
  let sum1 = queue1.reduce((prev, curr) => prev+curr, 0)
  let sum2 = queue2.reduce((prev, curr) => prev+curr, 0)
  const length = queue1.length
  for (let i = 0; i <  length*3; i++) {
    if (sum1 === sum2) {
      answer = i
      break
    }
    if (sum1 > sum2) {
      const pop1 = queue1.shift()
      queue2.push(pop1)
      sum1 -= pop1
      sum2 += pop1
    } else if (sum1 < sum2) {
      const pop2 = queue2.shift()
      queue1.push(pop2)
      sum1 += pop2
      sum2 -= pop2
    }
    
  }

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]))
console.log(solution([1, 2, 1, 2]	, [1, 10, 1, 2]))
console.log(solution([1, 1], [1, 5]))