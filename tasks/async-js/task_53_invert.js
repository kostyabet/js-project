/*
Реализуй функцию invert(obj), которая меняет местами ключи и значения. 
Если значения повторяются, сохранить массив ключей:
invert({ a: 1, b: 2, c: 1 }) // → { 1: ['a','c'], 2: ['b'] }
*/

function invert(obj) {
    const result = {};
    for (let key in obj) {
        if (result[obj[key]] === undefined)
            result[obj[key]] = [];
        result[obj[key]].push(key);
    }
    return result;
}

console.log(invert({ a: 1, b: 2, c: 1 }));