// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    var answer = [];
    let indicator = 0;
    let count = 1;
    progresses.forEach((progress, idx) => {
        let i = 0;
        const multiplier = speeds[idx]
        while (progress < 100) {
            progress = progress + multiplier;
            i++;
        }
        if (indicator < i) {
            if (idx === 0) {
                indicator = i;
            } else {
                indicator = i;
                answer.push(count)
                count = 1
            }
        } else {
            count++;
        }
        if (idx === progresses.length-1) {
            answer.push(count);
        }
    })    
    
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])) // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])) // [1, 3, 2]