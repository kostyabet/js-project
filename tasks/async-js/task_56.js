/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/

function deepClone(obj) {
    const result = {};
    for(let key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = deepClone(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

const obj1 = {
    v1: 1,
    v2: 2,
    v3: {
        v4: () => {
            return "slkfsdf";
        },
        v5: 1,
    }
}
console.log(obj1, deepClone(obj1));