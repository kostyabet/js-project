/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/

function deepClone(obj) {
    const result = {};
    for(let key in obj) {
        if (obj[key] instanceof Array) {
            result[key] = [...obj[key]];
        }
        else if (obj[key] instanceof Set) {
            result[key] = new Set(obj[key]);
        }
        else if (obj[key] instanceof Map) {
            const newMap = new Map();
            for (const [mapKey, mapValue] of Object.entries(obj[key])) {
                newMap.set(mapKey, mapValue);
            }
            result[key] = newMap;
        } else if (obj[key] === null) {
            result[key] = null;
        } else if (obj[key] === 'object') {
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