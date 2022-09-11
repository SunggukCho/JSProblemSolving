var answer = [];
function solution(n) {
  // const first = Array.from({length: n}).map((_, idx) => idx+1)
  hanoi(n, 1, 3, 2)
  return answer;
}
function hanoi(n, src, dst, via) {
  if (n === 1) {
    // console.log(`end: ${src} -> ${dst}`)
    answer.push([src, dst])
  } else {
    hanoi(n-1, src, via, dst)
    // console.log(`via: ${src} -> ${dst}`)
    answer.push([src, dst])
    hanoi(n-1, via, dst, src)
  }
}

// console.log(solution(2))
console.log(solution(3))