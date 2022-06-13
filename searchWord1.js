// PROBLEM
// Write a function that takes a word and a string of
// text, returning an integer representing the number
// of times the word appears in the text.
//
// Assume that the word and text arguments will always be
// provided and that all word breaks are spaces. Some words
// will include punctuation such as periods, commas, semicolons,
// etc.
//
// EXAMPLES
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// 
// searchWord('sed', text);      // 3
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> Array -> Number
//
// ALGORITHM
// - split text into words
// - filter with regex
// - return length of resulting array (or 0)
//
// CODE
'use strict';

function searchWord(word, text) {
  let wordsInText = text.split(' ');
  let regex = new RegExp(`\\b${word}\\b`, 'i');
  let matches = wordsInText.filter(wordInText => {
    return wordInText.match(regex);
  });
  console.log(matches);
  return matches ? matches.length : 0; 
}

// TESTS
const text = 'Sed, ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed; quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text) === 3);
console.log(searchWord('qui', text));
