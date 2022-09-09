//2022 KAKAO BLIND RECRUITMENT
function solution(fees, records) {
  var answer = [];
  const [baseTime, baseFare, addTime, addFare] = fees;
  const inAndOut = new Map(); // 입출차 정보
  const recordMap = new Map(); // 차량 당 총 시간 기록용
  records.forEach((record) => {
    const [time, carNum, inOrOut] = record.split(" ")
    if (inOrOut === "IN") {
      inAndOut.set(carNum, time)
    } else {
      const prev = inAndOut.get(carNum)
      inAndOut.delete(carNum)
      const curr = time
      const diff = timeCalc(prev, curr, carNum)
      recordMap.set(carNum, (recordMap.get(carNum) ? recordMap.get(carNum)+diff : diff))
    }
  })
  if (inAndOut.size > 0) {
    inAndOut.forEach((value, key) => {
      const diff = timeCalc(value, "23:59")
      recordMap.set(key, (recordMap.get(key) ? recordMap.get(key)+diff : diff))
    })
  }
  recordMap.forEach((value, key) => {
    if (value > baseTime) {
      const newTime = value-baseTime
      answer.push([Number(key), Math.ceil(newTime / addTime)*addFare + baseFare])
    } else {
      answer.push([Number(key), baseFare])
    }
  })
  answer.sort((a, b) => a[0] - b[0])
  answer = answer.map(ans => ans[1])
  return answer;
}

function timeCalc (prev, curr) {
  const [prevHour, prevMin] = prev.split(":").map(a => parseInt(a))
  const [currHour, currMin] = curr.split(":").map(b => parseInt(b))
  let diffHour = currHour - prevHour
  if (prevMin >= currMin) {
    diffHour -= 1
    const newMin = currMin+60 - prevMin
    return diffHour*60 + newMin
  } else {
    return diffHour*60 + (currMin - prevMin)
  }
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]))
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]))
