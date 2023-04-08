function countBits(n: number): number[] {
  const result:number[] = []
  for (let i = 0; i <= n; i++) {
    result[i] = f(i)
  }
  return result
};

function f(n: number) {
  let result = 0
  while(n) {
    n &= (n-1)
    result++
  }
  return result
}

console.log(countBits(10000));
