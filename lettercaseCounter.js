// PROBLEM
// Write a function that takes a string and returns an object
// containing three properties: one that represents lowercase
// letters, one that represents uppercase letters, and one that
// represents characters which are neither.
//
// EXAMPLES
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
//
// DATA STRUCTURES/TYPE SIGNATURE
// String -> Object
//
// ALGORITHM
// - initialize countObject to { lowercase: 0, uppercase: 0, neither: 0 }
// - split string into characters and iterate over characters
//   - match character against regex, incrementing appropriate property's value
// - return countObject
//
// CODE
'use strict';

function letterCaseCount(string) {
  let countObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) countObject.lowercase += 1;
    if (char.match(/[A-Z]/)) countObject.uppercase += 1;
    if (char.match(/[^a-z]/i)) countObject.neither += 1;
  });

  return countObject;
}

// TESTS
console.log(String(letterCaseCount('abCdef 123')) === String({ lowercase: 5, uppercase: 1, neither: 4 }));
console.log(String(letterCaseCount('AbCd +Ef')) === String({ lowercase: 3, uppercase: 3, neither: 2 }));
console.log(String(letterCaseCount('123')) === String({ lowercase: 0, uppercase: 0, neither: 3 }));
console.log(String(letterCaseCount('')) === String({ lowercase: 0, uppercase: 0, neither: 0 }));
