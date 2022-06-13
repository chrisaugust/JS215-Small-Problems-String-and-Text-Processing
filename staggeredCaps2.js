// PROBLEM
// Modify the function from 'Staggered Caps Part 1' so that it ignores
// non-alphabetic characters in determining the case of the alphabetic
// characters.
//
// EXAMPLES
// staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
// staggeredCase('ALL CAPS');                     // "AlL cApS"
// staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> String
//
// ALGORITHM
// - initialize count variable to 0
// - map over characters in argument string, with character and
// index as parameters for callback function
//   - capitalize characters for which count has an even value
//   - and vice versa for characters with odd count value
//   - increment count
//
// CODE
'use strict';

function staggeredCase(string) {
  let count = 0;
  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (count % 2 === 0) {
        count += 1;
        return char.toUpperCase();
      } else {
        count += 1;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

// TESTS
console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");
