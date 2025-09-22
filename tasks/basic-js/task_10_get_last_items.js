/**
 * Написать функцию getLastNItems(arr, n), которая возвращает последние n символов массива
 *
 */

function getLastNItems(arr, n) {
    return arr.splice(0, n);
}