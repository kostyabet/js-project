/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

// numbers
function generateNumber(num) {
    return (...args) => args.length === 0 ? num : args[0](num);
}
const zero =  generateNumber(0);
const one =   generateNumber(1);
const two =   generateNumber(2);
const three = generateNumber(3);
const four =  generateNumber(4);
const five =  generateNumber(5);
const six =   generateNumber(6);
const seven = generateNumber(7);
const eight = generateNumber(8);
const nine =  generateNumber(9);

// operators
const plus = (right) => (left) => left + right;
const minus = (right) => (left) => left - right;
const times = (right) => (left) => left * right;
const dividedBy = (right) => (left) => Math.floor(left / right);

console.log(eight(dividedBy(three()))); // 2
console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))) // 3