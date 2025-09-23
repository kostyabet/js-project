/**
 * Реализовать map вручную
 *
 */

// Я хочу плакать :(
class Map {
    #obj = [];

    set(key, value) {
        const existIndex = this.#obj.findIndex(item => item.key === key);
        if (existIndex !== -1) {
            this.#obj[existIndex].value = value;
        } else {
            this.#obj.push({key, value});
        }
    }

    get(key) {
        const existIndex = this.#obj.findIndex(item => item.key === key);
        return existIndex === -1 ? undefined : this.#obj[existIndex].value;
    }

    has(key) {
        const existIndex = this.#obj.findIndex(item => item.key === key);
        return existIndex !== -1;
    }

    get size() {
        return this.#obj.length;
    }

    clear() {
        this.#obj = [];
    }
}

// реализация метода .map()
function customMap(arr, callbackfn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callbackfn(arr[i]))
    }
    return result;
}