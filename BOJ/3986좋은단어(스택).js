// let input = require('fs').readFileSync('/dev/stdin').toString().split(/\r?\n/)
let input = require('fs').readFileSync('./file/3986.txt').toString().split(/\r?\n/)
const [N, ...rest] = input
const array = rest.map(a => a.split(""))

let answer = 0;
array.forEach((arr) => {
  let stack = [];
  arr.forEach((word, index) => {
    let top = ""
    const length = stack.length
    if (length > 0) {
      top = stack[length-1]
      if (word === top) {
        stack.pop()
      } else {
        stack.push(word)
      }
    } else {
      stack.push(word)
    }
  })
  if (stack.length === 0) {
    answer ++
  } 
})
console.log(answer)