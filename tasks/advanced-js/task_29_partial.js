/*
Напишите функцию partial(fn, ...args), которая принимает функцию fn и частично применяет к ней аргументы args, 
возвращая новую функцию. Пример:

function sum(a, b, c) {
  return a + b + c;
}

const addFive = partial(sum, 2, 3);
addFive(10) → 15  // 2 + 3 + 10
*/
