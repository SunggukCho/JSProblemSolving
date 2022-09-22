function solution(n) {
  var answer = n;
  const bin_n = n.toString(2)
  const length = bin_n.length
  const num_of_one = bin_n.split("").filter(a=> a === "1").length
  if (length === num_of_one) {
    let new_bin = bin_n.split("")
    new_bin[1] = "0"
    new_bin.push("1")
    answer = parseInt(new_bin.join(""), 2)
  } else {
    while(true) {
      answer++
      if (num_of_one === (answer).toString(2).match(/1/g).length) break
    }
  }
  return answer;
}

console.log(solution(78)) // 83
console.log(solution(15)) // 23