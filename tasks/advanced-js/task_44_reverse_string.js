/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

function reverseString(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;

        start++;
        end--;
    }
    return str;
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString( ["H","a","n","n","a","h"]));