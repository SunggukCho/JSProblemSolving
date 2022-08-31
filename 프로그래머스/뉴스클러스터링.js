// 2018 KAKAO BLIND RECRUITMENT

// 1. 입력값 소문자로 변환
// 2. 입력값 중 정규표현식으로 알파벳 아닌거 걸러내기
// 3. 두 글자 씩 집합으로 만들기
// 4. A & B 비교

const regex = /[^a-zA-Z]/g // 알파벳이 아닌것
// function solution(str1, str2) {
//   var answer = 0;
//   const string1 = str1.replace(regex, "").toLowerCase();
//   const string2 = str2.replace(regex, "").toLowerCase();
//   const arr1 = [];
//   const arr2 = [];
//   for (let i = 0 ; i < string1.length-1; i++) {
//     arr1.push(string1.slice(i,i+2))
//   }
//   for (let i = 0 ; i < string2.length-1; i++) {
//     arr2.push(string2.slice(i,i+2))
//   }
//   let union = 0
//   let intersection = 0
//   const sum = [...new Set([...arr1, ...arr2])]
//   sum.forEach(item => {
//     const has1 = arr1.filter(x => x === item).length;
//     const has2 = arr2.filter(x => x === item).length;
//     union += Math.max(has1, has2);
//     intersection += Math.min(has1, has2);
//   })
  
//   return union === 0 ? 65536 : Math.floor(intersection / union * 65536)
// }

function solution (str1, str2) {
  //
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;
  console.log(arr1, arr2, set)
  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

console.log(solution("FRANCE", "french"))
console.log(solution("handshake", "shake hands"))
console.log(solution("aa1+aa2", "AAAA12"))
console.log(solution("E=M*C^2", "e=m*c^2"))