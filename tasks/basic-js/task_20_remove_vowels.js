/**
 * Написать функцию, которая удаляет все гласные из строки, возвращает новую строку
 *
 */

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const lStr = str.toLowerCase();
    let result = '';
    for (let i = 0; i < lStr.length; i++) {
        if (!vowels.includes(lStr[i])) result += lStr[i];
    }
    return result;
}