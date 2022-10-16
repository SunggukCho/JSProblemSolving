function solution(n, stations, w) {
  const station = Array.from({length: n}, ()=> 0)
  const coverage = 2*w+1
  stations.forEach(s => {
    for (let i = s-w; i <= s+w; i++) {
      station[i-1] = 1
    }
  })
  const noStations = []
  let tmp = 0;
  for (let i = 0; i < station.length; i++) {
    if (station[i] === 0) {
      tmp++
    } else if (station[i] === 1 && tmp > 0){
      noStations.push(tmp)
      tmp = 0
    }
    if (i === station.length -1 && tmp > 0) {
      noStations.push(tmp)
    }
  }
  
  const ans = noStations.map((elem) => {
    const divider = parseInt(elem / coverage)
    const remainder = elem % coverage
    if (remainder === 0) {
      return divider
    } else {
      return divider + 1
    }
  })
  // console.log(station, noStations, ans)

  const answer = ans.reduce((prev, curr)=> prev+curr)
  return answer;
}

console.log(solution(11, [4, 11], 1)) // 3
console.log(solution(16, [9], 2)) // 3