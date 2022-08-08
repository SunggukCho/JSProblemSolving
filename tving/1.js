function solution(location, s, e) {
  let answer = 0;
  let [startX, startY] = s
  let [endX, endY] = e

  const minX = Math.min(startX, endX)
  const maxX = Math.max(startX, endX)
  const minY = Math.min(startY, endY)
  const maxY = Math.max(startY, endY)
  location.forEach(loc=> {
    const [x, y] = loc
    if (x <= maxX && x >= minX && y <= maxY && y >= minY) {
      answer++
    }
  })
  return answer;
}
// #tc 1
// let location = [
//   [0, 3],
//   [1, 1],
//   [1, 5],
//   [2, 2],
//   [3, 3],
//   [4, 0],
// ]
// let s = [1, 4]
// let e = [4, 1]
// # tc2

let location = [
  [0, 3],
  [1, 1],
  [1, 5],
  [2, 2],
  [3, 3],
  [4, 0],
]
let s = [3, 4]
let e = [0, 0]
console.log(solution(location, s, e))