/**
 * Реализуйте функцию filterStrings(arr),
 * которая возвращает новый массив,
 * содержащий только те элементы исходного массива,
 * которые являются строками
 *
 */

function filterStrings(arr) {
    const result = [];
    arr.forEach((e) => {
        if (typeof e === "string")
            result.push(e);
    })
    return result;
}