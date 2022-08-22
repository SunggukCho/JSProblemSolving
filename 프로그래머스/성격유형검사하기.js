// 2022 KAKAO TECH INTERNSHIP -> 28분
const choiceConverter = num => num-4
const decisionMaker = (first, last, firstCount, lastCount) => {
  if (firstCount > lastCount) {
    return first
  } else if (firstCount < lastCount) {
    return last
  } else {
    // 동률일 경우 오름차순 빠른쪽
    const firstCode = first.charCodeAt()
    const lastCode = last.charCodeAt()
    if (firstCode < lastCode) {
      return first
    } else {
      return last
    }
  }
}

function solution(survey, choices) {
  const characters = {
    "R": 0,
    "T": 0,
    /* */ 
    "F": 0,
    "C": 0,
    /* */ 
    "M": 0,
    "J": 0,
    /* */ 
    "A": 0,
    "N": 0,
  }
  const length = survey.length
  for (let i = 0; i <length; i++) {
    const [first, last] = survey[i]
    const choice = choiceConverter(choices[i])
    if (choice < 0) {
      // first 쪽
      const absoluteNum = Math.abs(choice)
      characters[first] += absoluteNum
    } else if (choice === 0) {
      continue
    } else {
      // last 쪽
      characters[last] += choice
    }
  }
  
  const one = decisionMaker("R", "T", characters["R"], characters["T"])
  const two = decisionMaker("F", "C", characters["F"], characters["C"])
  const three = decisionMaker("M", "J", characters["M"], characters["J"])
  const four = decisionMaker("A", "N", characters["A"], characters["N"])
  var answer = one+two+three+four;
  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], 	[7, 1, 3]))