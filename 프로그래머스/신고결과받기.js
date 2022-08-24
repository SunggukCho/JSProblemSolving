// 2022 KAKAO INTERNSHIP -> 18분

function solution(id_list, report, k) {
  const answer = [];
  const reportMap = new Map();
  const answerMap = new Map();
  id_list.forEach(id => {
    reportMap.set(id, {count: 0, reporter: []})
    answerMap.set(id, ans = 0)
  })
  let setReport = new Set(report);
  
  setReport.forEach(rep => {
    const [reporter, reported] = rep.split(" ")
    const newReport = reportMap.get(reported)
    newReport.count += 1
    newReport.reporter.push(reporter)
    reportMap.set(reported, newReport)
  })
  id_list.forEach(id => {
    const result = reportMap.get(id)
    if (result.count >= k) {
      result.reporter.map(r => answerMap.set(r, answerMap.get(r)+1))
    }
  })
  answerMap.forEach(a => answer.push(a))
  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))
