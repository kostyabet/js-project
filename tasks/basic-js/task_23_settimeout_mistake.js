/**
 * Исправить ошибку в цикле с setTimeout:
 *
 */

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('index', i);
    }, 3000);
}

// Variant 1
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('index', i);
  }, 3000);
}

// Variant 2
for (var i = 0; i < 10; i++) {
    (function (number){
        setTimeout(function () {
            console.log('index', number);
        }, 3000);
    })(i)
}