// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요. 

let N = 3

let check = Array.from({length: N+1}, ()=> 0)

let stack = [];
function DFS(v) {
  if (v === N+1) {
    for (let i = 1; i <= N; i++) {
      if (check[i] === 1) console.log(i)
    }
  } else {
    check[v] = 1
    DFS(v+1)
    check[v] = 0
    DFS(v+1)
  }
}
DFS(1)