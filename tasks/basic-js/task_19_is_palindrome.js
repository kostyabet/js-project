/**
 * Написать функцию, которая определяет, является ли строка палиндромом
 *
 */

function isPalindrome(str) {
    const left = str.slice(0, str.length / 2);
    const right = str.slice(str.length / 2);
    if (left.length !== right.length) return false;
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[left.length - i - 1])
            return false;
    }
    return true;
}