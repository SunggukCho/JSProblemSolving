/**
 * 최대공약수 1. 유클리드 호제법. 두 수 중 작은수로 나눠서 나머지가 없으면 그 수가 최대공약수. 나머지로 다시 나눈값을 나눠서 계속 반복(재귀)
 * 최대공약수 2. 아래 코드처럼 두 수 중에서 더 작은 수까지 그냥 다 나눠서 둘 다 0 나오는 최대값을 갱신함. (역으로도 할 수 있음.)
 * 최소공배수(LCM) = 두 수 곱하기 / 최대공약수(GCD)
 */

let input = require('fs').readFileSync('/dev/stdin').toString()
input = input.split(" ").map(v => parseInt(v))
const [A, B] = input

const getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }

  return gcd;
}

const GCD = getGCD(A, B)
const LCM = (A*B)/GCD

console.log(GCD)
console.log(LCM)