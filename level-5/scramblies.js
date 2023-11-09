/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

P: two strings with only lowercase letters and no punctuation or digits
R: true if one string can be rearranged to match the other
E:  scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False
*/

function charCount(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

function scramble(str1, str2) {
  const charCount1 = charCount(str1);
  const charCount2 = charCount(str2);

  for (let char in charCount2) {
    if (!charCount1.hasOwnProperty(char) || charCount1[char] < charCount2[char]) {
      return false;
    }
  }
  return true;
}

scramble('cat', 'hucathl')
