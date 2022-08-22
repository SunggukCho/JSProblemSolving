
// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = "(()[[]])([])" // [][]((])
const inputArr = input.split("")
const length = inputArr.length
const stack = [];
let answer = 0;
let temp = 1;

for (let i = 0; i < length; i++) {
  const elem = inputArr[i];
  if (elem === "(") { 
    stack.push(elem) 
    temp *= 2
  }
  if (elem === "[") { 
    stack.push(elem) 
    temp *= 3
  }
  if (elem === ")") {
    if (stack.length === 0 || stack[stack.length -1] === "[") {
      answer = 0
      break
    }
    if (inputArr[i-1] === "(") {
      answer += temp
    }
    const pop1 = stack.pop()
    temp /= 2
  }
  if (elem === "]" ) {
    if (stack.length === 0 || stack[stack.length -1] === "(") {
      answer = 0
      break
    }
    if (inputArr[i-1] === "[") {
      answer += temp
    }
    const pop2 = stack.pop()
    temp /= 3
  } 
}
if (stack.length === 0) console.log(answer)
else console.log(0)
