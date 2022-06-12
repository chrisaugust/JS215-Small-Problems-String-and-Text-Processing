// PROBLEM
// Write a function that takes an array of strings and returns an array
// of the same string values with all the vowels removed.
//
// EXAMPLES
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);
//   // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);
//   // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);
//   // ["BC", "", "XYZ"]
//
// DATA STRUCTURES/TYPE SIGNATURE
// Array -> Array
//
// ALGORITHM
// - iterate over array elements with map
// - callback function supplied as argument to map replaces vowels with ''
//
// CODE
'use strict';

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map(string => {
    return string.replace(/[aeiou]/gi, '');
  });
}

// TESTS
console.log(String(removeVowels(['abcdefghijklmnopqrstuvwxyz'])) ===  String(["bcdfghjklmnpqrstvwxyz"]));
console.log(String(removeVowels(['green', 'YELLOW', 'black', 'white'])) === String(["grn", "YLLW", "blck", "wht"]));
console.log(String(removeVowels(['ABC', 'AEIOU', 'XYZ'])) === String(["BC", "", "XYZ"]));
