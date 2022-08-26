// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

function solution(s) {
    let answer = 0;
    let left = '';
    let right = '';
    let result = [];
  
    for (let i = 1; i < Math.ceil(s.length / 2) + 1; i++) {
        result.push([]);
        // i = length
        let cnt = 1;
        for (let k = 0; k < s.length; k++) {
            left = s.substr(k * i, i);
            right = s.substr((k * i) + i, i);
            
            if (left === right) {
                cnt += 1;
            }
            else {
                // 똑같은 문자열이 있는 경우 숫자와 문자열을 같이 저장
                if (cnt > 1) {
                    result[i - 1] += String(cnt) + left;
                }
                // 똑같은 문자열이 없는 경우 문자열만 저장
                else {
                    result[i - 1] += left;
                }
                cnt = 1;
            }
        }
    }
    
    let min = result[0].length;
    for (let i in result) {
        if (min > result[i].length) {
            min = result[i].length;
        }
    }
    return min;
}
solution("aabbaccc"); // 7
// solution("ababcdcdababcdcd"); // 9
// solution("abcabcdede"); // 8
// solution("abcabcabcabcdededededede"); // 14
// solution("xababcdcdababcdcd"); // 17