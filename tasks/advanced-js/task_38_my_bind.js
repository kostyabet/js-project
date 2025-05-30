/*
Напишите функцию myBind(fn, context, ...args), которая работает аналогично Function.prototype.bind

function greet(message) {
  console.log(this.name + ' says: ' + message);
}

const person = { name: 'Alice' };
const boundGreet = greet.myBind(person, 'Hello');
boundGreet(); // Output: Alice says: Hello
*/
