function solution(estimates, k) {
  var answer = 0; // max
  
  const length = estimates.length
  
  let lt = 0
  let rt = lt+k-1
  let part = estimates.slice(0, k)
  let sum = part.reduce((prev, curr) => prev + curr, 0)
  answer = sum
  while (rt < length) {
    lt ++
    rt ++
    const pop = part.shift()
    const add = part.push(estimates[rt])
    const newSum = part.reduce((prev, curr) => prev + curr, 0)
    if (answer < newSum) {
      answer = newSum
    }
  }
  return answer;
}

let estimates = [5, 1, 9, 8, 10, 5]
let k = 3

let estimates2 = [10, 1, 10, 1, 1, 4, 3, 10]
let k2 = 6
console.log(solution(estimates, k)) // return 27
console.log(solution(estimates2, k2)) // return 29