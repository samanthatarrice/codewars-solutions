/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/


function maxSequence (arr) {
  if (arr.every(value => value < 0)) return 0
  let maxVal = 0, currentVal = 0;
  for (let i = 0; i < arr.length; i++) {
    currentVal = Math.max(arr[i], currentVal + arr[i]);
    maxVal = Math.max(maxVal, currentVal);
  }
  return maxVal
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6 --> [4, -1, 2, 1]

/*
P: array of unknown length
R: if it's only positive numbers, return sum of whole array. if it's only negative, return 0. Otherwise, return the max sum of a contiguous subsequence of the array.
E: [-2, 1, -3, 4, -1, 2, 1, -5, 4] // 6 --> [4, -1, 2, 1]
*/
