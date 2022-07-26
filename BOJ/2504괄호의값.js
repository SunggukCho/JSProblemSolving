
// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = "(()[[]])([])" // [][]((])
const inputArr = input.split("")
const length = inputArr.length

const stack = [];
let impossible = false;
let answer = 0;
let temp = 1;

for (let i = 0; i < length; i++) {
  const elem = inputArr[i];
  if (elem === "(" || elem === "[") { 
    stack.push(elem) 
    if (elem === "(") temp *= 2
    else temp *= 3
  }
  if (elem === ")") {
    if (stack.length === 0 || stack[stack.length -1] !== "(") break
    stack.pop()
    answer += temp
    temp /= 2
  }
  if (elem === "]" && inputArr[i-1] === "[") {
    if (stack.length === 0) impossible = true
    stack.pop()
    answer += temp
    temp /= 3
  } 
  console.log(answer)
}
if (stack.length === 0 && impossible === false) {
  // 정상
  console.log(answer)
} else {
  console.log(0)
}