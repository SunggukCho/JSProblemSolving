function solution(arr) {
  const length = arr.length;
  const stack = []
  let top = 999
  for (let i = 0; i < length; i++) {
    if (arr[i] !== top) {
      stack.push(arr[i])
      top = arr[i]
    }
  }
  return stack;
}

console.log(solution([1,1,3,3,0,1,1]))
console.log(solution([4,4,4,3,3]))