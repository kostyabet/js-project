/**
 * Реализуйте функцию getFloatOnString(str), 
 * которая пытается преобразовать входную строку в число с плавающей точкой. 
 * Если строка начинается с корректного числового значения, верните его как number.
 * Если строка не начинается с числа — верните NaN.
 *
 * getFloatOnString('4.567abcdefgh'); // → 4.567
 * getFloatOnString('   10.5kg');     // → 10.5
 * getFloatOnString('abcdefgh');      // → NaN
 * getFloatOnString('');              // → NaN
 */
function getFloatOnString(str) {
    const result = parseFloat(str);
    return isNaN(result) ? NaN : result;
}