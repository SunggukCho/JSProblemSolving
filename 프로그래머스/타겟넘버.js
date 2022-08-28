function solution(numbers, target) {
  var answer = 0;
  let lenNumbers = numbers.length;
  function DFS(v, nums) {
    if (v === lenNumbers) {
      const sum = nums.reduce(( prev , curr) => prev + curr, 0)
      if (sum === target) answer += 1
      return
    } else {
      DFS(v+1, nums)
      const newNums = Object.assign(nums)
      newNums[v] *= -1
      DFS(v+1, newNums)
    }
  }
  DFS(0, numbers)
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)) // 5
console.log(solution([4, 1, 2, 1], 4)) // 2