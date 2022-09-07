// 월간 코드 챌린지 시즌2 - 20min
const pair = {
  "[": "]",
  "{": "}",
  "(": ")",
}

function solution(s) {
  var answer = 0;
  const stack = [];
  const length = s.length;
  let arr = s.split("")
  answer += checkRight(arr)
  for (let i = 1; i < length; i++) {
    const first = arr.shift()
    arr = [...arr, first]
    // console.log(arr)
    answer += checkRight(arr)
  }
  return answer;
}

function checkRight (arr) {
  const stack = []
  arr.forEach((elem, index) => {
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (pair[top] === elem) {
        stack.pop()
      } else {
        stack.push(elem)
      }
    } else {
      stack.push(elem)
    }
  })
  if (stack.length === 0) {
    return 1
  } else {
    return 0
  }
}

console.log(solution("[](){}")) // 3
console.log(solution("}]()[{")) // 22
console.log(solution("[)(]")) // 0
console.log(solution("}}}")) // 0