/*
NOTE: The test cases for this kata are broken, but for some reason CodeWars has locked them and I cannot edit them. 
Specifically, the returned function is not propertly testing that old values are remembered. 
If and when I can fix the problem, I will, but I don't see any way to do that due to the lock.

In testing, a spy function is one that keeps track of various metadata regarding its invocations. 
Some examples of properties that a spy might track include:

Whether it was invoked
How many times it was invoked
What arguments it was called with
What contexts it was called in
What values it returned
Whether it threw an error
For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. 
The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
.returned(val) — returns true if spy ever returned val, else returns false
Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false
*/

function spyOn(func) {
    let callCount = 0;
    let calls = [];
    let results = [];

    function spy(...args) {
        callCount++;
        calls.push(...args);
        const result = func(...args);
        results.push(result);
        return result;
    }
    spy.callCount = function() {
        return callCount;
    }
    spy.wasCalledWith = function(val) {
        return calls.includes(val);
    }
    spy.returned = function(val) {
        return results.includes(val);
    }

    return spy;
}

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
console.log('Count of calls: ', adderSpy.callCount()); // 2
console.log('Is called with 4: ', adderSpy.wasCalledWith(4)); // true
console.log('Is called with 0: ', adderSpy.wasCalledWith(0)); // false
console.log('Is returned 8: ', adderSpy.returned(8)); // true
console.log('Is returned 0: ', adderSpy.returned(0)); // false