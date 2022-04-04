// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let hashTable = {}
    clothes.map((c)=>{
        if (Object.keys(hashTable).includes(c[1])) {
            hashTable[c[1]] = [...hashTable[c[1]], c[0]]
        } else {
            hashTable[c[1]] = [c[0]]
        }
    })
    let answer = 1;
    const clothesType = Object.values(hashTable).length;
    if (clothesType > 1) {
        Object.values(hashTable).map(h => answer *= h.length+1)
    } else {
        answer += Number(Object.values(hashTable).map(h => h.length));
    }
    return answer-1;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]) // 5
solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]) // 3