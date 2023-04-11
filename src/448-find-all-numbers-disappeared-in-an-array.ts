// function findDisappearedNumbers(nums: number[]): number[] {
//   const n = nums.length
//   const result:number[] = []
//   const set = new Set(nums)
//   for (let i = 1; i <= n; i++) {
//     if (!set.has(i)) result.push(i)
//   }
//   return result
// };

function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    nums[(nums[i] - 1) % n] += n
  }
  return nums.filter(value => value <= n)
  
};

console.log(findDisappearedNumbers([1, 1]));
