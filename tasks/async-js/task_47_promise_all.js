/*
Написать Promise.all полифил
*/

if (typeof Promise === 'undefined' || !Promise.all) {
    Promise.all = function(iterable) {
        return new Promise(function(resolve, reject) {
            const promises = Array.from(iterable);
            const total = promises.length;

            if (total === 0) {
                resolve([]);
                return;
            }

            const results = new Array(total);
            let completedCount = 0;

            promises.forEach(function(promise, index) {
                Promise.resolve(promise).then(function(value) {
                    results[index] = value;
                    completedCount++;

                    if (completedCount === total) {
                        resolve(results);
                    }
                }).catch(function(error) {
                    reject(error);
                });
            });
        });
    };
}