/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// Variant 1
function bubbleOddSort(array) {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % 2 === 0) continue;
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Variant 2
function bubbleOddSort(array) {
    const sortedOdd = [...array]
        .filter(item => item % 2 !== 0)
        .sort((a, b) => a - b);

    let sortedId = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            array[i] = sortedOdd[sortedId++];
        }
    }
    return array;
}

console.log(bubbleOddSort([7, 1]));
console.log(bubbleOddSort([5, 8, 6, 3, 4]));
console.log(bubbleOddSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));