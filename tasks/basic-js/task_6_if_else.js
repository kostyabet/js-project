/**
 * Реализовать функцию ifElse(condition, thenFn, elseFn),
 * которая имитирует поведение конструкции if-else.
 * condition — булевое значение (или выражение, приводимое к булевому типу);
 * thenFn — функция, которая вызывается, если condition истинно;
 * elseFn — функция, которая вызывается, если condition ложно (false или falsy-значение)
 *
 * Не используйте if, else, ?, тернарный оператор в теле функции.
 *
 */

// First Variant
function ifElse(condition, thenFn, elseFn) {
    while (condition) {
        thenFn();
        return;
    }
    elseFn();
}

// Second Variant
function ifElse(condition, thenFn, elseFn) {
    for (let i = 0; condition; i++) {
        thenFn();
        return;
    }
    elseFn();
}