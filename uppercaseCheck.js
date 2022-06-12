// PROBLEM
// Write a function that takes a string argument and returns true
// if all the alphabetic characters are uppercase, otherwise returns
// false.
//
// EXAMPLES
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true
//
// DATA STRUCTURE/TYPE SIGNATURE
// String -> Boolean
//
// ALGORITHM
// - split argument string into characters
// - iterate over characters in string with every()
//   - callback function checks if 
//     currentChar === currentChar.toUpperCase()
//
// CODE
'use strict';

function isUppercase(string) {
  return string.split('').every(char => char === char.toUpperCase());
}

// TESTS
console.log(isUppercase('t') === false);
console.log(isUppercase('T') === true);
console.log(isUppercase('Four Score') === false);
console.log(isUppercase('FOUR SCORE') === true);
console.log(isUppercase('4SCORE!') === true);
console.log(isUppercase('') === true);
