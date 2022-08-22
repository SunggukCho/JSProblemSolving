// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
    var answer = [];
    commands.map((command) => {
        const [ start, end, index ] = command;
        const newArray = array.slice(start-1, end).sort((a, b) => a-b)
        answer.push(newArray[index-1])
    })
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) //[5, 6, 3]