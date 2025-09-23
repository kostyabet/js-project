/**
 * Написать функцию, которая удаляет все гласные из строки, возвращает новую строку
 *
 */

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) result += str[i];
    }
    return result;
}

console.log(removeVowels("Hello World"));