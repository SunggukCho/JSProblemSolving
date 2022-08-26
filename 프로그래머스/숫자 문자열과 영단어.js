// 2021 카카오 채용연계형 인턴십

function solution(s) {
  var answer = 0;
  const numMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  const keyArr = Object.keys(numMap)
  let re = Object.assign(s)
  for (let key of keyArr) {
    const regex = new RegExp(`${key}`, "gi");
    re = re.replace(regex, numMap[key])
  }
  answer = Number(re)
  return answer;
}

console.log(solution("one4seveneight"))
console.log(solution("one4one4one"))
console.log(solution("23four5six7"))
console.log(solution("2three45sixseven"))
console.log(solution("123"))