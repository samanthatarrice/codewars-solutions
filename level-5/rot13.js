/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return message
    .split('')
    .map(char => {
      if (!/[a-zA-Z]/.test(char)) {
        return char;
      }
      const isUpperCase = char === char.toUpperCase();
      const index = (alphabet.indexOf(char.toLowerCase()) + 13) % 26;
      return isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
    })
    .join('');
}
rot13('Test')

/*
P: string of unknown length. Can include letters, numbers, or special characters
R: string where each character is changed to the letter that comes 13 characters after it in the alphabet. If it isn't a letter, return that num or special char.
E: 'hello' --> 'urrb'
*/
