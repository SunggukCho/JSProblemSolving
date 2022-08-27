// 2019 KAKAO BLIND RECRUIT
function solution(record) {
  record.forEach((rec) => {
    const [move, uid, name] = rec.split(" ")
    if (move !== "Leave") {
      userStatus.set(uid, name)
    }
  })
  let answer = []
  const recordLegnth = record.length
  for (let i = 0; i < recordLegnth; i++) {
    const [move, uid, name] = record[i].split(" ")
    if (move === "Change") {
      continue
    } else {
      answer.push(converter(move, uid))
    }
  }
  return answer;
}
const userStatus = new Map();
function converter(method, uid) {
  if (method === "Enter") {
    return userStatus.get(uid)+"님이 들어왔습니다."
  }
  if (method === "Leave") {
    return userStatus.get(uid)+"님이 나갔습니다."
  }
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
