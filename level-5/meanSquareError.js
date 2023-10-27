/* Complete the function that:

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values = 81
and returns the average of those squared absolute value difference between each member pair. */

// Examples:
// [1, 2, 3], [4, 5, 6]              --> 4-1=3^2=9, 5-2=3^2=9, 6-3=3^2=9 27/3= 9  -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

var solution = function(firstArray, secondArray) {
  const divisor = firstArray.length
  const sums = []
  for (let i = 0; i < divisor; i++) {
    const sum = Math.abs(firstArray[i] -= secondArray[i])
    sums.push(sum)
  }
  const squaredNums = sums.map(num => num * num)
  return squaredNums.reduce((a, b) => a + b, 0)/divisor
}

solution([-1, 0], [0, -1])
