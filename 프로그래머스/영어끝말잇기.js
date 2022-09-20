function solution(n, words) {
  var answer = [0, 0];
  const hashmap = new Map();
  for (let i = 1; i <= words.length; i++) {
    if (i > 1 && words[i-2][words[i-2].length-1] !== words[i-1][0]) {
      answer = [i%n === 0 ? n : i%n , Math.ceil(i/n)]
      break
    }
    if (hashmap.get(words[i-1]) > 0) {
      answer = [i%n === 0 ? n : i%n , Math.ceil(i/n)]
      break
    } else {
      hashmap.set(words[i-1], 1)
    }
  }
  return answer;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) //[3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])) // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])) // [1, 3]