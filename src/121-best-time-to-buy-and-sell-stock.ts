function maxProfit(prices: number[]): number {
  let min = Number.MAX_VALUE
  let result = 0
  for(let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    if (prices[i] - min) {
      result = Math.max(result, prices[i] - min)
    }
  }
  return result
};
console.log(maxProfit([7]));
