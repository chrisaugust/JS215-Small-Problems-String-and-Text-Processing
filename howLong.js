// PROBLEM
// Write a function that takes a string arrgument and returns an array
// with every word followed by a space and the word's length. If the
// argument is an empty string or if no argument is provided return an
// empty array.
//
// Assume that every pair of words in the argument string will be
// separated by a single space.
//
// EXAMPLES
// wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]
//
// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
//
// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
//
// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]
//
// wordLengths('');      // []
// wordLengths();        // []
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> Array
//
// ALGORITHM
// - split string into array of words
// - transform array with map
//   - callback function first determines length of word
//   - returns template literal with `${word} ${word.length}`
//
// CODE
'use strict';

function wordLengths(string) {
  if (string === '' || string === undefined) return [];
  let words = string.split(' ');
  return words.map(word => `${word} ${String(word.length)}`);
}

// TESTS
console.log(String(wordLengths('cow sheep chicken')) ===
String(["cow 3", "sheep 5", "chicken 7"]));

console.log(String(wordLengths('baseball hot dogs and apple pie')) ===
String(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]));

console.log(String(wordLengths("It ain't easy, is it?")) ===
String(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]));

console.log(String(wordLengths('Supercalifragilisticexpialidocious')) ===
String(["Supercalifragilisticexpialidocious 34"]));

console.log(String(wordLengths('')) === String([]));
console.log(String(wordLengths()) === String([]));
