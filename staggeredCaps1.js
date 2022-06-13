// PROBLEM
// Write a function that takes a string and returns that
// string with a staggered capitalization format. Every other
// character, starting from the first, should be capitalized,
// followed by a lowercase or non-alphabetic character. Non-
// alphabetic characters should not be changed but should be
// counted as part of the format for switching case.
//
// EXAMPLES
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> String
//
// ALGORITHM
// - map over characters in argument string, with character and
// index as parameters for callback function
// - use index to determine which characters should be capitalized
// (uppercase for even numbered index values)
//
// CODE
'use strict';

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    if (idx % 2 !== 0) return char.toLowerCase();
  }).join('');
}

// TESTS
console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");
