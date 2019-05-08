/* I learned how to add an item to the end of an array and remove a n item from the beginning of an array, I also learned how to male a variable equal to an item ive removed */

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
