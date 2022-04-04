// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
function solution(n, lost, reserve) {
    let students = Array(n).fill(1);
    let newReserve = [];
    let lostReserve = [];
    reserve.forEach(r => {
        if (!lost.includes(r)) {
            newReserve.push(r);
        } else {
            lostReserve.push(r)
        }
    })
    newReserve.sort((a, b) => a-b);
    const newLost = lost.filter(l => !lostReserve.includes(l)).sort((a, b) => a-b);
    newLost.map(l => students[l-1] = 0)
    for (r of newReserve) {
        let flag = 0
        if (students[r-2] !== undefined && students[r-2] === 0) {
            students[r-2] = 1
            flag++
        } else if (students[r] !== undefined && students[r] === 0 && flag === 0) {
            students[r] = 1
        }
    }
    var answer = n-students.filter(s => s === 0).length;
    return answer
}


solution(5, [2, 3, 4, 5], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); //2