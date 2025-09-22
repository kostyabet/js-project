/**
 * Написать функцию makeImmutable(obj), которая возвращает копию объекта, которую нельзя изменять
 *
 */

function makeImmutable(obj) {
    return Object.freeze(JSON.parse(JSON.stringify(obj)));
}