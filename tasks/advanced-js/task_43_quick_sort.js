/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), 
while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let i = -1;
    let pivot = arr.length - 1;
    for (let j= 0; j < pivot; j++) {
        if (arr[j] < arr[pivot]) {
            swap(arr, ++i, j);
        }
    }
    swap(arr, ++i, pivot);
    pivot = i;

    return [ ...quickSort([...arr].slice(0, pivot)),
             arr[pivot],
             ...quickSort([...arr].slice(pivot + 1, arr.length))];
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));
console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6]));