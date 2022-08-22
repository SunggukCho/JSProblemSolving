https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
function solution(n) {
  let divisorList = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorList.push(i)
    }
  }
  
  const answer = divisorList.reduce((prev, curr) => prev+curr, 0);
  return answer;
}