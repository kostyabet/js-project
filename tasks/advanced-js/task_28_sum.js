/*
Написать функцию sum, которая принимает число, 
и может вызываться бесконечное число раз, 
пока не будет вызвана без аргументов - 
тогда возвращается сумма переданных ранее чисел (sum(2)(5)(9)())
*/

function sum(n1) {
    if (!n1) return 0;
    let result = n1;
    return function calc(n2) {
        if (n2 === undefined) return result;
        result += n2;
        return calc;
    }
}

console.log(sum(1)(2)(0)(4)()); // должно быть 7
console.log(sum()); // должно быть 0