# ITJuana_CodingTest

## Problem 1
### Description
Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.

### Example
#### Input
```
nums = [4,3,2,7,8,2,3,1]
```
#### Output
```
[5,6]
```
### Solution

* I use a set data structure to efficiently keep track of the numbers present in the input list nums.
* Create an empty set, numSet.
* Iterate through the input list nums, and for each element num in nums, add num to the set numSet.
* Initialize an empty result list, result.
* Iterate through the range from 1 to the length of the input list nums (both inclusive). For each number i, check if i is not present in the set numSet.
* If i is not present in numSet, then it is a missing number. Add i to the result list.
* After iterating through the range, the result list will contain all the missing numbers.
* Return the result list as the final output.

### Why this solution?
Using a set data structure allows me to efficiently perform lookup operations with constant time complexity. By adding all elements of nums to the set, I can quickly check whether a number i is present or not. This approach ensures that I find all the missing numbers in a single iteration through the range [1, list length], making it an efficient solution for the problem.

### Complexity Analysis

The time complexity of this solution is O(N), where N is the length of the input list nums. I perform a single iteration through the input list nums to build the set numSet, and another iteration through the range [1, list length] to find missing numbers.

The space complexity of this solution is O(N), where N is the length of the input list nums. I use a set numSet to store the numbers present in the input list nums.

## Problem 2

### Description

Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.

### Example
#### Input
```
nums = [2,7,11,15], target = 9
```
#### Output
```
[0,1]
```
### Solution

* I use a hash table (map) to keep track of the elements I have seen while iterating through the input list nums.
* Create an empty map, numIndexMap, where the keys are the elements from nums, and the values are their corresponding indices in the list.
* Iterate through the input list nums, and for each element num at index i, calculate the complement as target - num.
* Check if the complement exists in the map numIndexMap. If it does, it means I have found a pair of numbers that add up to the target. The indices of the two numbers are the value at the complement key and the current index i.
* Return the pair of indices as the final output.

### Why this solution?
Using a hash table (map) allows me to efficiently perform lookup operations with constant time complexity. By storing the elements of nums in the map and their corresponding indices as values, I can quickly check whether the complement of an element exists in the map or not. This approach ensures that I find the pair of indices in a single iteration through the input list nums, making it an efficient solution for the problem.
### Complexity Analysis

The time complexity of this solution is O(N), where N is the length of the input list nums. I perform a single iteration through the input list nums to find the pair of numbers that sum up to the target.

The space complexity of this solution is O(N), where N is the length of the input list nums. I use a map numIndexMap to store the elements of nums and their corresponding indices, and in the worst case, it can store all the elements of nums, resulting in linear space complexity.

## How to run the code

* Clone the repository
* Navigate to the directory ITJuana_CodingTest
* Run the following command in the terminal
```
npm install
```
* You can run the tests using the following command
```
npx jest
```
* The solution for problem 1 is in the file findMissingNumbers.js
* The solution for problem 2 is in the file twoSum.js

## Author
Gustavo Higuera Mayoral




