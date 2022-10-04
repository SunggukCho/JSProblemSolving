function solution(s) {
  let answer = [];
  let zero = 0
  let trial = 0
  let string = s.slice()
  while (true) {
    const { ns, tmpZero } = convert(string)
    if (ns === "1") {
      zero+=tmpZero
      break
    } else {
      string = ns
      zero+=tmpZero
      trial++
    }
  }
  return [trial+1, zero];
}

function convert(s) {
  let tmpZero = 0
  const first = s.split("").filter(a => {
    if (a === "1") {
      return 1
    } else {
      tmpZero++
    }
  }).join("")
  const ns = first.length.toString(2)
  return {
    ns, tmpZero
  }
}

console.log(solution("110010101001"))
console.log(solution("01110"))
console.log(solution("1111111"))