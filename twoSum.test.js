const twoSum = require('./twoSum');

test('Test 1: Finds two numbers that sum to the target', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];
  const result = twoSum(nums, target);
  expect(result).toEqual(expected);
});

test('Test 2: Handles multiple solutions correctly', () => {
  const nums = [3, 2, 4];
  const target = 6;
  const expected = [1, 2];
  const result = twoSum(nums, target);
  expect(result).toEqual(expected);
});

test('Test 3: Handles duplicates correctly', () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];
  const result = twoSum(nums, target);
  expect(result).toEqual(expected);
});
