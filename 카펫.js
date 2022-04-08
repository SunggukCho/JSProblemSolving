// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
    // brown 8 ~ 5000, yellow 1 ~ 2,000,000
    var answer = [];
    const totalCarpet = brown + yellow;
    let verticalLen = 3;
    
    while (verticalLen <= totalCarpet) {
        if (totalCarpet % verticalLen === 0) {
            let horizonLen = totalCarpet/verticalLen;
            if ((horizonLen*2 + (verticalLen-2)*2 === brown) && (totalCarpet-brown === yellow)) {
                console.log('ho', horizonLen, 'vert', verticalLen, totalCarpet, brown, yellow, horizonLen*2 + (verticalLen-2)*2)
                answer.push(horizonLen, verticalLen);
                break
            }
        };
        verticalLen += 1;
    }
    console.log(answer)
    
    
    
    return answer;
}

solution(10, 2); // [4, 3]
solution(8, 1); // [3, 3]
solution(24, 24); // [8, 6]