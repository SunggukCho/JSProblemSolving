function solution(n) {
  const memo = ["1", "2", "4"]
  const length = memo.length
  const remainderConverter = ["1", "2", "4"]
  for (let i = length; i <= n; i++) {
    const [share, remainder] = [Math.floor(i/3), i%3]
    const convertedRemainder = remainderConverter[remainder]
    const addStringNum = String(memo[share-1])+convertedRemainder
    memo[i] = addStringNum
  }
  // console.log(memo)
  return memo[n-1];
}

console.log(solution(10))
// console.log(solution(10000))
// console.log(solution(100000))
// console.log(solution(1000000))
// console.log(solution(10000000))