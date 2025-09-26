/*
Digital root is the recursive sum of all the digits in a number.
https://en.wikipedia.org/wiki/Digital_root

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitsSum(num) {
    const curSum = (current) => {
        if (current <= 0) return 0;
        return current % 10 + curSum(Math.floor(current / 10));
    }
    let result = curSum(num);
    while (result / 10 > 1) {
        result = curSum(result);
    }
    return result;
}

console.log(digitsSum(16)); // 7
console.log(digitsSum(942)); // 6
console.log(digitsSum(132189)); // 6
console.log(digitsSum(493193)); // 2