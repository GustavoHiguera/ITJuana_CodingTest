const findMissingNumbers = require('./findMissingNumbers');

test('Test 1: Finds missing numbers correctly', () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  const expected = [5, 6];
  const result = findMissingNumbers(nums);
  expect(result).toEqual(expected);
});

test('Test 2: Handles duplicates in the input', () => {
  const nums = [1, 1];
  const expected = [2];
  const result = findMissingNumbers(nums);
  expect(result).toEqual(expected);
});
