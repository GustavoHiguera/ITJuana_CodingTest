function twoSum(nums, target) {
  const numIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndexMap.has(complement)) {
      return [numIndexMap.get(complement), i];
    }
    numIndexMap.set(nums[i], i);
  }
}

module.exports = twoSum;
