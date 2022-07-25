// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = 
`20
7
23
19
10
15
25
8
13`
input = input.split("\n").map(num => parseInt(num))

function combination (arr, num) {
  const results = [];

  if (num === 1) return arr.map(v => [v])
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index+1)

    const comb = combination(rest, num - 1)
    const attached = comb.map(v => [fixed, ...v])

    results.push(...attached)
  })
  return results
}

const possibleArray = combination(input, 7)
for (array of possibleArray) {
  const sum = array.reduce(( prev, curr) => prev+curr, 0)
  if (sum === 100) {
    const sortedArray = array.sort((a, b) => a-b)
    sortedArray.map(v => console.log(v))
    console.log("return")
  }
}