// 2021 KAKAO BLIND RECRUITMENT

function solution(info, query) {
  const answer = Array.from({length : query.length}, ()=>0)

  query.forEach((q, idx) => {
    const arr = q.split(" ")
    const [qlanguage, qstack, qcareer, qfood, qscore] = [converter("language", arr[0]), converter("stack", arr[2]), converter("career",arr[4]), converter("food", arr[6]), converter("score", arr[7])]
    info.forEach(i => {
      const [language, stack, career, food, score] = i.split(" ")
      if (qlanguage.includes(language) && qstack.includes(stack) && qcareer.includes(career) && qfood.includes(food) && qscore >= score) {
        console.log(idx, qlanguage, language, qstack, stack, qcareer, career, qfood, food, qscore, score)
        answer[idx]++
      }
    })
  })
  // info.forEach(i => {
  //   const [language, stack, career, food, score] = i.split(" ")
    
  // })

  return answer;
}

function converter(type, value) {
  switch (type) {
    case "language":
      if (value === "-") {
        return "pythonjavacpp"
      }
      return value
    case "stack":
      if (value === "-") {
        return "backendfrontend"
      }
      return value
    case "career":
      if (value === "-") {
        return "juniorsenior"
      }
      return value
    case "food":
      if (value === "-") {
        return "chickenpizza"
      }
      return value
    case "score":
      if (value === "-") {
        return 1
      }
      return value
  }
}

const a = solution(
  ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
  ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])
console.log(a)