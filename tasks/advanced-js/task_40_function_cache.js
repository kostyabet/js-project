/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { complex calculation in here };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/

function cache(fn) {
    let func = fn;
    let map = new Map();
    return function memo(...args) {
        const keys = JSON.stringify(args);
        if (map.has(keys)) {
            console.log('from cache');
            return map.get(keys);
        }
        console.log('recalc');
        const result = func(...args);
        map.set(keys, result);
        return result;
    }
}

var complexFunction = function(arg1, arg2) { return arg1 + arg2; };
var cachedFunction = cache(complexFunction);
cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments