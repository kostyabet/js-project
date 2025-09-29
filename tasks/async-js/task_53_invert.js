/*
Реализуй функцию invert(obj), которая меняет местами ключи и значения. 
Если значения повторяются, сохранить массив ключей:
invert({ a: 1, b: 2, c: 1 }) // → { 1: ['a','c'], 2: ['b'] }
*/

// Variant 1
function invert(obj) {
    const result = {};
    for (let key in obj) {
        if (result[obj[key]] === undefined)
            result[obj[key]] = [];
        result[obj[key]].push(key);
    }
    return result;
}

// Variant 2
function invert(obj) {
    const result = {}
    const values = Object.entries(obj);
    for (let i = 0; i < values.length; i++) {
        const current = values[i];
        if (result[current[1]] === undefined)
            result[current[1]] = [];
        result[current[1]].push(current[0]);
    }
    return result;
}
console.log(invert({ a: 1, b: 2, c: 1 }));