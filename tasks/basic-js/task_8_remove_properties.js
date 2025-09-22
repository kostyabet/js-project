/**
 * Реализуй функцию removeProperties(obj, keys),
 * которая возвращает копию объекта без свойств, перечисленных в массиве keys.
 * removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) → { a: 1 }
 *
 */

function removeProperties(obj, keys) {
    let result = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}