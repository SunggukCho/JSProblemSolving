// https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript

function solution(w,h) {
    let c = 0; //cross
    for(let i=0; i<w; i++){
      c = Math.ceil((h*(i+1))/w)-Math.floor((h*i)/w)+c;
    }
    return w*h-c
  }

solution(8, 12) // 80