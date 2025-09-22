/**
 * Реализуй функцию countValues(obj),
 * которая возвращает объект, где ключ — это значение из исходного объекта,
 * а значение — количество его повторений.
 * countValues({ a: 'x', b: 'y', c: 'x', d: 'z' }) → { x: 2, y: 1, z: 1 }
 *
 */

function countValues(obj) {
    let result = {};
    for (let key in obj) {
        const index = obj[key];
        result[index] = result[index] !== undefined ? result[index] + 1 : 1;
    }
    return result;
}