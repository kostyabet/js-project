/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// Variant 1
function validBrackets(str) {
    let brackets = {
        '()': 0,
        '[]': 0,
        '{}': 0,
    }
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case '{': {
                brackets['{}']++;
                break;
            }
            case '[': {
                brackets['[]']++;
                break;
            }
            case '(': {
                brackets['()']++;
                break;
            }
            case '}':
                if (brackets['{}'] === 0) return false;
                brackets['{}']--;
                break;
            case ']': {
                if (brackets['[]'] === 0) return false;
                brackets['[]']--;
                break;
            }
            case ')': {
                if (brackets['()'] === 0) return false;
                brackets['()']--;
                break;
            }
        }
    }
    return brackets['()'] === 0 && brackets['[]'] === 0 && brackets['{}'] === 0;
}

// Variant 2
function validBrackets(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        switch(str[i].charAt(0)) {
            case '(':
            case '[':
            case '{': {
                stack.push(str[i].charAt(0));
                break;
            }

            case ')':
            case ']':
            case '}': {
                const current = stack.pop();
                if (current === '(' && str[i].charAt(0) !== ')') return false;
                if (current === '[' && str[i].charAt(0) !== ']') return false;
                if (current === '{' && str[i].charAt(0) !== '}') return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validBrackets("()"));     // true
console.log(validBrackets("()[]{}")); // true
console.log(validBrackets("(]"));     // false
console.log(validBrackets("([])"));   // true