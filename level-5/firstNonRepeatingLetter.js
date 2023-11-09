/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

function firstNonRepeatingLetter (string) {
  let count = {}
  for (let char of string) {
    const lowerCaseChar = char.toLowerCase();
    lowerCaseChar in count ?
      count[lowerCaseChar] ++ :
      count[lowerCaseChar] = 1
  }
  for (let char of string) {
    const lowerCaseChar = char.toLowerCase();
    if (count[lowerCaseChar] === 1) {
      return char
    }
  }
  return ''
}

firstNonRepeatingLetter('sTreSS')


// Can also use map, which perserves the order of the letters:
function firstNonRepeatingLetter(string) {
  const count = new Map()
  for (let char of string) {
    const lowerCaseChar = char.toLowerCase();
    if (count.has(lowerCaseChar)) {
      count.set(lowerCaseChar, count.get(lowerCaseChar) + 1)
    } else {
      count.set(lowerCaseChar, 1)
    }
  }
  for (let char of string) {
    const lowerCaseChar = char.toLowerCase();
    if (count.get(lowerCaseChar) === 1) {
      return char;
    }
  }
  return '';
}
firstNonRepeatingLetter('sTreSS')

/*
P: string of unknown length
R: first non-repeating letter. If string contains all repeating characters, return an empty string
E: 'a' --> 'a', 'moonmen' --> 'e'
*/
