/* I learned how to Use Destructuring Assignment with the Rest Operator to Reassign Array Elements */

const source = [1,2,3,4,5,6,7,8,9,10];
// change code below this line
const [a, b, ...arr] = source; // change this
// change code below this line
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
