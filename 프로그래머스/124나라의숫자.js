/*
 3진법으로 변환하는 코드를 짠다는 개념. 0, 1, 2 => 1, 2, 4로 한 칸씩 땡겨짐
 하지만 0 이 없기 때문에 0으로 나눠 떨어진다면 4, 아니면 그 나머지를 인덱스로 가진 배열에서 불러오기
*/
function solution(n) {
  var answer = ''
  const remainderConverter = ["4", "1", "2"]
  while (n >0) {
    const remainder = n%3
    answer = remainderConverter[remainder]+answer
    n = Math.floor((n-1)/3)
  }
  return answer;
}

console.log(solution(10))
// console.log(solution(10000))
// console.log(solution(100000))
// console.log(solution(1000000))
// console.log(solution(10000000))