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