/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/

function deepClone(obj) {
    const result = {};
    for(let key in obj) {
        if (
            typeof obj[key] === 'object' &&
            !(obj[key] instanceof Array) &&
            !(obj[key] instanceof Set) &&
            !(obj[key] instanceof Map) &&
            !(obj[key] === null)
        ) {
            result[key] = deepClone(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

const obj1 = {
    v1: [1, 2, 3],
    v2: new Set([1, 2, 3]),
    v3: new Map(),
    v4: null,
    v5: {
        v6: 1,
        v7: 12,
    }
}
console.log(obj1, deepClone(obj1));