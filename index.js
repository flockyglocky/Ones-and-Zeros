function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2);
}



// Test cases
console.log(binaryArrayToNumber([0, 0, 0, 1]));    // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0]));    // Output: 2
console.log(binaryArrayToNumber([0, 1, 0, 1]));    // Output: 5
console.log(binaryArrayToNumber([1, 0, 0, 1]));    // Output: 9
console.log(binaryArrayToNumber([0, 0, 1, 0]));    // Output: 2
console.log(binaryArrayToNumber([0, 1, 1, 0]));    // Output: 6
console.log(binaryArrayToNumber([1, 1, 1, 1]));    // Output: 15
console.log(binaryArrayToNumber([1, 0, 1, 1]));    // Output: 11
