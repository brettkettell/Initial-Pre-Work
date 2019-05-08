// I learned how to  Use the Rest Operator with Function Parameters

'use strict';
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
