// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
    var answer = [];
    const supoja1 = [1, 2, 3, 4, 5];
    const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let [count1, count2, count3] = [0, 0, 0];
    answers.map((ans, idx) => {
        let index1 = idx % supoja1.length;
        let index2 = idx % supoja2.length;
        let index3 = idx % supoja3.length;
        if (ans === supoja1[index1]) count1++;
        if (ans === supoja2[index2]) count2++;
        if (ans === supoja3[index3]) count3++;
    })
    const maxNum = Math.max(count1, count2, count3);
    if (count1 === maxNum) answer.push(1);
    if (count2 === maxNum) answer.push(2);
    if (count3 === maxNum) answer.push(3);
    return answer;
}

solution([1,2,3,4,5]) // [1]
solution([1,3,2,4,2]) // [1,2,3]