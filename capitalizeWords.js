// PROBLEM
// Write a function that takes a string and returns that string
// with the first character of every word capitalized and all
// subsequent characters in lowercase.
//
// Assume that a word is any sequence of non-whitespace characters.
//
// EXAMPLES
// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> String
//
// ALGORITHM
// - split string into words
// - map over words
//   - capitalize first letter of word
//   - make every subsequent letter lowercase
// - return transformed string
//
// CODE
'use strict';

function wordCap(string) {
  let words = string.split(' ');
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(' ');
}

// TESTS
console.log(wordCap('four score and seven') === "Four Score And Seven");
console.log(wordCap('the javaScript language') === "The Javascript Language");
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word');
