function subsets(nums: number[]): number[][] {
  const n = nums.length
  let ans: number[][] = []
  // 假如n为3 i为0 - 111
  for (let i = 0; i < (1 << n); i++) {
    const currentAns = []
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        currentAns.push(nums[j])
      }
    }
    ans.push(currentAns)
  }
  return ans
};
