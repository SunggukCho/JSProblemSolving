// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

function solution(s) {
    let answer = 0;
    let length = s.length;
    const stringArray = s.split('');
    for (let step = 1; step <= length; step++) {
        for (let i = 0; i < length/step ;i++) {
            const block = stringArray.slice(i, i+step)
            console.log(step, block)
        }
    }
    



    return answer;
}
solution("aabbaccc"); // 7
// solution("ababcdcdababcdcd"); // 9
// solution("abcabcdede"); // 8
// solution("abcabcabcabcdededededede"); // 14
// solution("xababcdcdababcdcd"); // 17