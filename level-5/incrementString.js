/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

P: string that could contain a number
R: same string with 1 added to the string if it contains a number, or 1 appended if it does not
E:  foo -> foo1
    foobar23 -> foobar24
    foo0042 -> foo0043
    foo9 -> foo10
    foo099 -> foo100
*/

function incrementString(str) {
  let endingNum = []
  for (let i = str.length - 1; i >= 0; i--) {
    if (+str[i] || +str[i] === 0) {
      endingNum.unshift(str[i])
    } else break
  }
  const startOfStr = str.slice(0, str.length - endingNum.length)
  const num = Number(endingNum.join('')) + 1
  const paddedNum = num.toString().padStart(endingNum.length, '0')
  return startOfStr + paddedNum
}

incrementString('foo000bar00100')
