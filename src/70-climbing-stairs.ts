function climbStairs(n: number): number {
  return (f(n))
};
let list:number[] = []
const f = (n: number) => {
  if(list[n]) return list[n]
  if (n <= 1) {
    return 1
  }
  return list[n] = f(n - 1) + f(n - 2)
}
console.log(climbStairs(2));

