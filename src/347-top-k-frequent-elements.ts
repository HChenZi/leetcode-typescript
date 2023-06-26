function topKFrequent(nums: number[], k: number): number[] {
  const map:Map<number,number> = new Map()
  nums.forEach((value) => map.set(value, (map.get(value) || 0) + 1))
  return [...map.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, k)
  .map(i => i[0])
}

