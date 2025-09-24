/**
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
 */

// Variant 1
function middleCharacter(text) {
    if (text.length % 2 === 0) {
        return text.slice(text.length / 2 - 1, text.length / 2 + 1);
    }
    else {
        return text.slice(text.length / 2, text.length / 2 + 1);
    }
}

// Variant 2
function middleCharacter(text) {
    const mid = Math.floor((text.length - 1) / 2);
    return text.substring(mid, text.length - mid);
}