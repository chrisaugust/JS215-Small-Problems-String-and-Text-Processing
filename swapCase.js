// PROBLEM
// Write a function that takes a string and returns that string
// with every lowercase letter changed to uppercase and vice versa.
// Leave all other characters unchanged.
//
// EXAMPLES
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> String
//
// ALGORITHM
// - initialize swappedCase to empty string
// - split string into characters
// - iterate over characters
//   - if character is lowercase, convert to uppercase
//     and append to swappedCase
//   - if character is uppercase, convert to lowercase
//     and append to swappedCase
//   - if character is not alphabetic, append to swappedCase
// - return swappedCase string
//
// CODE
'use strict';

function swapCase(string) {
  return string.split('').map(char => {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else if (char.match(/[^a-z]/i)) {
      return char;
    }
  }).join('');
}

// TESTS
console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");
