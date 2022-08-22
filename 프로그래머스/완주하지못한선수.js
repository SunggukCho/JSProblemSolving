// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
    let obj = {};
    participant.forEach(player => {
        if(obj[player] > 0){
            obj[player]++;
        }else{
            obj[player] = 1;
        }
    })
    completion.forEach(player => {
        obj[player]--;
    })
    return Object.keys(obj).filter(player => obj[player] > 0).toString('');
}