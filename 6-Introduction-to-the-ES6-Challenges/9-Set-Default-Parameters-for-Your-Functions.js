// I learned how to Set Default Parameters for Your Functions

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));
