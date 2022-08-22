function solution(estimates, k) {
  let max = 0;
  let sum = 0;
  const part = estimates.slice(0, k);
  sum = part.reduce((prev, curr) => prev + curr, 0);

  for (let i = k; i < estimates.length; i++) {
      sum -= estimates[i - k];
      sum += estimates[i]

      if (max < sum) {
          max = sum;
      }
  }
  return max;
}

let estimates = [5, 1, 9, 8, 10, 5]
let k = 3

let estimates2 = [10, 1, 10, 1, 1, 4, 3, 10]
let k2 = 6
console.log(solution(estimates, k)) // return 27
console.log(solution(estimates2, k2)) // return 29