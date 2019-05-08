// I learned how to write Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const positiveIntegers = arr.filter((num) => {
    return num >= 0 && Number.isInteger(num);

  });
  const squaredIntegers = positiveIntegers.map((num) => {

    return num ** 2;
  });

  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
