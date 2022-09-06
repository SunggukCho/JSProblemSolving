// 2018 KAKAO BLIND RECRUITMENT
function solution(cacheSize, cities) {
  var answer = 0;
  let queue = [];
  cities.forEach(city => {
    if (queue.includes(city.toLowerCase())) {
      const index = queue.findIndex((c)=> c === city.toLowerCase())
      queue.splice(index,1)
      queue.push(city.toLowerCase())
      answer+=1
    } else {
      if (queue.length >= cacheSize && queue.length > 0) {
        queue.shift()
      } 
      if (cacheSize > 0) {
        queue.push(city.toLowerCase())
      }
      answer+=5
    }
  })
  return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])) //50
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])) //21
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])) // 60
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])) // 50
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])) // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])) // 25
