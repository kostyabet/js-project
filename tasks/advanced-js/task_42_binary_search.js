/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

function binarySearch(arr, target) {
    if (arr.length === 1) {
        if (arr[0] === target) return 0;
        return -1;
    }

    const key = Math.floor(arr.length / 2);
    const current = arr[key];
    if (current > target) {
        const result = binarySearch([...arr].slice(0, key), target);
        return result === -1 ? -1 : result;
    } else if (current < target) {
        const result = binarySearch([...arr].slice(key + 1, arr.length), target);
        return result === -1 ? -1 : key + result + 1;
    }
    return key;
}

console.log(binarySearch([-1,0,3,5,9,12], -1));
console.log(binarySearch([-1,0,3,5,9,12], 0));
console.log(binarySearch([-1,0,3,5,9,12], 3));
console.log(binarySearch([-1,0,3,5,9,12], 5));
console.log(binarySearch([-1,0,3,5,9,12], 9));
console.log(binarySearch([-1,0,3,5,9,12], 12));
console.log(binarySearch([-1,0,3,5,9,12], 2));