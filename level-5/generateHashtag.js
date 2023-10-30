/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
  str = str
    .split(' ')
    .filter(char => char !== '')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join('')
  if (str.length > 140 || !str.length) {
    return false
  }
  return '#' + str
}
generateHashtag("code" + " ".repeat(140) + "wars")

/*
P: string
R: hastagged string with # at the front, all words capitalized, and no spaces. If the fiinal result is longer that 140 chars or or empty it should return false.
E:  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
*/
