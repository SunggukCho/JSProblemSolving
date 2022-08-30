// 2018 KAKAO BLIND RECRUITMENT

// 1. 입력값 소문자로 변환
// 2. 입력값 중 정규표현식으로 알파벳 아닌거 걸러내기
// 3. 두 글자 씩 집합으로 만들기
// 4. A & B 비교

const regex = /[^a-zA-Z]/g // 알파벳이 아닌것
function solution(str1, str2) {
  var answer = 0;
  const test = str1.replace(regex, "").toLowerCase();
  const test2 = str2.replace(regex, "").toLowerCase();


  return answer;
}

console.log(solution("FRANCE", "french"))
console.log(solution("aa1+aa2", "AAAA12"))