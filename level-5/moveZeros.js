// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  const valuesArr = []
  const zerosArr = []
  arr.map(val => val === 0 ? zerosArr.push(val) : valuesArr.push(val))
  return [...valuesArr, ...zerosArr]
}

// * Better to use .sort() for this in one line of code:
// function moveZeros(arr) {
//   return arr.sort((a, b) => b === 0 ? -1 : 0);
// }

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
