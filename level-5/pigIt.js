// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str.split(' ').reduce((acc, curr) => {
    acc += curr.match(/^[.,:!?]/) ? curr : curr.substring(1) + curr[0] + 'ay '
  }, '').trim()
}

// * Better to use regex to replace here.

pigIt('Pig latin is cool !')
