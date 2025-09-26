/*
Реализуйте функцию delayPromise(delay, value), которая возвращает промис, 
резолвящийся через указанное количество миллисекунд со значением value.
*/

function delayPromise(delay, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    })
}

console.log(1);
delayPromise(1000, 10).then(value => console.log(value));
console.log(2);