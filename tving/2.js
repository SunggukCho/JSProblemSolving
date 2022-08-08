function solution(card, word) {
  var answer = [];
  const [r1, r2, r3] = card
  const row1 = r1.split("") // String to Array
  const row2 = r2.split("")
  const row3 = r3.split("")
  
  const hashmap = new Map();
  for (let i = 65; i < 91; i++) {
    const char = String.fromCodePoint(i)
    hashmap.set(char, {count: 0, row: 0})
  }
  row1.forEach(r => hashmap.set(r, { count: hashmap.get(r).count+1, row: 1 }))
  row2.forEach(r => hashmap.set(r, { count: hashmap.get(r).count+1, row: 2 }))
  row3.forEach(r => hashmap.set(r, { count: hashmap.get(r).count+1, row: 3 }))

  word.forEach(wd => {
    let rowWhere = [0, 0, 0]
    let isPossible = true;
    const hashmapClone = new Map(hashmap)
    for (w of wd) {
      if (hashmapClone.get(w).count === 0) {
        isPossible = false
        break
      } else {
        rowWhere[hashmapClone.get(w).row-1] = 1
        hashmapClone.set(w, { count: hashmapClone.get(w).count-1, row: hashmapClone.get(w).row})
      }
    }
    if (isPossible && rowWhere.reduce((prev, curr) => prev+curr, 0) === 3) {
      answer.push(wd)
    }
  })
  if (answer.length === 0) answer.push("-1")
  
  return answer;
}


// # tc 1
let card1 = [
  "ABACDEFG",
  "NOPQRSTU",
  "HIJKLKMM"
]
let word1 = [
  "GPQM",
  "GPMZ",
  "EFU",
  "MMNA",
]

// # tc 2
let card2 = [
  "AABBCCDD",
  "KKKKJJJJ",
  "MOMOMOMO"
]
let word2 = [
  "AAAKKKKKMMMMM",
  "ABCDKJ",
]
console.log(solution(card1, word1))
console.log(solution(card2, word2))