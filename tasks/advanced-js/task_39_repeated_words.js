/*
Удалить все повторяющиеся слова из строки, оставив только отдельные (первые) записи слов
*/

function deleteRepeatedWords(text) {
    const words = new Set(text.split(' '));
    let result = '';
    for (const word of words) {
        result += word + " ";
    }
    return result;
}

console.log(deleteRepeatedWords("Hello hello hello try try it by yourself Hello"));